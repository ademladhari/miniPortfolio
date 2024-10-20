import { motion } from 'framer-motion';

const HeaderSection = () => {
  const links = ["Projects", "About", "Contact"];

  return (
    <div className="flex justify-between items-center h-full bg-[#fadcd9] p-4 rounded-2xl">
      {/* Animate the header text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold italic"
      >
        JULIA HUANG
      </motion.h1>

      {/* Animate the links with staggered effect */}
      <motion.div
        className="flex text-2xl font-bold italic space-x-10"
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
            className="text-[#213547]"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderSection;
