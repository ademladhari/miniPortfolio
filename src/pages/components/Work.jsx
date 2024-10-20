import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from 'framer-motion';
import clouds from "../../assets/clouds.png";

const DesignShowcaseCard = () => {
  const items = ["Elara", "Verve", "Zephyr"];

  return (
    <div className="bg-[#fadcd9] rounded-2xl p-4 py-2 sm:p-6 md:p-8 sm:py-4 md:py-4 w-full h-full flex flex-col shadow-lg">
      <motion.div   initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay:1.8, duration: 0.6 }} className="flex justify-between items-start mb-2 sm:mb-4">
        <h2
        
          className="text-xl sm:text-2xl font-semibold text-gray-800"
        >
          Musea
        </h2>
        <HiArrowUpRight className="text-gray-600 w-6 h-6 sm:w-7 sm:h-7" />
      </motion.div>
      
      <div className="mb-2 h-[80%] sm:mb-3">
        <motion.img
          src={clouds}
          alt="Furniture design showcase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
        />
      </div>
      
      <div className="space-y-2 sm:space-y-3 font-semibold">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2 + index * 0.2, // Stagger the animation
              duration: 0.6,
            }}
            className={`border-b-2 sm:border-b-4 border-pink-200 py-1 sm:py-2`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignShowcaseCard;
