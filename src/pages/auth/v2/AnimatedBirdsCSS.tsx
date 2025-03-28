import useWindowWidth from "../../../hooks/useWindowWidth";
import "./styles.css";

const AnimatedBirds = ({ speed = 20, bgColor = "#2a3795", flip = false }) => {
  const { width } = useWindowWidth();

  const birds = [
    { id: 1, left: 10, bottom: 40, scale: 1.8, opacity: 0.05, speed: 40 }, // Biggest bird (back)
    { id: 2, left: 5, bottom: 30, scale: 1.6, opacity: 0.1, speed: 30 }, // Middle bird
    { id: 3, left: 10, bottom: 40, scale: 1.4, opacity: 0.2, speed: 20 }, // Smallest bird (front)
  ];

  const lerp = (min: number, max: number, t: number) => min + (max - min) * t;

  const getLeftPosition = (baseLeft: number) => {
    const minWidth = 320; // Smallest screen size
    const maxWidth = 1600; // Largest screen size
    const t = Math.min(
      1,
      Math.max(0, (width - minWidth) / (maxWidth - minWidth))
    );
    return lerp(-80, baseLeft, t); // Interpolates between -80% (small screens) and baseLeft% (large screens)
  };

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
            left: `${getLeftPosition(bird.left)}%`,
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
