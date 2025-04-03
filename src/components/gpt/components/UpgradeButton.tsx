export default function UpgradeButton({ bg = false }) {
  return (
    <div className="relative group w-[240px] px-6 py-2 bg-[#121826] rounded-[16px]">
      {bg && (
        <div
          className="absolute -inset-[1px] rounded-[16px] pointer-events-none z-[-1]"
          style={{
            backgroundColor: "#121826",
            padding: "0.5px", // Fake border thickness
            background:
              "linear-gradient(150deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)",
            WebkitMask:
              "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
            WebkitMaskComposite: "xor",
          }}
        ></div>
      )}
      {/* Button */}
      <button className="flex flex-col justify-between items-start pointer-events-none">
        <span
          className="bg-[linear-gradient(90.86deg,#F8872B_0.74%,#0037FC_105.83%)] 
      bg-clip-text text-transparent font-cera font-medium text-[16px] flex"
        >
          TingoGPT-v2
        </span>
        <span className="text-white/60 font-Manrope text-[12px] font-medium py-1 rounded-full">
          Unlock more features with pro
        </span>
      </button>

      {/* Tooltip (Hidden by Default, Visible on Hover) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-[90%] mb-4 
                text-[12px] px-6 pt-2 pb-1 rounded-md 
                shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 ${
                  bg ? "bg-white/85 text-black" : "bg-white/15"
                }`}
      >
        Coming Soon
      </div>
    </div>
  );
}
