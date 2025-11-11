'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Bot, User, Sparkles, Heart, Loader2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function ChatPage() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chat.welcome'),
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Puberty-related questions
    if (lowerMessage.includes('puberty') || lowerMessage.includes('changes')) {
      return t('chat.responses.puberty')
    }
    
    if (lowerMessage.includes('mood') || lowerMessage.includes('emotion') || lowerMessage.includes('feeling')) {
      return t('chat.responses.emotions')
    }
    
    if (lowerMessage.includes('talk') || lowerMessage.includes('communicate') || lowerMessage.includes('conversation')) {
      return t('chat.responses.communication')
    }
    
    if (lowerMessage.includes('friend') || lowerMessage.includes('social')) {
      return t('chat.responses.friends')
    }
    
    if (lowerMessage.includes('body') || lowerMessage.includes('physical')) {
      return t('chat.responses.body')
    }
    
    if (lowerMessage.includes('school') || lowerMessage.includes('grade')) {
      return t('chat.responses.school')
    }
    
    if (lowerMessage.includes('privacy') || lowerMessage.includes('safe')) {
      return t('chat.responses.privacy')
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return t('chat.responses.help')
    }
    
    if (lowerMessage.includes('game') || lowerMessage.includes('activity')) {
      return t('chat.responses.games')
    }
    
    if (lowerMessage.includes('diary') || lowerMessage.includes('journal')) {
      return t('chat.responses.diary')
    }
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return t('chat.responses.greeting')
    }
    
    if (lowerMessage.includes('thank')) {
      return t('chat.responses.thanks')
    }
    
    // Default response
    return t('chat.responses.default')
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    t('chat.suggestions.q1'),
    t('chat.suggestions.q2'),
    t('chat.suggestions.q3'),
    t('chat.suggestions.q4'),
  ]

  const handleSuggestionClick = (question: string) => {
    setInputText(question)
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 h-[calc(100vh-80px)] flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bot className="w-10 h-10 md:w-12 md:h-12 text-purple-600" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('chat.title')}
          </h1>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{t('chat.subtitle')}</p>
      </motion.div>

      {/* Chat Messages Area */}
      <div className="flex-1 glass-effect rounded-3xl p-4 md:p-6 overflow-y-auto mb-6">
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] md:max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-500' 
                      : 'bg-gradient-to-r from-purple-400 to-pink-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-white shadow-md text-gray-800'
                  }`}>
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 max-w-[70%]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-pink-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && !isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <p className="text-gray-600 text-sm mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t('chat.suggestedQuestions')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-left bg-purple-50 hover:bg-purple-100 text-gray-700 rounded-xl p-3 text-sm transition-colors border border-purple-200"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-4"
      >
        <div className="flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chat.placeholder')}
            className="flex-1 bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
            disabled={isTyping}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTyping ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Send className="w-6 h-6" />
            )}
          </motion.button>
        </div>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <Heart className="w-3 h-3" />
          {t('chat.note')}
        </p>
      </motion.div>
    </div>
  )
}
