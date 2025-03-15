import {FC} from 'react'

const Clock: FC = () => {
  return (
    <div>
        <div className="w-32 h-32 flex justify-center items-center rounded-full bg-black/40 border border-slate-200/20">
            <div className="w-[10px] h-[1px] bg-secondary animate-spin font-bold"></div>
        </div>
    </div>
  )
}

export default Clock