import { motion } from 'framer-motion';

const HeaderSection = () => {
  const links = ["Projects", "About", "Contact"];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-full bg-[#fadcd9] p-2 sm:p-4 rounded-2xl">
      {/* Animate the header text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl font-bold italic mb-2 sm:mb-0"
      >
        JULIA HUANG
      </motion.h1>

      {/* Animate the links with staggered effect */}
      <motion.div
        className="flex flex-wrap justify-center sm:justify-end text-base sm:text-lg md:text-xl lg:text-2xl font-bold italic"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {links.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: index * 0.2 }}
            className="text-[#213547] mx-2 sm:mx-3 md:mx-4 lg:mx-5 my-1 sm:my-0"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderSection;