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

interface KnowledgeResource {
  label: string
  description: string
}

interface KnowledgeEntry {
  id: string
  keywords: string[]
  responseKey: string
  tipsKey: string
  resources: KnowledgeResource[]
}

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

  const handleSend = async (messageOverride?: string) => {
    const userText = (messageOverride ?? input).trim()
    if (!userText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userText,
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(userText),
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 900)
  }

  const getAIResponse = (userInput: string): string => {
    const normalized = userInput.toLowerCase()

    const resourcesMap = {
      parentGuide: { label: t('nav.parentGuide'), description: t('aiChat.response.resourceParentGuide') },
      changes: { label: t('nav.changes'), description: t('aiChat.response.resourceChanges') },
      games: { label: t('nav.games'), description: t('aiChat.response.resourceGames') },
      diary: { label: t('nav.diary'), description: t('aiChat.response.resourceDiary') },
      timeline: { label: t('nav.timeline'), description: t('aiChat.response.resourceTimeline') },
      bodyGuide: { label: t('nav.bodyGuide'), description: t('aiChat.response.resourceBodyGuide') }
    }

    const knowledgeBase: KnowledgeEntry[] = [
      {
        id: 'puberty',
        keywords: ['puberty', 'akil', 'baligh', 'period', 'menstru', 'growth', 'breast', 'voice', 'hair'],
        responseKey: 'puberty',
        tipsKey: 'pubertyTips',
        resources: [resourcesMap.parentGuide, resourcesMap.changes, resourcesMap.bodyGuide]
      },
      {
        id: 'emotions',
        keywords: ['emotion', 'mood', 'feel', 'stress', 'worry', 'anxious', 'sad', 'angry'],
        responseKey: 'emotions',
        tipsKey: 'emotionsTips',
        resources: [resourcesMap.diary, resourcesMap.games]
      },
      {
        id: 'communication',
        keywords: ['talk', 'communicat', 'conversation', 'speak', 'share', 'discuss'],
        responseKey: 'communication',
        tipsKey: 'communicationTips',
        resources: [resourcesMap.parentGuide, resourcesMap.timeline]
      },
      {
        id: 'social',
        keywords: ['friend', 'social', 'peer', 'relationship', 'bully'],
        responseKey: 'social',
        tipsKey: 'socialTips',
        resources: [resourcesMap.games, resourcesMap.timeline]
      },
      {
        id: 'privacy',
        keywords: ['privacy', 'safe', 'safety', 'secure', 'data'],
        responseKey: 'privacy',
        tipsKey: 'privacyTips',
        resources: [resourcesMap.diary, resourcesMap.bodyGuide]
      },
      {
        id: 'activities',
        keywords: ['game', 'activity', 'play', 'interactive', 'fun'],
        responseKey: 'activities',
        tipsKey: 'activitiesTips',
        resources: [resourcesMap.games, resourcesMap.timeline]
      },
      {
        id: 'default',
        keywords: [],
        responseKey: 'default',
        tipsKey: 'defaultTips',
        resources: [resourcesMap.parentGuide, resourcesMap.games, resourcesMap.diary]
      }
    ]

    const entry = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => normalized.includes(keyword))
    ) || knowledgeBase.find((item) => item.id === 'default')!

    const actionPlanTitle = t('aiChat.response.actionPlanTitle')
    const resourcesTitle = t('aiChat.response.resourcesTitle')

    const tipsRaw = t(`aiChat.response.${entry.tipsKey}`)
    const tipsList = tipsRaw && !tipsRaw.startsWith('aiChat.response.')
      ? tipsRaw.split('|').map((tip) => tip.trim()).filter(Boolean)
      : []

    const sections = [t(`aiChat.response.${entry.responseKey}`)]

    if (tipsList.length) {
      sections.push(
        `${actionPlanTitle}\n${tipsList.map((tip, index) => `${index + 1}. ${tip}`).join('\n')}`
      )
    }

    if (entry.resources.length) {
      sections.push(
        `${resourcesTitle}\n${entry.resources
          .map((resource) => `• ${resource.label} – ${resource.description}`)
          .join('\n')}`
      )
    }

    if (entry.id === 'default') {
      const languageSupport = t('aiChat.response.languageSupport')
      if (languageSupport && !languageSupport.startsWith('aiChat.response.')) {
        sections.push(languageSupport)
      }
    }

    return sections.filter(Boolean).join('\n\n')
  }

  const suggestedQuestions = [
    t('aiChat.suggestions.q1'),
    t('aiChat.suggestions.q2'),
    t('aiChat.suggestions.q3'),
    t('aiChat.suggestions.q4'),
    t('aiChat.suggestions.q5')
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
                      onClick={() => handleSend(question)}
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
