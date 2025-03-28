const VisionProChatLayout = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background Gradient with Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-gray-500 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(255,169,64,0.2),rgba(0,0,0,0.9))]"></div>
        </div>

        {/* Background Blur */}
        <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      </div>

      {/* Chat Layout */}
      <div className="relative flex h-full">
        {/* Sidebar */}
        {/* <div className="w-1/4 p-4 bg-gray-900/80 backdrop-blur-lg rounded-r-2xl">
          <h2 className="text-white text-2xl mb-4">History</h2>
          <input
            className="w-full p-2 bg-gray-800/80 text-white rounded-full placeholder-gray-400"
            placeholder="Search in History"
          />
          <ul className="mt-4 space-y-2">
            {[
              "Jenela",
              "Evelyn",
              "Michael",
              "Ava Davis",
              "Robert Taylor",
              "Olivia",
              "Mia",
            ].map((name, index) => (
              <li
                key={index}
                className="p-3 bg-gray-800/60 rounded-lg text-white cursor-pointer hover:bg-gray-700/60"
              >
                <p>{name}</p>
                <span className="text-gray-400 text-sm">
                  {index === 0 ? "8:56 PM" : "Yesterday"}
                </span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Chat Window */}
        {/* <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1 space-y-4 overflow-auto">
            <div className="self-start max-w-md p-4 bg-gray-800/80 text-white rounded-xl">
              <p>
                The height of the Egyptian pyramids varies depending on which
                one you’re referring to. Here are some of the most famous ones:
              </p>
            </div>
            <div className="self-end max-w-md p-4 bg-blue-600 text-white rounded-xl">
              <p>
                Do Aliens Exist in the Pyramids? Am I speculating Correctly?
              </p>
            </div>
            <div className="self-end flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <button className="text-white">🔊</button>
              <button className="text-white">▶️</button>
            </div>
            <div className="self-end max-w-xs p-3 bg-blue-600 text-white rounded-xl">
              <p>Aliens are Real?</p>
              <a href="#" className="text-blue-300 underline">
                Articles.com/Aliensarereal
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* Input Section with Background Effect */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[960px] h-[72px] my-4 flex items-center justify-center bg-white/15 backdrop-blur-[50px] rounded-full shadow-2xl shadow-black/40 z-50">
        <div className="flex gap-2 w-full max-w-[640px] items-center">
          <button className="w-8 h-8 bg-gray-800 rounded-full">➕</button>
          <div className=" flex flex-1 h-[32px] my-auto mx-4 text-white text-lg focus:outline-none backdrop-blur-xl bg-transparent shadow-inner shadow-black/30 rounded-full px-4 relative">
            <input
              type="text"
              placeholder="Vision OS is the future 🤯"
              className="w-full h-full p-1 focus:outline-none bg-transparent"
            />
            {/* Gradient and Blur Applied Directly on Input using Pseudo-Element */}
            {/* <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-gray-900 opacity-80 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.25),rgba(0,0,0,0.8))] opacity-70 rounded-full blur-2xl"></div>
            </div> */}
          </div>

          <button className="w-10 h-10 bg-blue-600 rounded-full">➡️</button>
        </div>
      </div>
    </div>
  );
};

export default VisionProChatLayout;
