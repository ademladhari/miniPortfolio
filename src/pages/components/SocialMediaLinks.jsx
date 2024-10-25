import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaLinks = () => {
  const links = ["INSTAGRAM", "TWITTER", "LINKEDIN"];

  return (
    <div className="bg-orange-50 rounded-xl p-4 flex flex-row justify-between items-center w-full">
      {links.map((link, index) => (
        <motion.a
          key={link}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 + index * 0.2, duration: 0.5 }}
          className="text-xs sm:text-sm md:text-xs lg:text-base xl:text-lg 2xl:text-2xl text-gray-700 hover:text-gray-900 transition-colors"
        >
          {link}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;