import { motion } from 'framer-motion';
import circle from "../../assets/circle.png";

const ArtistSection = () => {
    const text = [
        "Julia Huang is an innovative AI artist,",
        "renowned for blending cutting-edge technology",
        "with creative expression. Based in LA,",
        "she crafts unique digital art experiences",
        "accessible globally."
    ];

    return (
        <div className="flex flex-col justify-between bg-[#fadcd9] rounded-2xl h-full w-full p-6 relative">
            <img
                src={circle}
                alt="Artist Icon"
                className="w-12 h-12 mb-4"
            />
            <div>
                {text.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.6 + index * 0.1,
                            duration: 0.6,
                        }}
                        className="text-gray-800 text-base sm:text-xs md:text-sm lg:text-sm xl:text-xl"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};

export default ArtistSection;