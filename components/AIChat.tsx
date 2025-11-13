'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  RefreshCw,
  BookOpen,
  Puzzle,
  NotebookPen,
  ArrowUpRight,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { safeLocalStorage } from '@/utils/storage'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIChat() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const storageKey = useMemo(() => `ai-chat-history-${language}`, [language])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(max-width: 640px)')
    const handleChange = () => setIsMobile(media.matches)
    handleChange()
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = safeLocalStorage.getItem(storageKey)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as (Omit<Message, 'timestamp'> & { timestamp: string })[]
        setMessages(
          parsed.map((message) => ({
            ...message,
            timestamp: new Date(message.timestamp),
          }))
        )
        return
      } catch (error) {
        console.warn('Unable to read saved chat history', error)
      }
    }

    setMessages([])
  }, [storageKey])

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

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (messages.length === 0) {
      safeLocalStorage.removeItem(storageKey)
      return
    }

    const serializable = messages.map((message) => ({
      ...message,
      timestamp: message.timestamp.toISOString(),
    }))

    safeLocalStorage.setItem(storageKey, JSON.stringify(serializable))
  }, [messages, storageKey])

  const handleSend = async (messageText?: string) => {
    const text = (messageText ?? input).trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(text),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    const responsePatterns = [
      { key: 'aiChat.response.puberty', keywords: ['puberty', 'change', 'develop', 'akil'] },
      { key: 'aiChat.response.emotions', keywords: ['emotion', 'mood', 'feel', 'emosi', 'perasaan'] },
      { key: 'aiChat.response.communication', keywords: ['talk', 'communicat', 'conversation', 'listen', 'berbual'] },
      { key: 'aiChat.response.social', keywords: ['friend', 'social', 'peer', 'kawan'] },
      { key: 'aiChat.response.privacy', keywords: ['privacy', 'private', 'safe', 'selamat', 'trust'] },
      { key: 'aiChat.response.activities', keywords: ['game', 'activity', 'play', 'aktiviti'] },
      { key: 'aiChat.response.hygiene', keywords: ['hygiene', 'clean', 'shower', 'deodorant', 'bersih'] },
      { key: 'aiChat.response.nutrition', keywords: ['food', 'eat', 'diet', 'nutrition', 'snack', 'makan'] },
      { key: 'aiChat.response.sleep', keywords: ['sleep', 'rest', 'tidur', 'bed'] },
      { key: 'aiChat.response.boundaries', keywords: ['boundary', 'consent', 'respect', 'had', 'izin'] },
      { key: 'aiChat.response.digital', keywords: ['screen', 'phone', 'device', 'online', 'internet', 'media', 'digital'] },
      { key: 'aiChat.response.menstruation', keywords: ['period', 'menstruation', 'menstruasi', 'haid', 'cycle', 'pads'] },
    ] as const

    const matched = responsePatterns.find((pattern) =>
      pattern.keywords.some((keyword) => input.includes(keyword))
    )

    if (matched) {
      return t(matched.key)
    }

    return t('aiChat.response.default')
  }

  const suggestedQuestions = [
    t('aiChat.suggestions.q1'),
    t('aiChat.suggestions.q2'),
    t('aiChat.suggestions.q3'),
    t('aiChat.suggestions.q4'),
    t('aiChat.suggestions.q5'),
    t('aiChat.suggestions.q6'),
  ]

  const quickTopicKeys = ['communication', 'emotions', 'routines', 'culture', 'selfCare'] as const

  const resourceItems = [
    {
      key: 'parentGuide' as const,
      href: '/parent-guide',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      key: 'games' as const,
      href: '/games',
      icon: <Puzzle className="w-5 h-5" />,
    },
    {
      key: 'diary' as const,
      href: '/diary',
      icon: <NotebookPen className="w-5 h-5" />,
    },
  ]

  const handleClearHistory = () => {
    setMessages([])
    setInput('')
    setIsLoading(false)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all ${
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
            className={`fixed z-50 glass-effect shadow-2xl flex flex-col overflow-hidden rounded-3xl ${
              isMobile
                ? 'left-4 right-4 bottom-4 h-[75vh] max-h-[80vh]'
                : 'bottom-6 right-6 w-full max-w-md h-[600px]'
            }`}
          >
            {isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t('aiChat.closeLabel')}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-primary-600 shadow-lg border border-primary-100 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-3 sm:py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{t('aiChat.title')}</h3>
                  <p className="text-[11px] sm:text-xs opacity-90">{t('aiChat.subtitle')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearHistory}
                  className="hover:bg-white/20 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={t('aiChat.clearHistory')}
                  disabled={messages.length <= 1 && !isLoading}
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                {!isMobile && (
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label={t('aiChat.closeLabel')}
                    className="hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-white/40">
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
                    className={`flex-1 rounded-2xl p-3 sm:p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-white text-gray-800'
                    } shadow-md`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
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
              <div className="px-3 sm:px-4 py-2 bg-white/50 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-semibold">
                  {t('aiChat.suggestedTitle')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full border border-gray-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="px-3 sm:px-4 py-3 bg-white/60 border-t border-gray-200 space-y-2">
              <p className="text-xs text-gray-600 font-semibold">
                {t('aiChat.quickTopics.title')}
              </p>
              <div className="flex flex-wrap gap-2">
                {quickTopicKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleSend(t(`aiChat.quickTopics.items.${key}.prompt`))}
                    className="text-xs bg-white text-gray-700 px-3 py-2 rounded-full border border-gray-300 hover:border-primary-300 hover:text-primary-600 transition-colors"
                  >
                    {t(`aiChat.quickTopics.items.${key}.label`)}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-gray-500">{t('aiChat.historyNotice')}</p>
            </div>

            <div className="px-3 sm:px-4 pb-3 bg-white/60 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-500" />
                {t('aiChat.resources.title')}
              </p>
              <div className="space-y-2">
                {resourceItems.map((item) => (
                  <Link key={item.key} href={item.href} className="block">
                    <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all p-3 flex items-start gap-3">
                      <div className="text-primary-600 bg-primary-50 rounded-xl p-2">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">
                          {t(`aiChat.resources.items.${item.key}.title`)}
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {t(`aiChat.resources.items.${item.key}.description`)}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 bg-white/50 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder={t('aiChat.placeholder')}
                  className="flex-1 bg-white rounded-full px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={t('aiChat.sendLabel')}
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
