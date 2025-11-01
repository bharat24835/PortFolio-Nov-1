import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { EmailJSConfig } from '../config/emailjs';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EmailJSConfig.serviceId,
        EmailJSConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EmailJSConfig.publicKey
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit
  };
}