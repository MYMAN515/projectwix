'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  BookOpen,
  Gamepad2,
  ShieldCheck,
  Users,
  Lightbulb,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  tips?: string[]
  resources?: { label: string; href: string; icon: JSX.Element }[]
}

type ResourceKey =
  | 'parentGuide'
  | 'games'
  | 'diary'
  | 'bodyGuide'
  | 'team'
  | 'welcome'
  | 'guidance'

type ResponseKey =
  | 'puberty'
  | 'communication'
  | 'emotions'
  | 'social'
  | 'privacy'
  | 'activities'
  | 'hygiene'
  | 'nutrition'
  | 'sleep'
  | 'anxiety'
  | 'bullying'
  | 'default'

type TipKey =
  | 'normalize'
  | 'useMoments'
  | 'activeListening'
  | 'doorOpen'
  | 'emotionToolkit'
  | 'validate'
  | 'friendship'
  | 'rolePlay'
  | 'privacyExplain'
  | 'space'
  | 'coLearning'
  | 'celebrate'
  | 'routine'
  | 'products'
  | 'balancedPlate'
  | 'familyMeals'
  | 'sleepHygiene'
  | 'screenTime'
  | 'calming'
  | 'seekSupport'
  | 'listenFirst'
  | 'schoolSupport'
  | 'teamSpirit'
  | 'stayCurious'

type KnowledgeEntry = {
  keywords: string[]
  responseKey: ResponseKey
  tipKeys: TipKey[]
  resourceKeys: ResourceKey[]
}

type AIResponse = {
  content: string
  tips?: string[]
  resources?: { label: string; href: string; icon: JSX.Element }[]
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ['puberty', 'conversation', 'talk', 'start', 'explain', 'body changes'],
    responseKey: 'puberty',
    tipKeys: ['normalize', 'useMoments'],
    resourceKeys: ['parentGuide', 'welcome'],
  },
  {
    keywords: ['communicate', 'communication', 'listen', 'share', 'discussion'],
    responseKey: 'communication',
    tipKeys: ['activeListening', 'doorOpen'],
    resourceKeys: ['parentGuide', 'diary'],
  },
  {
    keywords: ['emotion', 'feel', 'feelings', 'mood', 'sad', 'angry', 'overwhelmed'],
    responseKey: 'emotions',
    tipKeys: ['emotionToolkit', 'validate'],
    resourceKeys: ['diary', 'games'],
  },
  {
    keywords: ['friend', 'friends', 'social', 'peer', 'relationship', 'lonely'],
    responseKey: 'social',
    tipKeys: ['friendship', 'rolePlay'],
    resourceKeys: ['parentGuide'],
  },
  {
    keywords: ['privacy', 'safe', 'security', 'data', 'secret'],
    responseKey: 'privacy',
    tipKeys: ['privacyExplain', 'space'],
    resourceKeys: ['welcome', 'diary'],
  },
  {
    keywords: ['game', 'activity', 'activities', 'fun', 'play', 'engage'],
    responseKey: 'activities',
    tipKeys: ['coLearning', 'celebrate'],
    resourceKeys: ['games'],
  },
  {
    keywords: ['hygiene', 'odor', 'smell', 'clean', 'deodorant', 'bath'],
    responseKey: 'hygiene',
    tipKeys: ['routine', 'products'],
    resourceKeys: ['bodyGuide'],
  },
  {
    keywords: ['nutrition', 'food', 'diet', 'eat', 'meal', 'healthy'],
    responseKey: 'nutrition',
    tipKeys: ['balancedPlate', 'familyMeals'],
    resourceKeys: ['bodyGuide'],
  },
  {
    keywords: ['sleep', 'tired', 'rest', 'bedtime', 'awake'],
    responseKey: 'sleep',
    tipKeys: ['sleepHygiene', 'screenTime'],
    resourceKeys: ['bodyGuide'],
  },
  {
    keywords: ['anxiety', 'worry', 'worried', 'stress', 'stressed', 'nervous'],
    responseKey: 'anxiety',
    tipKeys: ['calming', 'seekSupport'],
    resourceKeys: ['guidance', 'diary'],
  },
  {
    keywords: ['bully', 'bullying', 'mean', 'harass', 'tease', 'unsafe'],
    responseKey: 'bullying',
    tipKeys: ['listenFirst', 'schoolSupport'],
    resourceKeys: ['guidance'],
  },
]

const SUGGESTED_QUESTION_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const

type SuggestedQuestionKey = (typeof SUGGESTED_QUESTION_KEYS)[number]

