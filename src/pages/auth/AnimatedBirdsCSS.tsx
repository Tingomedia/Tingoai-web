import "./styles.css";

const AnimatedBirds = ({ speed = 20, bgColor = "#4f48c1", flip = false }) => {
  const birds = [
    { id: 1, left: 80, bottom: 40, scale: 2.6, opacity: 0.1, speed: 40 }, // Biggest bird (back)
    { id: 2, left: 65, bottom: 45, scale: 2, opacity: 0.2, speed: 30 }, // Middle bird
    { id: 3, left: 65, bottom: 40, scale: 1.4, opacity: 0.4, speed: 20 }, // Smallest bird (front)
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden -z-10"
      style={{
        backgroundColor: bgColor,
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      {birds.map((bird) => (
        <img
          key={bird.id}
          src="/icons/Bird.svg"
          alt="Bird"
          className="bird absolute w-auto h-full"
          style={{
            left: `-${bird.left}%`,
            bottom: `-${bird.bottom}%`,
            opacity: bird.opacity,
            animationDuration: `${speed}s`,
            transformOrigin: "center",
            ["--scale" as any]: bird.scale,
            ["--opacity" as any]: bird.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBirds;
