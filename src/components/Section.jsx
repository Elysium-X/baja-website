import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className, ...props }) => {
  return (
    <motion.section
      className={` py-16 ${className}`}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      <div className=" mt-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;