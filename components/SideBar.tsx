'use client'

import { collection, orderBy, query } from 'firebase/firestore'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'
import NewChat from './NewChat'
 
function Sidebar() {
  const { data: session } = useSession();

  // struture or path from here:  ChatRow(id) -> Links with chatid -> dynamic page we created to open those chat/[id]/page.tsx -> this page has the chat and chatInput -> chatInput we add doc to db -> chat we display from db

  // database connection and get the chats from the collection        Also used react-firebase hooks to establish smooth connection
  const [ chats, loading, error ] = useCollection(
    session && query(
      collection(db, 'users', session.user?.email!, 'chats'), 
      orderBy('createdAt', 'asc')
    )
  );

  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className="flex-1">
            <div className="">
                {/* New chat */}
                <NewChat />
  
                      <div className="hidden sm:inline">
                        <ModelSelection />
                      </div>
 
                    {/* Map through the chatRows */}
                    <div className="flex flex-col space-y-2 my-2">
                      {loading && (
                        <div className="animates-pulse text-center text-white">
                          Loading Chats...
                        </div>
                      )}

                    { chats?.docs.map(doc => (
                    <ChatRow key={doc.id} id={doc.id} />
                   )) }
                    </div>
                   
            </div>
        </div>
        { session && (
          <>
          <div onClick={ ()=> signOut() } className="flex flex-col text-center text-white">
            <div className="flex-grow hover:opacity-50 cursor-pointer">
              <img src={ session.user?.image! } alt="profile pic" className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' />
              <p>Logout</p>
            </div>
          
          </div> 
          </>
           ) 
           }
    </div>
  )
}
 
export default Sidebar