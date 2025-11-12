'use client'

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Gamepad2,
  Star,
  Trophy,
  Target,
  Puzzle,
  Brain,
  Heart,
  Smile,
  Zap,
  Gift,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Compass,
  BookOpenCheck,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

type GameType = 'memory' | 'quiz' | 'matching' | 'emotions'

export default function GamesPage() {
  const { t } = useLanguage()
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null)

  const heroHighlights = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: t('games.highlights.guided'),
      description: t('games.highlights.guidedDescription')
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-500" />,
      title: t('games.highlights.explorers'),
      description: t('games.highlights.explorersDescription')
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      title: t('games.highlights.confidence'),
      description: t('games.highlights.confidenceDescription')
    }
  ]

  const games = [
    {
      id: 'memory' as GameType,
      icon: <Brain className="w-12 h-12" />,
      title: t('games.memory.title'),
      description: t('games.memory.description'),
      color: 'from-purple-400 to-indigo-500',
      difficulty: 'easy',
      duration: t('games.memory.duration'),
      skills: t('games.memory.skills').split('|'),
      benefit: t('games.memory.benefit')
    },
    {
      id: 'quiz' as GameType,
      icon: <Target className="w-12 h-12" />,
      title: t('games.quiz.title'),
      description: t('games.quiz.description'),
      color: 'from-blue-400 to-cyan-500',
      difficulty: 'medium',
      duration: t('games.quiz.duration'),
      skills: t('games.quiz.skills').split('|'),
      benefit: t('games.quiz.benefit')
    },
    {
      id: 'matching' as GameType,
      icon: <Puzzle className="w-12 h-12" />,
      title: t('games.matching.title'),
      description: t('games.matching.description'),
      color: 'from-pink-400 to-rose-500',
      difficulty: 'easy',
      duration: t('games.matching.duration'),
      skills: t('games.matching.skills').split('|'),
      benefit: t('games.matching.benefit')
    },
    {
      id: 'emotions' as GameType,
      icon: <Heart className="w-12 h-12" />,
      title: t('games.emotions.title'),
      description: t('games.emotions.description'),
      color: 'from-amber-400 to-orange-500',
      difficulty: 'medium',
      duration: t('games.emotions.duration'),
      skills: t('games.emotions.skills').split('|'),
      benefit: t('games.emotions.benefit')
    }
  ]

  const gameMeta = {
    memory: {
      duration: t('games.memory.duration'),
      benefit: t('games.memory.benefit'),
      skills: t('games.memory.skills').split('|')
    },
    quiz: {
      duration: t('games.quiz.duration'),
      benefit: t('games.quiz.benefit'),
      skills: t('games.quiz.skills').split('|')
    },
    matching: {
      duration: t('games.matching.duration'),
      benefit: t('games.matching.benefit'),
      skills: t('games.matching.skills').split('|')
    },
    emotions: {
      duration: t('games.emotions.duration'),
      benefit: t('games.emotions.benefit'),
      skills: t('games.emotions.skills').split('|')
    }
  }

  const helperCards = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('games.support.tips.title'),
      description: t('games.support.tips.description'),
      href: '/guidance',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: t('games.support.parent.title'),
      description: t('games.support.parent.description'),
      href: '/parent-guide',
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('games.support.chat.title'),
      description: t('games.support.chat.description'),
      href: '#ai-chat',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <Gamepad2 className="w-16 h-16 text-primary-500" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 bg-clip-text text-transparent">
          {t('games.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('games.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {heroHighlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl bg-white/70 p-5 shadow-sm ring-1 ring-white/60 backdrop-blur-sm"
          >
            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-slate-100 p-3">
              {highlight.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{highlight.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-effect rounded-3xl p-8 card-hover flex flex-col gap-6"
          >
            <div className={`bg-gradient-to-r ${game.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6`}>
              {game.icon}
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{game.title}</h3>
                  <p className="text-sm font-semibold text-primary-600 mt-1">{game.benefit}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  game.difficulty === 'easy'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {game.difficulty === 'easy' ? t('games.easy') : t('games.medium')}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{game.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  <Clock className="w-4 h-4" /> {game.duration}
                </span>
                {game.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-500" /> {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setSelectedGame(game.id)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                {t('games.playNow')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Also Available Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t('games.moreActivities')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/timeline">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">{t('nav.timeline')}</h4>
            </motion.div>
          </Link>
          <Link href="/diary">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">{t('nav.diary')}</h4>
            </motion.div>
          </Link>
          <Link href="/body-guide">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">{t('nav.bodyGuide')}</h4>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      <div className="mt-16 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-primary-100 via-white to-secondary-100 p-8 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('games.support.title')}</h2>
              <p className="text-gray-600 max-w-2xl">{t('games.support.description')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {helperCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-white/60 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${card.gradient} p-2 text-white`}>
                    {card.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{card.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGame(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <GameContent
                gameType={selectedGame}
                onClose={() => setSelectedGame(null)}
                meta={gameMeta[selectedGame]}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function GameContent({
  gameType,
  onClose,
  meta
}: {
  gameType: GameType
  onClose: () => void
  meta: { duration: string; benefit: string; skills: string[] }
}) {
  const { t } = useLanguage()
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'finished'>('intro')
  const [score, setScore] = useState(0)

  const detailBadges = (
    <div className="flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        <Clock className="w-4 h-4" /> {meta?.duration}
      </span>
      {meta?.skills?.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-primary-500" /> {skill}
        </span>
      ))}
    </div>
  )

  let content: ReactNode = null

  if (gameType === 'memory') {
    content = (
      <MemoryGame gameState={gameState} setGameState={setGameState} score={score} setScore={setScore} onClose={onClose} />
    )
  } else if (gameType === 'quiz') {
    content = (
      <QuizGame gameState={gameState} setGameState={setGameState} score={score} setScore={setScore} onClose={onClose} />
    )
  } else if (gameType === 'matching') {
    content = (
      <MatchingGame gameState={gameState} setGameState={setGameState} score={score} setScore={setScore} onClose={onClose} />
    )
  } else if (gameType === 'emotions') {
    content = (
      <EmotionsGame gameState={gameState} setGameState={setGameState} score={score} setScore={setScore} onClose={onClose} />
    )
  }

  if (!content) return null

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white/70 p-5 shadow-sm ring-1 ring-white/60">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t(`games.${gameType}.title`)}</h2>
              <p className="text-sm text-gray-600">{meta?.benefit}</p>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-200"
            >
              {t('games.close')}
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
          {detailBadges}
        </div>
      </div>
      <div className="rounded-3xl bg-white/90 p-5 shadow-md">
        {content}
      </div>
    </div>
  )
}

function MemoryGame({ gameState, setGameState, score, setScore, onClose }: any) {
  const { t } = useLanguage()
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const [cards, setCards] = useState<string[]>([])

  const emojis = ['😊', '😢', '😠', '😰', '😴', '🤗', '😎', '🥰']

  const startGame = () => {
    const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setGameState('playing')
    setScore(0)
    setFlippedCards([])
    setMatchedCards([])
  }

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return

    const newFlipped = [...flippedCards, index]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatchedCards([...matchedCards, ...newFlipped])
        setScore(score + 10)
        setFlippedCards([])
        
        if (matchedCards.length + 2 === cards.length) {
          setTimeout(() => setGameState('finished'), 500)
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000)
      }
    }
  }

  return (
    <div className="text-center">
      {gameState === 'intro' && (
        <>
          <Brain className="w-16 h-16 mx-auto mb-4 text-purple-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.memory.title')}</h2>
          <p className="text-gray-600 mb-6">{t('games.memory.instructions')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            {t('games.startGame')}
          </motion.button>
        </>
      )}

      {gameState === 'playing' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{t('games.score')}: {score}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {cards.map((emoji, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(index)}
                className={`aspect-square rounded-xl text-4xl flex items-center justify-center ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? 'bg-gradient-to-r from-purple-400 to-indigo-500'
                    : 'bg-gradient-to-r from-gray-300 to-gray-400'
                }`}
              >
                {(flippedCards.includes(index) || matchedCards.includes(index)) ? emoji : '❓'}
              </motion.button>
            ))}
          </div>
        </>
      )}

      {gameState === 'finished' && (
        <>
          <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.congratulations')}</h2>
          <p className="text-xl text-gray-600 mb-6">{t('games.yourScore')}: {score}</p>
          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              {t('games.playAgain')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
            >
              {t('games.close')}
            </motion.button>
          </div>
        </>
      )}
    </div>
  )
}

function QuizGame({ gameState, setGameState, score, setScore, onClose }: any) {
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const questions = [
    {
      question: t('games.quiz.q1.question'),
      answers: [
        t('games.quiz.q1.a1'),
        t('games.quiz.q1.a2'),
        t('games.quiz.q1.a3'),
        t('games.quiz.q1.a4')
      ],
      correct: 3
    },
    {
      question: t('games.quiz.q2.question'),
      answers: [
        t('games.quiz.q2.a1'),
        t('games.quiz.q2.a2'),
        t('games.quiz.q2.a3'),
        t('games.quiz.q2.a4')
      ],
      correct: 0
    },
    {
      question: t('games.quiz.q3.question'),
      answers: [
        t('games.quiz.q3.a1'),
        t('games.quiz.q3.a2'),
        t('games.quiz.q3.a3'),
        t('games.quiz.q3.a4')
      ],
      correct: 2
    }
  ]

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 10)
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setGameState('finished')
      }
    }, 1500)
  }

  return (
    <div className="text-center">
      {gameState === 'intro' && (
        <>
          <Target className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.quiz.title')}</h2>
          <p className="text-gray-600 mb-6">{t('games.quiz.instructions')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGameState('playing')}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            {t('games.startGame')}
          </motion.button>
        </>
      )}

      {gameState === 'playing' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              {t('games.question')} {currentQuestion + 1}/{questions.length}
            </h3>
            <h3 className="text-xl font-bold text-gray-800">{t('games.score')}: {score}</h3>
          </div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800">{questions[currentQuestion].question}</h3>
          <div className="space-y-3">
            {questions[currentQuestion].answers.map((answer, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-xl font-medium transition-all ${
                  selectedAnswer === null
                    ? 'bg-white hover:bg-gray-50 text-gray-800'
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : index === questions[currentQuestion].correct
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {answer}
              </motion.button>
            ))}
          </div>
        </>
      )}

      {gameState === 'finished' && (
        <>
          <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.quizComplete')}</h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('games.yourScore')}: {score}/{questions.length * 10}
          </p>
          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setGameState('playing')
                setCurrentQuestion(0)
                setScore(0)
                setSelectedAnswer(null)
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              {t('games.playAgain')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
            >
              {t('games.close')}
            </motion.button>
          </div>
        </>
      )}
    </div>
  )
}

function MatchingGame({ gameState, setGameState, score, setScore, onClose }: any) {
  const { t } = useLanguage()
  const [pairs] = useState([
    { left: t('games.matching.pair1.left'), right: t('games.matching.pair1.right'), id: 1 },
    { left: t('games.matching.pair2.left'), right: t('games.matching.pair2.right'), id: 2 },
    { left: t('games.matching.pair3.left'), right: t('games.matching.pair3.right'), id: 3 },
    { left: t('games.matching.pair4.left'), right: t('games.matching.pair4.right'), id: 4 }
  ])
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [matched, setMatched] = useState<number[]>([])

  const handleRightClick = (id: number) => {
    if (selectedLeft === id) {
      setMatched([...matched, id])
      setScore(score + 10)
      setSelectedLeft(null)
      
      if (matched.length + 1 === pairs.length) {
        setTimeout(() => setGameState('finished'), 500)
      }
    } else {
      setSelectedLeft(null)
    }
  }

  return (
    <div className="text-center">
      {gameState === 'intro' && (
        <>
          <Puzzle className="w-16 h-16 mx-auto mb-4 text-pink-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.matching.title')}</h2>
          <p className="text-gray-600 mb-6">{t('games.matching.instructions')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGameState('playing')}
            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            {t('games.startGame')}
          </motion.button>
        </>
      )}

      {gameState === 'playing' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{t('games.score')}: {score}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <p className="text-gray-600 mb-6">{t('games.matching.instruction')}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              {pairs.map((pair) => (
                <motion.button
                  key={`left-${pair.id}`}
                  whileHover={{ scale: matched.includes(pair.id) ? 1 : 1.02 }}
                  whileTap={{ scale: matched.includes(pair.id) ? 1 : 0.98 }}
                  onClick={() => !matched.includes(pair.id) && setSelectedLeft(pair.id)}
                  disabled={matched.includes(pair.id)}
                  className={`w-full p-4 rounded-xl font-medium transition-all ${
                    matched.includes(pair.id)
                      ? 'bg-green-500 text-white'
                      : selectedLeft === pair.id
                      ? 'bg-pink-500 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-800'
                  }`}
                >
                  {pair.left}
                </motion.button>
              ))}
            </div>
            <div className="space-y-3">
              {pairs.sort(() => Math.random() - 0.5).map((pair) => (
                <motion.button
                  key={`right-${pair.id}`}
                  whileHover={{ scale: matched.includes(pair.id) ? 1 : 1.02 }}
                  whileTap={{ scale: matched.includes(pair.id) ? 1 : 0.98 }}
                  onClick={() => !matched.includes(pair.id) && selectedLeft && handleRightClick(pair.id)}
                  disabled={matched.includes(pair.id)}
                  className={`w-full p-4 rounded-xl font-medium transition-all ${
                    matched.includes(pair.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-800'
                  }`}
                >
                  {pair.right}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      )}

      {gameState === 'finished' && (
        <>
          <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.congratulations')}</h2>
          <p className="text-xl text-gray-600 mb-6">{t('games.perfectScore')}</p>
          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setGameState('playing')
                setScore(0)
                setSelectedLeft(null)
                setMatched([])
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              {t('games.playAgain')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
            >
              {t('games.close')}
            </motion.button>
          </div>
        </>
      )}
    </div>
  )
}

function EmotionsGame({ gameState, setGameState, score, setScore, onClose }: any) {
  const { t } = useLanguage()
  const [currentScenario, setCurrentScenario] = useState(0)
  
  const scenarios = [
    {
      situation: t('games.emotions.scenario1.situation'),
      emotions: [
        { emoji: '😊', label: t('games.emotions.happy'), correct: false },
        { emoji: '😠', label: t('games.emotions.angry'), correct: true },
        { emoji: '😢', label: t('games.emotions.sad'), correct: false },
        { emoji: '😰', label: t('games.emotions.anxious'), correct: false }
      ]
    },
    {
      situation: t('games.emotions.scenario2.situation'),
      emotions: [
        { emoji: '😊', label: t('games.emotions.happy'), correct: true },
        { emoji: '😠', label: t('games.emotions.angry'), correct: false },
        { emoji: '😢', label: t('games.emotions.sad'), correct: false },
        { emoji: '🤗', label: t('games.emotions.proud'), correct: true }
      ]
    },
    {
      situation: t('games.emotions.scenario3.situation'),
      emotions: [
        { emoji: '😰', label: t('games.emotions.anxious'), correct: true },
        { emoji: '😊', label: t('games.emotions.happy'), correct: false },
        { emoji: '😠', label: t('games.emotions.angry'), correct: false },
        { emoji: '😢', label: t('games.emotions.sad'), correct: false }
      ]
    }
  ]

  const handleEmotionSelect = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10)
    }
    
    setTimeout(() => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1)
      } else {
        setGameState('finished')
      }
    }, 1500)
  }

  return (
    <div className="text-center">
      {gameState === 'intro' && (
        <>
          <Heart className="w-16 h-16 mx-auto mb-4 text-orange-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.emotions.title')}</h2>
          <p className="text-gray-600 mb-6">{t('games.emotions.instructions')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGameState('playing')}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            {t('games.startGame')}
          </motion.button>
        </>
      )}

      {gameState === 'playing' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              {t('games.scenario')} {currentScenario + 1}/{scenarios.length}
            </h3>
            <h3 className="text-xl font-bold text-gray-800">{t('games.score')}: {score}</h3>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-800 leading-relaxed">{scenarios[currentScenario].situation}</p>
          </div>
          <p className="text-gray-600 mb-6">{t('games.emotions.howWouldYouFeel')}</p>
          <div className="grid grid-cols-2 gap-4">
            {scenarios[currentScenario].emotions.map((emotion, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEmotionSelect(emotion.correct)}
                className="bg-white hover:bg-gray-50 p-6 rounded-2xl transition-all"
              >
                <div className="text-6xl mb-3">{emotion.emoji}</div>
                <div className="font-semibold text-gray-800">{emotion.label}</div>
              </motion.button>
            ))}
          </div>
        </>
      )}

      {gameState === 'finished' && (
        <>
          <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('games.wellDone')}</h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('games.yourScore')}: {score}/{scenarios.length * 10}
          </p>
          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setGameState('playing')
                setCurrentScenario(0)
                setScore(0)
              }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              {t('games.playAgain')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold"
            >
              {t('games.close')}
            </motion.button>
          </div>
        </>
      )}
    </div>
  )
}
