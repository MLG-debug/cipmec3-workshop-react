import React from 'react'

interface ChatMessageProps {
  sender: string
  message: string
  time: string
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, time }) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-sm">{sender}</div>
        <div className="bg-gray-100 p-3 rounded-lg break-words">{message}</div>
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      </div>
    </div>
  )
}

export const WhatsAppChat: React.FC = () => {
  const messages = [
    {
      sender: 'Mama',
      message: 'Hallo! Was tut sich in Hagenberg?',
      time: '16:45'
    },
    {
      sender: 'Cool Kids',
      message:
        'Hallo Mama :) Wie immer sehr viel Stress mit den Projekten, aber sonst ist alles super!',
      time: '16:55'
    },
    {
      sender: 'Mama',
      message:
        'Ja ich weiß, aber nur noch ein paar Tage und dann sind eh Weihnachtsferien. Das musst halt noch durchhalten.',
      time: '16:55'
    },
    {
      sender: 'Cool Kids',
      message: 'Hast eh recht! Aber bin echt froh, wenn ich mal wieder nach Hause komme!',
      time: '17:01'
    },
    {
      sender: 'Mama',
      message: 'Wir freuen uns auch alles schon, wenn du wieder heim kommst.',
      time: '17:05'
    },
    {
      sender: 'Cool Kids',
      message: 'Kannst du mich dann eventuell in Linz abholen?',
      time: '17:15'
    },
    {
      sender: 'Mama',
      message: 'Sicher, ruf einfach an wenn du weißt wenn du zum holen bist.',
      time: '17:19'
    },
    {
      sender: 'Cool Kids',
      message: 'Okay super danke! Dann bis Freitag:)',
      time: '17:20'
    },
    {
      sender: 'Mama',
      message: 'Bis Freitag:)',
      time: '17:21'
    }
  ]

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Chat</h2>
          <div className="flex items-center gap-4">
            <button className="bg-gray-300 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-gray-300 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.time}
              sender={message.sender}
              message={message.message}
              time={message.time}
            />
          ))}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full px-3 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Schreibe eine Nachricht"
          />
        </div>
      </div>
    </div>
  )
}
