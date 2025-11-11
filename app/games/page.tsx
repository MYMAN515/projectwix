'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Trophy, RefreshCw, Brain, Smile, Star, Zap, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

type GameType = 'memory' | 'quiz' | null

export default function GamesPage() {
  const { t } = useLanguage()
  const [selectedGame, setSelectedGame] = useState<GameType>(null)

  const games = [
    {
      id: 'memory' as GameType,
      icon: <Brain className="w-12 h-12" />,
      title: t('games.memory.title'),
      description: t('games.memory.description'),
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'quiz' as GameType,
      icon: <Star className="w-12 h-12" />,
      title: t('games.quiz.title'),
      description: t('games.quiz.description'),
      color: 'from-blue-400 to-cyan-500'
    }
  ]

  if (selectedGame === 'memory') {
    return <MemoryGame onBack={() => setSelectedGame(null)} />
  }

  if (selectedGame === 'quiz') {
    return <QuizGame onBack={() => setSelectedGame(null)} />
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gamepad2 className="w-12 h-12 text-purple-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('games.title')}
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('games.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedGame(game.id)}
            className="glass-effect rounded-3xl p-8 cursor-pointer card-hover"
          >
            <div className={`bg-gradient-to-r ${game.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}>
              {game.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{game.title}</h2>
            <p className="text-gray-600 leading-relaxed text-center">{game.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 w-full bg-gradient-to-r ${game.color} text-white py-3 rounded-xl font-semibold`}
            >
              {t('games.playNow')}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Also link to existing timeline game */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <p className="text-gray-600 mb-4">{t('games.moreGames')}</p>
        <Link href="/timeline">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            {t('games.timelineGame')} →
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

// Memory Card Game Component
function MemoryGame({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage()
  const [cards, setCards] = useState<Array<{ id: number; emoji: string; flipped: boolean; matched: boolean }>>([])
  const [flippedIndices, setFlippedIndices] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [isWon, setIsWon] = useState(false)

  const emojis = ['❤️', '🌟', '🎉', '🌈', '🦋', '🌺', '🎨', '🎵']

  const initializeGame = () => {
    const cardPairs = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false
      }))
    setCards(cardPairs)
    setFlippedIndices([])
    setMoves(0)
    setMatches(0)
    setIsWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices
      setMoves(m => m + 1)

      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          setCards(prev => prev.map((card, i) =>
            i === first || i === second ? { ...card, matched: true } : card
          ))
          setMatches(m => m + 1)
          setFlippedIndices([])
          
          if (matches + 1 === emojis.length) {
            setIsWon(true)
          }
        }, 600)
      } else {
        setTimeout(() => {
          setCards(prev => prev.map((card, i) =>
            i === first || i === second ? { ...card, flipped: false } : card
          ))
          setFlippedIndices([])
        }, 1000)
      }
    }
  }, [flippedIndices])

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].flipped || cards[index].matched) return
    
    setCards(prev => prev.map((card, i) =>
      i === index ? { ...card, flipped: true } : card
    ))
    setFlippedIndices(prev => [...prev, index])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg border-2 border-purple-200"
          >
            ← {t('games.back')}
          </motion.button>
          <div className="flex gap-4">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="font-bold text-gray-800">{t('games.moves')}: {moves}</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="font-bold text-gray-800">{t('games.matches')}: {matches}/8</span>
            </div>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          {t('games.memory.title')}
        </motion.h2>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: card.matched ? 1 : 1.05 }}
              whileTap={{ scale: card.matched ? 1 : 0.95 }}
              onClick={() => handleCardClick(index)}
              className={`aspect-square rounded-xl cursor-pointer ${
                card.matched ? 'bg-gradient-to-r from-green-400 to-teal-500' :
                card.flipped ? 'bg-gradient-to-r from-purple-400 to-pink-500' :
                'bg-gradient-to-r from-gray-300 to-gray-400'
              } flex items-center justify-center text-4xl md:text-5xl shadow-lg`}
            >
              {(card.flipped || card.matched) ? card.emoji : '?'}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={initializeGame}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-6 h-6" />
            {t('games.newGame')}
          </motion.button>
        </div>

        <AnimatePresence>
          {isWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={initializeGame}
            >
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="glass-effect rounded-3xl p-12 text-center max-w-md"
              >
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {t('games.congratulations')}
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  {t('games.completedIn')} {moves} {t('games.moves')}!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={initializeGame}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                >
                  {t('games.playAgain')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Quiz Game Component
function QuizGame({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const questions = [
    {
      question: t('games.quiz.q1.question'),
      answers: [
        t('games.quiz.q1.a1'),
        t('games.quiz.q1.a2'),
        t('games.quiz.q1.a3'),
        t('games.quiz.q1.a4')
      ],
      correct: 1
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
    },
    {
      question: t('games.quiz.q4.question'),
      answers: [
        t('games.quiz.q4.a1'),
        t('games.quiz.q4.a2'),
        t('games.quiz.q4.a3'),
        t('games.quiz.q4.a4')
      ],
      correct: 3
    },
    {
      question: t('games.quiz.q5.question'),
      answers: [
        t('games.quiz.q5.a1'),
        t('games.quiz.q5.a2'),
        t('games.quiz.q5.a3'),
        t('games.quiz.q5.a4')
      ],
      correct: 1
    }
  ]

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(index)
    setShowResult(true)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect rounded-3xl p-12"
          >
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('games.quizComplete')}
            </h2>
            <p className="text-2xl text-gray-700 mb-8">
              {t('games.yourScore')}: {score}/{questions.length}
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                {t('games.tryAgain')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg border-2 border-purple-200"
              >
                {t('games.back')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg border-2 border-purple-200"
          >
            ← {t('games.back')}
          </motion.button>
          <div className="glass-effect px-6 py-3 rounded-full">
            <span className="font-bold text-gray-800">
              {t('games.score')}: {score}/{questions.length}
            </span>
          </div>
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="mb-6">
            <span className="text-sm font-semibold text-purple-600">
              {t('games.question')} {currentQuestion + 1}/{questions.length}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              />
            </div>
          </div>

          <motion.h3
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          >
            {questions[currentQuestion].question}
          </motion.h3>

          <div className="space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => {
              const isCorrect = index === questions[currentQuestion].correct
              const isSelected = index === selectedAnswer
              
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl font-semibold transition-all ${
                    showResult
                      ? isCorrect
                        ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white'
                        : isSelected
                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                      : 'bg-white hover:bg-purple-50 text-gray-800 border-2 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {answer}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? t('games.nextQuestion') : t('games.seeResults')}
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
