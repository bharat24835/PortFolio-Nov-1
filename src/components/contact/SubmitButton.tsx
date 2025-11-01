import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isLoading: boolean;
}

export default function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </motion.button>
  );
}