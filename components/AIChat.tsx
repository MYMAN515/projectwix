'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

type ResourceLink = {
  title: string
  description: string
  cta: string
  href: string
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

  const handleSend = async (presetMessage?: string) => {
    const text = (presetMessage ?? input).trim()
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

    const selfCareKeywords = ['self care', 'self-care', 'selfcare', 'hygiene', 'penjagaan diri', 'kebersihan', 'العناية الذاتية', 'الرعاية الذاتية']
    if (selfCareKeywords.some((keyword) => input.includes(keyword))) {
      return t('aiChat.response.selfCare')
    }

    const privacyWords = ['privacy', 'privasi', 'خصوص', 'خصوصية']
    const respectWords = ['respect', 'boundaries', 'حدود', 'احترام', 'hormat', 'batas', 'batasan']
    if (privacyWords.some((keyword) => input.includes(keyword)) && respectWords.some((keyword) => input.includes(keyword))) {
      return t('aiChat.response.privacyRespect')
    }

    const keywordResponses: { response: string; keywords: string[] }[] = [
      { response: 'puberty', keywords: ['puberty', 'changes', 'akil', 'baligh', 'البلوغ', 'perubahan'] },
      { response: 'emotions', keywords: ['emotion', 'mood', 'feel', 'emosi', 'perasaan', 'مشاعر', 'مزاج'] },
      { response: 'communication', keywords: ['talk', 'communicate', 'conversation', 'berbual', 'bercakap', 'komunikasi', 'تحدث', 'حوار'] },
      { response: 'social', keywords: ['friend', 'friends', 'social', 'kawan', 'sahabat', 'sosial', 'أصدقاء', 'اجتماعي'] },
      { response: 'privacy', keywords: ['privacy', 'safe', 'privasi', 'selamat', 'خصوصية', 'أمان'] },
      { response: 'activities', keywords: ['game', 'games', 'activity', 'activities', 'permainan', 'aktiviti', 'نشاط', 'لعبة'] }
    ]

    for (const entry of keywordResponses) {
      if (entry.keywords.some((keyword) => input.includes(keyword))) {
        return t(`aiChat.response.${entry.response}`)
      }
    }

    return t('aiChat.response.default')
  }

  const suggestionsData = t('aiChat.suggestions')
  const suggestedQuestions =
    suggestionsData && typeof suggestionsData === 'object'
      ? Object.values(suggestionsData as Record<string, string>).filter((question) => Boolean(question))
      : []
  const followUpsRaw = t('aiChat.followUps')
  const followUps = Array.isArray(followUpsRaw) ? (followUpsRaw as string[]) : []
  const followUpTitle = t('aiChat.followUpTitle') as string
  const resourcesRaw = t('aiChat.resources')
  const resources = Array.isArray(resourcesRaw) ? (resourcesRaw as ResourceLink[]) : []
  const resourcesTitle = t('aiChat.resourcesTitle') as string

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
            {messages.length === 1 && suggestedQuestions.length > 0 && (
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

            {messages.length > 1 && followUps.length > 0 && (
              <div className="px-4 py-3 bg-white/60 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-semibold">{followUpTitle}</p>
                <div className="flex flex-wrap gap-2">
                  {followUps.map((followUp, index) => (
                    <button
                      key={`${followUp}-${index}`}
                      onClick={() => handleSend(followUp)}
                      className="text-xs bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 px-3 py-2 rounded-full border border-primary-100 hover:border-primary-300 transition-colors"
                    >
                      {followUp}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {resources.length > 0 && (
              <div className="px-4 py-4 bg-white/70 border-t border-gray-200 space-y-3">
                <p className="text-xs text-gray-600 font-semibold">{resourcesTitle}</p>
                  <div className="grid gap-2">
                    {resources.map((resource, index) => (
                    <Link
                      key={`${resource.title}-${index}`}
                      href={resource.href || '#'}
                      className="group flex items-center justify-between rounded-xl border border-white/60 bg-white px-4 py-3 shadow-sm hover:shadow-lg transition-all"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{resource.title}</p>
                        <p className="text-xs text-gray-500">{resource.description}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary-600 text-xs font-semibold">
                        {resource.cta}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
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
