export default function PromptInput() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[960px] h-[96px] mx-8 my-4 z-10">
      <div className="w-full h-full flex items-center justify-center rounded-[80px] p-[10px] gap-[10px] bg-white/5 backdrop-blur-[100px] shadow-[0px_8px_6px_0px_#0000000D,inset_0px_1px_1px_0px_#FFFFFF40,inset_0px_-1px_1px_0px_#FFFFFF40,inset_2px_3px_3px_-3px_#FFFFFF99]">
        <button className="rounded-full">
          <img src="/icons/add_butt.svg" width={44} height={44} />
        </button>
        <div className="w-[480px] h-[48px] flex my-auto mx-4 text-white text-lg focus:outline-none backdrop-blur-xl bg-gray-950/35 shadow-inner shadow-black/30 rounded-full px-4  relative">
          <input
            type="text"
            placeholder="Vision OS is the future 🤩"
            className="w-full h-full p-1 focus:outline-none bg-transparent"
          />
        </div>

        <button className="rounded-full">
          <img src="/icons/send_butt.svg" width={40} height={40} />
        </button>
      </div>
    </div>
  );
}
