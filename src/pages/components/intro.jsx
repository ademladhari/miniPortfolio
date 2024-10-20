import flower from '../../assets/flower.png';
import { motion } from 'framer-motion';

const Intro = () => {
  const textLines = [
    { text: "Artist Redefining", className: "font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" },
    {
      parts: [
        { text: "Architecture", className: "italic font-thin opacity-90 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" },
        { text: "with", className: "font-bold ml-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" }
      ],
      isMultiPart: true
    },
    { text: "AI-Driven Design", className: "font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" }
  ];

  return (
    <div className="bg-[#fadcd9] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg relative w-full h-full flex flex-col justify-between">
      {/* Text Section */}
      <div className="mt-auto">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8 + index * 0.2,
              duration: 0.6,
            }}
            className="block mb-1 sm:mb-2"
          >
            {line.isMultiPart ? (
              line.parts.map((part, partIndex) => (
                <span key={partIndex} className={part.className}>
                  {part.text}
                </span>
              ))
            ) : (
              <span className={line.className}>{line.text}</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Flower Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.6,
        }}
        className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
      >
        <img src={flower} alt="Flower" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Intro;