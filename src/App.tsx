import { useState } from 'react'
import { Box } from '@mui/material'
import { FriendList } from './components/FriendList'
import { ChatWindow } from './components/ChatWindow'
import { friends, initialMessages } from './data/mockData'
import { Message } from './types'

function App() {
  const [selectedFriendId, setSelectedFriendId] = useState<string>('')
  const [messages, setMessages] = useState(initialMessages)

  const selectedFriend = friends.find(friend => friend.id === selectedFriendId) || null
  const currentMessages = messages[selectedFriendId] || []

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
    }

    setMessages(prev => ({
      ...prev,
      [selectedFriendId]: [...(prev[selectedFriendId] || []), newMessage],
    }))
  }

  const handleClearChat = () => {
    setMessages(prev => ({
      ...prev,
      [selectedFriendId]: [],
    }))
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 300 },
          height: { xs: 'auto', sm: '100%' },
          borderRight: { sm: 1 },
          borderBottom: { xs: 1, sm: 0 },
          borderColor: 'divider',
        }}
      >
        <FriendList
          friends={friends}
          selectedFriendId={selectedFriendId}
          onFriendSelect={setSelectedFriendId}
        />
      </Box>
      <Box sx={{ flexGrow: 1, height: { xs: 'calc(100vh - 200px)', sm: '100%' } }}>
        <ChatWindow
          messages={currentMessages}
          selectedFriend={selectedFriend}
          onSendMessage={handleSendMessage}
          onClearChat={handleClearChat}
        />
      </Box>
    </Box>
  )
}

export default App
