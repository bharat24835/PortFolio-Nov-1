'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmitButton';

export default function ContactForm() {
  const { formData, isLoading, handleSubmit, handleChange } = useContactForm();

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormTextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <SubmitButton isLoading={isLoading} />
    </motion.form>
  );
}