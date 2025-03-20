const BlinkingDot = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 animate-blink delay-800">
        <img src="/icons/Bird.svg" width={40} height={40} />
      </div>
    </div>
  );
};

export default BlinkingDot;
