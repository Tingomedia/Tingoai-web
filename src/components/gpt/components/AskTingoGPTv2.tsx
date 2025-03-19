const VisionProChatLayout = () => {
  return (
    <div className="bg-[url('/images/chat_bg.jpg')] bg-cover bg-center w-full h-screen">
      <div className="w-full h-full shadow-[inset_-1px_1px_1px_-2px_#FFFFFF59,0px_24px_30px_0px_#0000000D] backdrop-blur-[196px]">
        <div className="w-full h-full flex bg-white/5">
          <div className="flex flex-col flex-1 bg-white/5 relative">
            <div
              className="absolute top-0 w-full h-[72px] flex items-center bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05))]
                    backdrop-blur-[196px]
                    shadow-[0px_24px_30px_0px_#0000000D]"
            >
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-[50px] max-h-full max-w-full object-contain pl-2 pt-2"
              />
              <div></div>
            </div>
          </div>

          {/* Input Section with Background Effect */}
        </div>
      </div>
    </div>
  );
};

export default VisionProChatLayout;
