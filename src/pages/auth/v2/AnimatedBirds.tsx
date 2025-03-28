import { motion } from "framer-motion";

const AnimatedBirds = ({
  direction = 30,
  speed = 20,
  bgColor = "#4f48c1",
  flip = false,
}) => {
  const birds = [
    { id: 1, left: 80, bottom: 40, scale: 2.6, opacity: 0.1, speed: 40 }, // Biggest bird (back)
    { id: 2, left: 65, bottom: 45, scale: 2, opacity: 0.2, speed: 30 }, // Middle bird
    { id: 3, left: 65, bottom: 40, scale: 1.4, opacity: 0.4, speed: 20 }, // Smallest bird (front)
  ];
  return (
    <div
      className={`absolute inset-0 overflow-hidden -z-10 bg-[${bgColor}]`}
      style={flip ? { transform: "scaleX(-1)" } : {}}
    >
      {birds.map((bird) => (
        <motion.img
          key={bird.id}
          src="/icons/Bird.svg"
          alt="Bird"
          className="absolute w-auto h-full"
          style={{
            left: `-${bird.left}%`,
            bottom: `-${bird.bottom}%`,
            scale: bird.scale,
            opacity: bird.opacity,
          }}
          animate={{
            x: [0, direction],
            y: [0, -direction],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBirds;
