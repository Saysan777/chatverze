'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../firebase"

type Props = {
    chatId: string
}

// chatId is the id of the docs from db from file /chat/[id]/page.tsx
function ChatInput({ chatId }: Props) {
    const [ prompt, setPrompt ] = useState('');
    const { data: session } = useSession()

    // TODO: useSWR to get model
    const model = 'gpt-3.5-turbo';

    // sendMessage to openAi api
    const sendMessage = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!prompt) return;

        const input = prompt.trim();
        setPrompt('');

        // creating message object and defining its types : `Message` is defined in typind.d.ts
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }

        // this is also creating a new Key in doc called 'messages' and adding the messages
        //  collection(path, content)
        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

        // Toast notification
        const notification = toast.loading('chatVerze is thinking...');   //it provides an id and stores it in notification variable

        // Fetching data from our api we made 
        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, 
                chatId , 
                model,
                session
            })
        }).then(()=>{
            // Toast notification successfull
            toast.success('chatVerze has responded', {          //toast success will replace toast loading so we pass the loading id
                id: notification
            })
        })
    }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
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