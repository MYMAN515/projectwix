'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Heart, Sparkles, Users, Droplets, 
  MessageCircle, Book, Lightbulb, CheckCircle,
  AlertCircle, Shield, Phone, Smile
} from 'lucide-react'

type Category = 'physical' | 'emotional' | 'social' | 'hygiene'

// Moon icon component
const Moon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

export default function GuidancePage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<Category>('physical')
  const [expandedTip, setExpandedTip] = useState<string | null>(null)

  const categories = [
    { id: 'physical' as Category, icon: <Heart className="w-6 h-6" />, color: 'from-pink-400 to-rose-500' },
    { id: 'emotional' as Category, icon: <Sparkles className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' },
    { id: 'social' as Category, icon: <Users className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
    { id: 'hygiene' as Category, icon: <Droplets className="w-6 h-6" />, color: 'from-green-400 to-teal-500' },
  ]

  // Parenting-focused guidance for supporting children through puberty
  const guidanceData = {
    physical: [
      {
        id: 'exercise',
        icon: <Heart className="w-6 h-6" />,
        title: 'Encouraging Physical Activity',
        description: 'Help your child stay active during puberty to support healthy development',
        tips: [
          'Model active behavior - exercise together as a family',
          'Let them choose activities they enjoy, not what you think they should do',
          'Be understanding if they feel self-conscious about their changing body',
          'Make activity fun, not a chore - dance parties, hiking, sports',
          'Praise effort and participation, not just performance or appearance',
          'Understand that energy levels may fluctuate during growth spurts'
        ]
      },
      {
        id: 'nutrition',
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Supporting Healthy Eating',
        description: 'Guide your child toward nutritious choices without creating food issues',
        tips: [
          'Keep healthy foods available and accessible at home',
          'Avoid commenting on your child\'s weight or body shape',
          'Model healthy eating habits yourself',
          'Teach nutrition facts positively (what foods do FOR them, not just what to avoid)',
          'Be aware of signs of disordered eating (hiding food, excessive exercise, body obsession)',
          'Make family meals a priority - connection time without screens',
          'Don\'t use food as punishment or reward',
          'Respect increased appetite during growth spurts'
        ]
      },
      {
        id: 'sleep',
        icon: <Moon className="w-6 h-6" />,
        title: 'Managing Sleep Changes',
        description: 'Teens naturally shift to later sleep schedules - here\'s how to help',
        tips: [
          'Understand that biological sleep patterns shift during puberty (they\'re not just being difficult)',
          'Aim for 8-10 hours, but be realistic about school start times',
          'Create a calm bedtime routine together',
          'Set boundaries around screens, but explain WHY (blue light affects melatonin)',
          'Weekend sleep-in is normal, but keep it within 2 hours of weekday wake time',
          'Watch for signs of sleep deprivation: irritability, poor grades, falling asleep during day',
          'Make their bedroom a comfortable sleep environment',
          'Be flexible - rigid rules often backfire with teens'
        ]
      },
      {
        id: 'pain',
        icon: <AlertCircle className="w-6 h-6" />,
        title: 'When to Seek Medical Advice',
        description: 'Know when physical changes need professional attention',
        tips: [
          'Trust your instincts - if something seems wrong, check with a doctor',
          'Severe or persistent pain is never "just puberty"',
          'Establish a relationship with a pediatrician your child trusts',
          'For daughters: very heavy or painful periods should be evaluated',
          'For sons: testicular pain or lumps need immediate attention',
          'Extreme fatigue or mood changes could indicate hormonal issues',
          'Eating disorders require early intervention - don\'t wait',
          'Make healthcare visits normal and non-scary'
        ]
      },
      {
        id: 'body-image',
        icon: <Heart className="w-6 h-6" />,
        title: 'Supporting Positive Body Image',
        description: 'Help your child develop confidence during physical changes',
        tips: [
          'NEVER comment negatively on their changing body',
          'Avoid comparing them to siblings, peers, or your own experience',
          'Focus conversations on what their body CAN DO, not how it looks',
          'Monitor social media use - it heavily impacts body image',
          'Teach media literacy: images are edited, comparison is unfair',
          'Model positive self-talk about your own body',
          'Validate their feelings when they express body concerns',
          'Remind them everyone develops at different rates and that\'s normal'
        ]
      }
    ],
    emotional: [
      {
        id: 'feelings',
        icon: <Heart className="w-6 h-6" />,
        title: 'Validating Emotional Changes',
        description: 'Help your child navigate intense and confusing emotions',
        tips: [
          'Never dismiss their feelings as "just hormones" or "drama"',
          'Validate emotions: "I see you\'re upset" before problem-solving',
          'Don\'t take mood swings personally - it\'s not about you',
          'Create safe spaces for emotional expression without judgment',
          'Teach emotion vocabulary: name feelings beyond "fine" or "mad"',
          'Share your own emotional experiences (age-appropriately)',
          'Recognize that boys need emotional support too, not just "toughen up"',
          'Know when big emotions might signal depression or anxiety'
        ]
      },
      {
        id: 'stress',
        icon: <Shield className="w-6 h-6" />,
        title: 'Teaching Stress Management',
        description: 'Equip your child with healthy coping strategies',
        tips: [
          'Model healthy stress management - they learn by watching you',
          'Teach specific techniques: deep breathing, journaling, mindfulness',
          'Help them identify their stress triggers and early warning signs',
          'Don\'t overload their schedule - downtime is essential',
          'Normalize stress - it\'s part of life, not a sign of weakness',
          'Create a "calm down" kit together: music, fidgets, art supplies',
          'Respect that what helps YOU may not help THEM',
          'Watch for unhealthy coping (substance use, self-harm, withdrawal)',
          'Consider therapy before problems escalate, not as last resort'
        ]
      },
      {
        id: 'confidence',
        icon: <Smile className="w-6 h-6" />,
        title: 'Building Your Child\'s Confidence',
        description: 'Support their self-esteem during a vulnerable time',
        tips: [
          'Praise effort and character, not just achievements or looks',
          'Avoid comparisons to siblings, peers, or "when I was your age"',
          'Let them make age-appropriate decisions and face natural consequences',
          'Encourage pursuits they\'re passionate about, not just "resume builders"',
          'Celebrate their unique qualities, especially ones different from yours',
          'Apologize when you make mistakes - models humility and growth',
          'Give specific praise: "You worked hard on that" vs. "good job"',
          'Help them reframe failures as learning opportunities'
        ]
      },
      {
        id: 'help',
        icon: <Phone className="w-6 h-6" />,
        title: 'Recognizing When Professional Help is Needed',
        description: 'Don\'t wait too long - early intervention is key',
        tips: [
          'Persistent sadness lasting more than 2 weeks needs evaluation',
          'Any mention of self-harm or suicide requires immediate action',
          'Significant changes in sleep, appetite, or social withdrawal',
          'Declining grades combined with loss of interest in everything',
          'Excessive anxiety interfering with daily life',
          'Remove stigma: therapy is health care, not a sign of failure',
          'Start with pediatrician, school counselor, or therapist',
          'Your child doesn\'t have to be "bad enough" to deserve help',
          'Trust your gut - you know your child best'
        ]
      },
      {
        id: 'communication',
        icon: <MessageCircle className="w-6 h-6" />,
        title: 'Keeping Communication Open',
        description: 'Maintain connection even when they push away',
        tips: [
          'Accept that they won\'t tell you everything - that\'s developmentally normal',
          'Be available without being intrusive - let them come to you',
          'Create low-pressure talk time: car rides, cooking together',
          'Listen more than you lecture - bite your tongue sometimes',
          'Don\'t react with panic or anger when they share something hard',
          'Ask open-ended questions, not interrogations',
          'Respect their privacy while maintaining appropriate boundaries',
          'Say "I love you" even when they roll their eyes'
        ]
      }
    ],
    social: [
      {
        id: 'friends',
        icon: <Users className="w-6 h-6" />,
        title: 'Supporting Friendship Changes',
        description: 'Navigate shifting social dynamics with your child',
        tips: [
          'Understand that friend groups naturally shift during puberty',
          'Don\'t force friendships with kids YOU like - let them choose',
          'Get to know their friends without being intrusive or judgmental',
          'Validate feelings when friendships end - the pain is real',
          'Teach them red flags: friends who pressure, exclude, or belittle',
          'Model healthy friendships in your own life',
          'Create a welcoming home where friends want to hang out',
          'Balance supervision with space - hovering pushes them away'
        ]
      },
      {
        id: 'peer-pressure',
        icon: <Shield className="w-6 h-6" />,
        title: 'Helping Them Handle Peer Pressure',
        description: 'Equip your child to resist negative influences',
        tips: [
          'Have conversations about peer pressure BEFORE situations arise',
          'Role-play saying "no" in different scenarios',
          'Give them an "out": blame you if needed ("My parents will kill me")',
          'Teach them: real friends don\'t pressure or make them uncomfortable',
          'Keep consequences reasonable so they\'ll still come to you when they mess up',
          'Share your own peer pressure stories and what you learned',
          'Help them identify their values and practice standing by them',
          'Praise them when they make good choices, especially hard ones'
        ]
      },
      {
        id: 'social-media',
        icon: <MessageCircle className="w-6 h-6" />,
        title: 'Managing Social Media & Technology',
        description: 'Navigate the digital landscape safely together',
        tips: [
          'Set clear boundaries around screen time and device use',
          'Follow them on social media but don\'t comment embarrassingly',
          'Discuss online safety: privacy settings, not sharing location, stranger danger',
          'Monitor without spying - trust but verify',
          'Talk about digital footprint - nothing is ever truly deleted',
          'Watch for signs of cyberbullying or online harassment',
          'Model healthy tech habits - put YOUR phone down too',
          'Create phone-free zones: dinner table, bedrooms after bedtime',
          'Understand that online friendships can be real and meaningful'
        ]
      },
      {
        id: 'boundaries',
        icon: <Shield className="w-6 h-6" />,
        title: 'Teaching About Boundaries & Consent',
        description: 'Essential conversations about body autonomy and respect',
        tips: [
          'Start early: their body belongs to them, not you or anyone else',
          'Don\'t force hugs/kisses with relatives - teach them they can say no',
          'Explain consent clearly: enthusiastic yes, can be withdrawn anytime',
          'Discuss how media often shows unhealthy relationship dynamics',
          'Talk about boundaries in ALL relationships, not just romantic',
          'Make it clear they can tell you if someone makes them uncomfortable',
          'Teach them to respect others\' "no" as well',
          'Discuss warning signs of unhealthy relationships',
          'Keep conversations ongoing, not one awkward talk'
        ]
      },
      {
        id: 'romantic',
        icon: <Heart className="w-6 h-6" />,
        title: 'Navigating Romantic Feelings',
        description: 'Support their first crushes and relationships',
        tips: [
          'Take their feelings seriously - don\'t mock or tease',
          'Romantic feelings are normal at this age, including same-sex attractions',
          'Set clear, age-appropriate dating rules together',
          'Get to know anyone they\'re interested in',
          'Discuss healthy vs. unhealthy relationship behaviors',
          'Keep lines of communication open without prying',
          'Be prepared for heartbreak and have tissues ready',
          'Remember your own first crush feelings - have empathy'
        ]
      }
    ],
    hygiene: [
      {
        id: 'shower',
        icon: <Droplets className="w-6 h-6" />,
        title: 'Teaching Good Hygiene Habits',
        description: 'Help your child develop healthy hygiene routines',
        tips: [
          'Explain WHY hygiene matters (body changes, social implications) without shaming',
          'Provide necessary supplies: deodorant, face wash, razors when appropriate',
          'Set expectations clearly: daily showers, especially after sports',
          'Respect their privacy - knock before entering bathroom/bedroom',
          'Be matter-of-fact, not embarrassed or judgmental',
          'Boys need hygiene talks too - it\'s not just a "girl thing"',
          'Address specific concerns: body odor, acne, period care openly',
          'Model good hygiene yourself'
        ]
      },
      {
        id: 'deodorant',
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Having "The Smell Talk"',
        description: 'Address body odor sensitively but directly',
        tips: [
          'Have this conversation privately, never in front of siblings/friends',
          'Normalize it: "Everyone starts needing deodorant during puberty"',
          'Offer choices - let them pick scents they like',
          'Demonstrate proper application if needed',
          'Remind them to reapply after gym class',
          'Address laundry: dirty clothes can\'t be worn twice',
          'Don\'t shame or tease - it\'s a sensitive topic',
          'If excessive sweating is an issue, consult a doctor about options'
        ]
      },
      {
        id: 'skin',
        icon: <Heart className="w-6 h-6" />,
        title: 'Helping with Acne & Skin Changes',
        description: 'Support your child through skin challenges',
        tips: [
          'Take acne seriously - it affects self-esteem significantly',
          'Provide gentle cleansers and oil-free moisturizers',
          'Don\'t comment on every pimple or make them feel self-conscious',
          'Teach proper face-washing technique (gentle, not harsh scrubbing)',
          'See a dermatologist if over-the-counter products aren\'t working',
          'Remind them: acne is temporary, scars from picking aren\'t',
          'Address myths: chocolate doesn\'t cause acne, but dairy might contribute',
          'Be patient - clear skin doesn\'t happen overnight'
        ]
      },
      {
        id: 'period',
        icon: <CheckCircle className="w-6 h-6" />,
        title: 'Supporting Your Daughter Through Periods',
        description: 'Make menstruation less scary and more manageable',
        tips: [
          'Talk about periods BEFORE they start (age 8-10 typically)',
          'Normalize it - it\'s a body function, not shameful or gross',
          'Stock bathroom with supplies and show her where they are',
          'Explain all options: pads, tampons, period underwear, cups',
          'Create an emergency kit for her backpack/locker',
          'Teach tracking so she knows when to expect it',
          'Discuss cramp management: heat, pain relievers, rest',
          'Know when to see a doctor: extremely heavy flow, severe pain, irregular cycles',
          'IMPORTANT: Sons should learn about periods too - it normalizes it for everyone'
        ]
      },
      {
        id: 'privacy',
        icon: <Shield className="w-6 h-6" />,
        title: 'Respecting Their Need for Privacy',
        description: 'Balance supervision with giving them space',
        tips: [
          'Knock before entering their room or bathroom',
          'Don\'t go through their belongings without permission (unless safety concerns)',
          'Let them shower/dress without interruption',
          'Understand increased modesty is developmentally appropriate',
          'Don\'t share embarrassing stories about their body changes with others',
          'Give them language to ask for privacy respectfully',
          'Privacy is a privilege that grows with responsibility',
          'Trust them while maintaining appropriate parental oversight'
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {t('guidance.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t('guidance.subtitle')}
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'glass-effect text-gray-700 hover:border-2 hover:border-primary-300'
            }`}
          >
            {category.icon}
            <span>{t(`guidance.categories.${category.id}`)}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Guidance Cards */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        {guidanceData[activeCategory].map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedTip(expandedTip === item.id ? null : item.id)}
              className="w-full p-6 flex items-start gap-4 text-left hover:bg-white/50 transition-all"
            >
              <div className={`bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedTip === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400"
              >
                <Lightbulb className="w-6 h-6" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedTip === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6 bg-white/30">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Helpful Tips:
                    </h4>
                    <ul className="space-y-3">
                      {item.tips.map((tip, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3 text-gray-700"
                        >
                          <span className="text-primary-500 font-bold flex-shrink-0">•</span>
                          <span className="leading-relaxed">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Emergency Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 glass-effect rounded-3xl p-8 md:p-10 max-w-4xl mx-auto border-2 border-primary-200"
      >
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-red-400 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Need Immediate Help? 🆘
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you're feeling very upset, scared, or need to talk to someone right away, don't wait:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Talk to a parent, guardian, or trusted adult immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Contact your school counselor or nurse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Call a helpline in your country (they're free and confidential)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Remember: Asking for help is a sign of strength, not weakness! 💪</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
