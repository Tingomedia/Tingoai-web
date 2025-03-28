const GptLandingBirds = ({
    bgColor = "#4f48c1",
    flip = false,
}) => {
    const birds = [
        { id: 1, bottom: 0, scale: 2.4, opacity: 0.4, }, // Biggest bird (back)
        { id: 2, bottom: 0, scale: 1.6, opacity: 1,}, // Middle bird
        { id: 3, bottom: 0, scale: 1.8, opacity: 0.5,}, // Smallest bird (front)
    ];

    return (
        <div
            className={`absolute inset-0 overflow-hidden -z-10 `}
            style={flip ? { transform: "scaleX(-1)" } : {}}
        >
            {birds.map((bird) => (
                <img
                    key={bird.id}
                    src="/icons/Bird-gpt1.svg"
                    alt="Bird"
                    className="absolute w-auto h-full"
                    style={{
                        left: "30%",
                        top: "20%",
                        bottom: `${bird.bottom}%`,
                        transform: `translateX(-50%) scale(${bird.scale})`,
                        opacity: bird.opacity,
                    }}
                />
            ))}

            
        </div>
    );
};

const GptLandingPage = () => {
    return (
        <div className="w-full h-svh font-Cera tracking-wider relative flex flex-col items-center justify-center text-white bg-purple/50">
            {/* Birds in the background */}
            <GptLandingBirds />

            {/* Hero Text & CTA Button */}
            <div className="absolute text-center top-[20%]">
            <div className="w-full flex justify-center items-center">
                <img src="/icons/gpt-logo.svg" alt="" className="h-64" />
                </div>
                
                <div className="w-full flex justify-center gap-8 mt-6">
                <button className="px-6 py-3 border-2 bg-transparent text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
                    Get Started
                </button>
                <button className="px-6 py-3 border-2 bg-transparent text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
                    Explore Ideas
                </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-8 text-center  opacity-70">
                
              <div className="">
              <div className="w-full flex justify-center items-center">
                <img src="/icons/logo-footer.svg" alt="" className=" w-32" />
                </div>
              <div className="font-Cera text-white">
                Terms of use | Privacy policy
              </div>
              </div>
            </footer>
        </div>
    );
};


export default GptLandingPage;
