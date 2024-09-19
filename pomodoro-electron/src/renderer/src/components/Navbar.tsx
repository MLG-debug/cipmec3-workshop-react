import { Minus, Square, X } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className="flex justify-end items-center h-8 fixed bg-zinc-900 w-full ">
    <div className="flex-1 w-full h-full grab-area" />
    <div className="flex ">
      {/* minimize, close and maximize */}
      <button
        className="flex justify-center items-center w-8 h-8 hover:bg-zinc-800"
        onClick={() => window.electron.ipcRenderer.send('minimize')}
      >
        <Minus className="text-white" size={12} />
      </button>
      <button
        className="flex justify-center items-center w-8 h-8 hover:bg-zinc-800"
        onClick={() => window.electron.ipcRenderer.send('maximize')}
      >
        <Square className="text-white" size={12} />
      </button>
      <button
        className="flex justify-center items-center w-8 h-8 hover:bg-red-800"
        onClick={() => window.electron.ipcRenderer.send('close')}
      >
        <X className="text-white" size={14} />
      </button>
    </div>
  </div>
  )
}
