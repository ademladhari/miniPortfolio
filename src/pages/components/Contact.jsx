import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from 'framer-motion';

const ContactCard = () => {
  return (
    <div    className="bg-[#f8afa6] rounded-2xl p-6 sm:p-8 md:p-6 w-full  mx-auto relative overflow-hidden h-full -[4/aspect3]">
      <motion.div  initial={{  x: '1%', y: '5%', opacity: 0 }}
    animate={{  x: 0, y: 0, opacity: 1 }}
    transition={{
       // Scale down first in place
      x: { delay: 1.6, duration: 0.6,  },  // Move after scaling down
      y: { delay: 1.6, duration: 0.6 ,},  // Sync movement in Y-axis
      opacity: {delay:1.6, duration: 1,  }  // Fade in with the scale
    }} className="flex justify-between items-start mb-16 sm:mb-24 md:mb-32">
        <p className="text-base sm:text-xs md:text-sm lg:text-sm  xl:text-xl lg:w-[60%] w-full text-gray-600">Have some questions?</p>
        <HiArrowUpRight className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </motion.div>
      <motion.div initial={{  x: '1%', y: '5%', opacity: 0 }}
    animate={{  x: 0, y: 0, opacity: 1 }}
    transition={{
       // Scale down first in place
      x: { delay: 1.6, duration: 0.6,  },  // Move after scaling down
      y: { delay: 1.6, duration: 0.6 ,},  // Sync movement in Y-axis
      opacity: {delay:1.6, duration: 1,  }  // Fade in with the scale
    }}  className="absolute bottom-0 left-0 right-0 p-6 ">
        <h2 className="xl:text-5xl lg:text-4xl text-2xl font-bold text-gray-800">Contact me</h2>
      </motion.div>
    </div>
  );
};

export default ContactCard;