'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  followUps?: string[]
}

type AIResponse = {
  text: string
  followUps?: string[]
}

const parseList = (value: string): string[] =>
  typeof value === 'string'
    ? value
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean)
    : []

export default function AIChat() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting message
      setMessages([{
        id: '1',
        role: 'assistant',
        content: t('aiChat.greeting'),
        timestamp: new Date()
      }])
    }
  }, [isOpen, t, messages.length])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulated AI response (replace with API integration when ready)
    setTimeout(() => {
      const aiMessage = getAIResponse(input)
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiMessage.text,
        followUps: aiMessage.followUps,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const knowledgeBase = [
    {
      id: 'puberty',
      keywords: ['puberty', 'changes', 'body', 'hair', 'period', 'growth'],
      response: t('aiChat.response.puberty'),
      tips: parseList(t('aiChat.tips.puberty')),
      followUps: parseList(t('aiChat.followUps.puberty'))
    },
    {
      id: 'emotions',
      keywords: ['emotion', 'mood', 'feel', 'anxious', 'sad', 'angry'],
      response: t('aiChat.response.emotions'),
      tips: parseList(t('aiChat.tips.emotions')),
      followUps: parseList(t('aiChat.followUps.emotions'))
    },
    {
      id: 'communication',
      keywords: ['talk', 'communicate', 'conversation', 'discussion', 'speak'],
      response: t('aiChat.response.communication'),
      tips: parseList(t('aiChat.tips.communication')),
      followUps: parseList(t('aiChat.followUps.communication'))
    },
    {
      id: 'social',
      keywords: ['friend', 'social', 'relationship', 'peer', 'bully'],
      response: t('aiChat.response.social'),
      tips: parseList(t('aiChat.tips.social')),
      followUps: parseList(t('aiChat.followUps.social'))
    },
    {
      id: 'privacy',
      keywords: ['privacy', 'safe', 'security', 'data'],
      response: t('aiChat.response.privacy'),
      tips: parseList(t('aiChat.tips.privacy')),
      followUps: parseList(t('aiChat.followUps.privacy'))
    },
    {
      id: 'activities',
      keywords: ['game', 'activity', 'play', 'fun'],
      response: t('aiChat.response.activities'),
      tips: parseList(t('aiChat.tips.activities')),
      followUps: parseList(t('aiChat.followUps.activities'))
    }
  ]

  const formatResponse = (response: string, tips: string[], followUps: string[]): AIResponse => {
    const tipTitle = t('aiChat.tipTitle')
    const followUpTitle = t('aiChat.followUpTitle')

    const lines = [response]

    if (tips.length > 0) {
      lines.push(`\n${tipTitle}`)
      tips.forEach(tip => lines.push(`• ${tip}`))
    }

    const followUpList = followUps.slice(0, 3)

    if (followUpList.length > 0) {
      lines.push(`\n${followUpTitle}`)
      followUpList.forEach(item => lines.push(`→ ${item}`))
    }

    return {
      text: lines.join('\n'),
      followUps: followUpList.length ? followUpList : undefined
    }
  }

  const getAIResponse = (userInput: string): AIResponse => {
    const input = userInput.toLowerCase()

    const matched = knowledgeBase.find(entry =>
      entry.keywords.some(keyword => input.includes(keyword))
    )

    if (matched) {
      return formatResponse(matched.response, matched.tips, matched.followUps)
    }

    const defaultTips = parseList(t('aiChat.tips.general'))
    const defaultFollowUps = parseList(t('aiChat.followUps.general'))
    return formatResponse(t('aiChat.response.default'), defaultTips, defaultFollowUps)
  }

  const suggestedQuestions = [
    t('aiChat.suggestions.q1'),
    t('aiChat.suggestions.q2'),
    t('aiChat.suggestions.q3'),
    t('aiChat.suggestions.q4'),
    t('aiChat.suggestions.q5'),
    t('aiChat.suggestions.q6')
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center`}
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[600px] glass-effect rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('aiChat.title')}</h3>
                  <p className="text-xs opacity-90">{t('aiChat.subtitle')}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    } text-white`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Bot className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`flex-1 rounded-2xl p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-white text-gray-800'
                    } shadow-md`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    {message.role === 'assistant' && message.followUps && message.followUps.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.followUps.map((item, idx) => (
                          <button
                            key={`${message.id}-follow-${idx}`}
                            onClick={() => setInput(item)}
                            className="rounded-full border border-primary-100/70 bg-primary-50/60 px-3 py-1 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-100"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-white/50 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-semibold">
                  {t('aiChat.suggestedTitle')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full border border-gray-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white/50 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('aiChat.placeholder')}
                  className="flex-1 bg-white rounded-full px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
