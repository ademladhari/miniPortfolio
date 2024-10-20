import { motion } from 'framer-motion';

const SocialMediaLinks = () => {
  const links = ["INSTAGRAM", "TWITTER", "LINKEDIN"];

  return (
    <div className="bg-[#fadcd9] rounded-2xl py-2 sm:py-3 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center w-full h-full mx-auto space-y-2 sm:space-y-0">
      {links.map((link, index) => (
        <motion.a
          key={link}
          href="#"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1+index * 0.2, duration: 0.5 }}
          className="text-xs sm:text-sm md:text-lg text-gray-700 hover:text-gray-900 transition-colors"
        >
          {link}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
