'use client'

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
    chatId: string;
}

function Chat({chatId}: Props) {
  const { data: session } = useSession();

  const [ messages ] = useCollection(session && query(collection(db, 'users', session?.user?.email!,'chats', chatId, 'messages' ), orderBy('createdAt', 'asc') ));

  return (
    // we applied flex-1 to move the chatInput to the bottom
    //Baisc concept of flex-1 is that other element will take the space as their content and the remaining space will be added to the container with property flex:1 
    // To apply flex-1 its parent must have display flex . Chat has its parent element page chat/[id]/page.tsx which has display flex in it.
    <div className="flex-1 overflow-auto overflow-x-hidden">
      { messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started! Happy searching
          </p>
            <ArrowDownCircleIcon className="h-1- w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      ) }
        
      { messages?.docs.map( (message) => ( <Message key={message.id} message={message.data()} />) )}
    </div>
  )
}

export default Chat