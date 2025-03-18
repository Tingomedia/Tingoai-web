export default function GradientBorder({
  angle = 90,
  radius = 30,
}: {
  angle?: number;
  radius?: number;
}) {
  return (
    <div
      className={`absolute -inset-[1px] rounded-[${radius}px] pointer-events-none z-[-1]`}
      style={{
        padding: "2px", // Fake border thickness
        background: `linear-gradient(${angle}deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)`,
        WebkitMask:
          "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
        WebkitMaskComposite: "xor",
      }}
    ></div>
  );
}
