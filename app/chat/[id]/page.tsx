
import React from 'react'
import Chat from '../../../components/Chat';
import ChatInput from '../../../components/ChatInput'

type Props= {
  params: {
    id: string
  }
}

// this page is a dynamic page which will be called with different id  i.e [id] so it can take its params value as a prop
function chatPage({ params: { id }} :Props) {
  return (
  <div className="flex flex-col h-screen overflow:hidden">
    {/* chat */}
    <Chat chatId={id}/>
    {/* chatInput  */}
    <ChatInput chatId={id} />
  </div>
  )
}

export default chatPage