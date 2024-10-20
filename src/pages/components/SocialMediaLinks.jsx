import { motion } from 'framer-motion';

const SocialMediaLinks = () => {
  const links = ["INSTAGRAM", "TWITTER", "LINKEDIN"];

  return (
    <div className="bg-[#fadcd9] rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center w-full h-full">
      {links.map((link, index) => (
        <motion.a
          key={link}
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 + index * 0.2, duration: 0.5 }}
          className="w-full sm:w-auto text-center py-1 sm:py-0 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 hover:text-gray-900 transition-colors"
        >
          {link}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;