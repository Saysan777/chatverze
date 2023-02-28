'use client'

type Props = {
    chatId: string;
}

function Chat({chatId}: Props) {
  return (
    // we applied flex-1 to move the chatInput to the bottom
    //Baisc concept of flex-1 is that other element will take the space as their content and the remaining space will be added to the container with property flex:1 
    // To apply flex-1 its parent must have display flex . Chat has its parent element page chat/[id]/page.tsx which has display flex in it.
    <div className="flex-1">
      
    </div>
  )
}

export default Chat