function parseTips(tipString: string): string[] {
  if (!tipString || tipString.includes('aiChat.tips.')) {
    return []
  }

  return tipString
    .split('|')
    .map((tip) => tip.trim())
    .filter((tip) => tip.length > 0)
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

  const resourceMap = useMemo(
    () => ({
      parentGuide: { label: t('aiChat.links.parentGuide'), href: '/parent-guide', icon: <BookOpen className="w-4 h-4" /> },
      games: { label: t('aiChat.links.games'), href: '/games', icon: <Gamepad2 className="w-4 h-4" /> },
      diary: { label: t('aiChat.links.diary'), href: '/diary', icon: <Sparkles className="w-4 h-4" /> },
      bodyGuide: { label: t('aiChat.links.bodyGuide'), href: '/body-guide', icon: <ShieldCheck className="w-4 h-4" /> },
      team: { label: t('aiChat.links.team'), href: '/team', icon: <Users className="w-4 h-4" /> },
      welcome: { label: t('aiChat.links.welcome'), href: '/welcome', icon: <Sparkles className="w-4 h-4" /> },
      guidance: { label: t('aiChat.links.guidance'), href: '/guidance', icon: <Lightbulb className="w-4 h-4" /> },
    }),
    [t],
  )

  const buildResources = useCallback(
    (keys: ResourceKey[]) =>
      keys
        .map((key) => resourceMap[key])
        .filter((resource): resource is { label: string; href: string; icon: JSX.Element } => Boolean(resource)),
    [resourceMap],
  )

  const buildResponse = useCallback(
    (responseKey: ResponseKey, tipKeys: TipKey[], resourceKeys: ResourceKey[]): AIResponse => {
      const tips = tipKeys.flatMap((tipKey) => parseTips(t(`aiChat.tips.${tipKey}`)))
      const resources = buildResources(resourceKeys)

      return {
        content: t(`aiChat.response.${responseKey}`),
        tips: tips.length > 0 ? tips : undefined,
        resources: resources.length > 0 ? resources : undefined,
      }
    },
    [buildResources, t],
  )

  const getAIResponse = useCallback(
    (userInput: string): AIResponse => {
      const normalized = userInput.toLowerCase()
      const entry = KNOWLEDGE_BASE.find((item) =>
        item.keywords.some((keyword) => normalized.includes(keyword))
      )

      if (entry) {
        return buildResponse(entry.responseKey, entry.tipKeys, entry.resourceKeys)
      }

      return buildResponse('default', ['teamSpirit', 'stayCurious'], ['parentGuide', 'games', 'team'])
    },
    [buildResponse],
  )

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingTips = parseTips(t('aiChat.greetingTips'))
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: t('aiChat.greeting'),
          tips: greetingTips.length > 0 ? greetingTips : undefined,
          resources: buildResources(['welcome', 'team']),
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length, t, buildResources])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage.content)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse.content,
        tips: aiResponse.tips,
        resources: aiResponse.resources,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1100)
  }

  const suggestedQuestions = useMemo(
    () =>
      SUGGESTED_QUESTION_KEYS.map((key: SuggestedQuestionKey) => t(`aiChat.suggestions.${key}`)).filter(
        (question) => !question.includes('aiChat.suggestions.'),
      ),
    [t],
  )

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
            className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[640px] glass-effect rounded-3xl shadow-2xl flex flex-col overflow-hidden"
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
                  className={`flex items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    } text-white`}
                  >
                    {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div
                    className={`flex-1 rounded-2xl p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-white text-gray-800'
                    } shadow-md`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    {message.tips && message.tips.length > 0 && (
                      <div className="mt-3 space-y-1">
                        <p className="text-xs font-semibold uppercase text-gray-500">
                          {t('aiChat.tipHeader')}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {message.tips.map((tip, index) => (
                            <li key={`${message.id}-tip-${index}`}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {message.resources && message.resources.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.resources.map((resource) => (
                          <a
                            key={`${message.id}-${resource.href}`}
                            href={resource.href}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-50 to-secondary-100 text-primary-700 border border-primary-200 hover:from-primary-100 hover:to-secondary-200 transition-colors"
                          >
                            {resource.icon}
                            {resource.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
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

            {/* Input Area */}
            <div className="border-t border-white/40 bg-white/70 backdrop-blur-sm p-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={`${question}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setInput(question)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-100 to-secondary-200 text-primary-700 hover:from-primary-200 hover:to-secondary-300 transition-all"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">{t('aiChat.footerMessage')}</p>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder={t('aiChat.placeholder')}
                  className="flex-1 rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isLoading}
                  className="rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-5 py-3 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
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
