"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-12 mt-20 bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg font-mono">
            Designed & Built by{' '}
            <span className="text-primary font-bold">
              Riazul Islam
            </span>{' '}
            <span className="animate-pulse inline-block">🚀</span>
          </p>
          <p className="mt-2 text-sm text-foreground/80">
            Copyright &copy; {new Date().getFullYear()} Riazul Islam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;