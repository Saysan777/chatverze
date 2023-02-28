'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"
import { useState } from "react"

type Props = {
    chatId: string
}

function ChatInput({ chatId }: Props) {
    const [ prompt, setPrompt ] = useState('');
    const { data: session } = useSession()
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form className="p-5 space-x-5 flex">
            <input 
            value={prompt}
            className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
            disabled={!session}
            onChange={(e)=>{setPrompt(e.target.value)}}
            type="text" placeholder="Type your message" />
            
            <button 
            type='submit' disabled={!prompt || !session } 
            className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'>
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            </button>
        </form>

        <div className="">
            {/* Modal selections */}
        </div>
    </div>
  )
}

export default ChatInput