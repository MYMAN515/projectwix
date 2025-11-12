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
}

interface ResponseTemplate {
  title?: string
  intro?: string
  tips?: string[]
  starters?: string[]
  reminders?: string[]
  resources?: string[]
  closing?: string
}

const KEYWORD_GROUPS: Record<string, string[]> = {
  puberty: ['puberty', 'change', 'changes', 'akil baligh', 'baligh', 'perubahan', 'بلوغ', 'النمو', 'الجسد'],
  emotions: ['emotion', 'emotions', 'feel', 'feeling', 'mood', 'emosi', 'perasaan', 'hati', 'مزاج', 'شعور', 'مشاعر'],
  communication: ['talk', 'communicat', 'conversation', 'berbual', 'bercakap', 'bincang', 'komunikasi', 'تحدث', 'حوار', 'كلام'],
  social: ['friend', 'friends', 'social', 'peer', 'kawan', 'sosial', 'rakan', 'persahabatan', 'صديق', 'أصدقاء', 'اجتماع'],
  privacy: ['privacy', 'private', 'safe', 'safety', 'secure', 'privasi', 'keselamatan', 'selamat', 'batas', 'حدود', 'أمان', 'سلامة'],
  activities: ['game', 'games', 'play', 'activity', 'activities', 'permainan', 'aktiviti', 'main', 'نشاط', 'أنشطة', 'لعبة']
}

export default function AIChat() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const sharedLabels = t<Record<string, string>>('aiChat.shared')
  const responseTemplates = t<Record<string, ResponseTemplate>>('aiChat.response')
  const suggestionsData = t<{ title: string; items: string[] }>('aiChat.suggestions')
  const topicData = t<{ title: string; items: { id: string; label: string; question: string }[] }>('aiChat.topics')

  const suggestionItems = suggestionsData?.items ?? []
  const topicItems = topicData?.items ?? []

  const formatResponse = (template?: ResponseTemplate): string => {
    const labels = {
      tips: sharedLabels?.tipsTitle ?? 'Key steps',
      starters: sharedLabels?.startersTitle ?? 'Conversation starters',
      reminders: sharedLabels?.remindersTitle ?? 'Gentle reminders',
      resources: sharedLabels?.resourcesTitle ?? 'Keep exploring'
    }

    if (!template) {
      return responseTemplates?.default?.intro ?? t('aiChat.greeting')
    }

    const sections: string[] = []
    if (template.title) sections.push(`🌟 ${template.title}`)
    if (template.intro) sections.push(template.intro)

    const buildList = (title: string, items?: string[]) => {
      if (!items || items.length === 0) return
      sections.push(`${title}:\n• ${items.join('\n• ')}`)
    }

    buildList(labels.tips, template.tips)
    buildList(labels.starters, template.starters)
    buildList(labels.reminders, template.reminders)
    buildList(labels.resources, template.resources)

    if (template.closing) sections.push(template.closing)

    return sections.join('\n\n')
  }

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

  const handleSend = async (overrideText?: string) => {
    const text = (overrideText ?? input).trim()
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
    const normalized = userInput.toLowerCase()
    let matchedKey: string | null = null

    for (const [key, terms] of Object.entries(KEYWORD_GROUPS)) {
      if (terms.some((term) => normalized.includes(term))) {
        matchedKey = key
        break
      }
    }

    const templateKey = matchedKey ?? 'default'
    const template = responseTemplates?.[templateKey] ?? responseTemplates?.default

    return formatResponse(template)
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

            {topicItems.length > 0 && messages.length <= 3 && (
              <div className="px-4 py-3 bg-white/40 border-b border-white/50">
                <p className="text-xs text-gray-600 font-semibold mb-2">
                  {topicData?.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {topicItems.map((topic) => (
                    <motion.button
                      key={topic.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={isLoading}
                      onClick={() => handleSend(topic.question)}
                      className="text-xs md:text-sm bg-white text-gray-700 px-3 py-2 rounded-full border border-primary-200 shadow-sm hover:shadow-md transition-all disabled:opacity-60"
                    >
                      {topic.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

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
            {messages.length === 1 && suggestionItems.length > 0 && (
              <div className="px-4 py-2 bg-white/50 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-semibold">
                  {suggestionsData?.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestionItems.map((question, index) => (
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
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
