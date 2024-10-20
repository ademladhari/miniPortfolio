import { motion } from 'framer-motion';
import HeaderSection from './components/header';
import Intro from './components/intro';
import ArtistSection from './components/artisticSection';
import portrait from "../assets/PORTRAIT.png";
import ContactCard from './components/Contact';
import DesignShowcaseCard from './components/Work';
import SocialMediaLinks from './components/SocialMediaLinks';

const CustomShape = () => {

  return (
    <div className="h-screen w-full bg-[#f9f1f0] overflow-hidden flex flex-col">
      {/* Red Section */}
      <motion.div 
       initial={{ scale: 0.4, x: '0', y: '50%', opacity: 0 }}
       animate={{ scale: 1, x: '0', y: '0',opacity: 1 }}
       transition={{
         scale: { duration: 1 },  // Scale down first in place
         x: {delay:1.7,  duration: 0.6 },  // Move after scaling down
         y: { delay:1.7, duration: 0.6 },  // Sync movement in Y-axis
         opacity: {delay:1.7, duration: 1 }  // Fade in with the scale
       }}
        className="w-[98%] h-[8%] my-auto mx-auto"
      >
        <HeaderSection />
      </motion.div>

      {/* Main Content */}
      <div className="h-[90%] w-[98%] mx-auto flex flex-row justify-between items-center">
        {/* Left Side */}
        <div className="w-[70%] h-[98%] flex flex-col justify-between gap-4">
          {/* Top Section */}
          <section className="w-full  flex h-[59%] justify-center gap-2">
            <motion.div
              initial={{ scale: 0.2, x: '50%', y: '20%', opacity: 0 }}
              animate={{ scale: 1, x:'0', y: '0' ,opacity: 1 }}
              transition={{
                scale: { duration: 1 },  // Scale down first in place
                x: {delay:1.3,  duration: 0.6 },  // Move after scaling down
                y: { delay:1.3, duration: 0.6 },  // Sync movement in Y-axis
                opacity: {delay:1.3, duration: 1 }  // Fade in with the scale
              }}
              className="w-[66%] z-0 relative"
            >
              <Intro />
            </motion.div>
            {/* Animated Image */}
            <motion.div
  className="w-[32%] flex justify-center relative z-10 items-center"
  initial={{ scale: 1.7, x: '-50%', y: '20%', opacity: 0 }}
  animate={{ scale: 1, x: '0', y: '0', opacity: 1 }}
  transition={{
    scale: { duration: 1, ease: [0.5, 0.6, 0.3, 0.6] },
    x: { delay: 1, duration: 0.6, ease: [0.5, 0.6, 0.3, 0.6] },
    y: { delay: 1, duration: 0.6, ease: [0.5, 0.6, 0.3, 0.6] },
    opacity: {  duration: 1, ease: [0.5, 0.6, 0.3, 0.6] }
  }}
>
  <img
    className="w-full h-full  object-cover rounded-2xl"
    src={portrait}
    alt="Portrait"
  />
</motion.div>




          </section>

          {/* Bottom Section */}
          <section className="w-full h-[39%] flex gap-2">
            <motion.div
                 initial={{ scale: 0.1, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{
                   scale: { delay:1,duration: 1 },  // Scale down first in place
                    // Sync movement in Y-axis
                   opacity: {delay:1, duration: 1 }  // Fade in with the scale
                 }}
              
              className="w-[49%] h-full"

            >
              <ArtistSection />
            </motion.div>
            <motion.div
              initial={{ scale: 0.2, x: '20%', y: '-50%', opacity: 0 }}
              animate={{ scale: 1, x: '0', y: '0' ,opacity: 1 }}
              transition={{
                scale: {delay:1, duration: 1 },  // Scale down first in place
                x: {delay:1.3,  duration: 0.6 },  // Move after scaling down
                y: { delay:1.3, duration: 0.6 },  // Sync movement in Y-axis
                opacity: {delay:1, duration: 1 }  // Fade in with the scale
              }}
              className="w-[49%] relative -z-0 h-full"
            >
              <ContactCard />
            </motion.div>
          </section>
        </div>

        {/* Right Side */}
        <section className="w-[30%] h-[98%] flex flex-col justify-between gap-4">
          <motion.div
          initial={{ scale: 0.2,  x: '-50%', y: '0' , opacity: 0 }}
          animate={{ scale: 1,  x: '0', y: '0' ,opacity: 1 }}
          transition={{
            scale: {delay:1, duration: 1 },  // Scale down first in place
            x: {delay:1.3,  duration: 0.6 },  // Move after scaling down
            y: { delay:1.3, duration: 0.6 },  // Sync movement in Y-axis
            opacity: {delay:1, duration: 1 }  // Fade in with the scale
          }}
            className="h-[90%]"
          >
            <DesignShowcaseCard />
          </motion.div>
          <motion.div
          initial={{ scale:  0.5,  x: '0%', y: '-70%', opacity: 0 }}
              animate={{ scale:  1,  x: '0%', y: '0' ,opacity: 1 }}
              transition={{
                scale: {delay:1, duration: 1 },  // Scale down first in place
                x: {delay:2.1,  duration: 0.6 },  // Move after scaling down
                y: { delay:2.1, duration: 0.6 },  // Sync movement in Y-axis
                opacity: {delay:2.1, duration: 1 }  // Fade in with the scale
              }}
            className="h-[10%]"
          >
            <SocialMediaLinks />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CustomShape;