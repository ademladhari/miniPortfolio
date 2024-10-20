import flower from '../../assets/flower.png';
import { motion } from 'framer-motion';

const Intro = () => {
  const textLines = [
    { text: "Artist Redefining", className: "font-bold xl:text-6xl lg:text-4xl text-2xl" },
    { 
      parts: [
        { text: "Architecture", className: "italic font-thin opacity-90 xl:text-6xl lg:text-3xl text-xl" },
        { text: "with", className: "font-bold ml-1 xl:text-6xl lg:text-4xl text-2xl" }
      ],
      isMultiPart: true
    },
    { text: "AI-Driven Design", className: "font-bold xl:text-6xl lg:text-4xl text-2xl" }
  ];

  return (
    <div className="bg-[#fadcd9] p-8 rounded-2xl shadow-lg relative w-full h-full">
      {/* Text Section positioned bottom-right */}
      <div className="absolute bottom-9 left-8 text-right">
        {textLines.map((line, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8 + index * 0.2,
              duration: 0.6,
            }}
            className="block"
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
          </motion.span>
        ))}
      </div>

      {/* Flower Image in the top-right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.6,
        }}
        className="absolute top-4 right-4 w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
      >
        <img src={flower} alt="Flower" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Intro;