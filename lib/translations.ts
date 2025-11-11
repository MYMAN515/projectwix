export type Language = 'en' | 'ar' | 'ms'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      changes: 'Changes',
      timeline: 'Timeline',
      diary: 'Diary',
      bodyGuide: 'Body Guide',
      appName: 'Puberty Awareness'
    },
    home: {
      title: 'Understanding Puberty',
      subtitle: 'A safe and friendly space to learn about the changes happening in your body and mind 🌟',
      startLearning: 'Start Learning',
      myDiary: 'My Diary',
      notAlone: "You're Not Alone 💙",
      notAloneText: "Puberty is a natural part of growing up. Everyone goes through it at their own pace. This app is here to help you understand what's happening, track your journey, and feel confident about the changes ahead.",
      features: {
        changes: {
          title: 'Physical & Emotional Changes',
          desc: 'Learn about the natural changes happening to your body and mind'
        },
        timeline: {
          title: 'Timeline Activity',
          desc: 'Interactive matching game to understand before and after puberty'
        },
        diary: {
          title: 'Mood Diary',
          desc: 'Track your feelings and emotions on your journey'
        },
        bodyGuide: {
          title: 'Body Changes Guide',
          desc: 'Gender-sensitive animations and information about growth'
        }
      }
    },
    changes: {
      title: 'Understanding Changes',
      subtitle: "Puberty brings many changes to your body and mind. Let's explore them together! 🌟",
      physical: 'Physical',
      emotional: 'Emotional',
      remember: 'Remember: Everyone is Different 🌈',
      timing: 'Timing: Puberty can start anywhere from ages 8-14. There\'s no "right" time!',
      pace: 'Pace: Some changes happen quickly, others take years. Your journey is unique.',
      support: "Support: Talk to trusted adults if you have questions or concerns. They're here to help!",
      physicalChanges: {
        growth: {
          title: 'Growth Spurts',
          desc: "You'll grow taller! This happens at different times for everyone."
        },
        bodyShape: {
          title: 'Body Shape Changes',
          desc: 'Your body will develop new curves and proportions as you mature.'
        },
        voice: {
          title: 'Voice Changes',
          desc: 'Your voice may deepen or change in pitch - this is totally normal!'
        },
        skin: {
          title: 'Skin Changes',
          desc: 'You might get acne or oily skin. Good hygiene helps manage this.'
        },
        hair: {
          title: 'Hair Growth',
          desc: 'New hair will grow in different places on your body.'
        },
        bodyOdor: {
          title: 'Body Odor',
          desc: "You'll start to sweat more. Using deodorant becomes important!"
        }
      },
      emotionalChanges: {
        moods: {
          title: 'Mood Swings',
          desc: "Your emotions might feel like a rollercoaster - that's normal!"
        },
        interests: {
          title: 'New Interests',
          desc: 'You might develop new hobbies, interests, and passions.'
        },
        independence: {
          title: 'Independence',
          desc: "You'll want more privacy and independence from family."
        },
        relationships: {
          title: 'Relationships',
          desc: 'Friendships and social connections become more important.'
        },
        selfAwareness: {
          title: 'Self-Awareness',
          desc: "You'll think more about who you are and who you want to be."
        },
        confidence: {
          title: 'Confidence',
          desc: 'Building confidence takes time - be patient with yourself!'
        }
      }
    },
    diary: {
      title: 'My Feelings Diary',
      subtitle: 'Track your moods and thoughts during your journey 📝',
      addEntry: 'Add New Entry',
      cancel: 'Cancel',
      howFeeling: 'How are you feeling today?',
      placeholder: "What's on your mind? Share your thoughts, feelings, or what happened today...",
      saveEntry: 'Save Entry',
      noEntries: 'No entries yet. Start by adding your first one! 💭',
      tipsTitle: '💡 Diary Tips',
      tips: {
        regular: 'Write regularly - even just a few sentences helps!',
        honest: 'Be honest about your feelings - this is your private space',
        lookBack: "Look back at old entries to see how you've grown",
        valid: 'Remember: all feelings are valid and normal'
      },
      moods: {
        happy: 'Happy',
        neutral: 'Neutral',
        sad: 'Sad',
        excited: 'Excited',
        anxious: 'Anxious'
      }
    },
    timeline: {
      title: 'Timeline Matching Game',
      subtitle: 'Match each change to before or after puberty begins! 🎯',
      score: 'Score',
      attempts: 'Attempts',
      accuracy: 'Accuracy',
      congratulations: 'Congratulations! 🎉',
      completeMessage: 'You completed the game with {score} correct out of {attempts} attempts!',
      playAgain: 'Play Again',
      resetGame: 'Reset Game',
      beforePuberty: '👶 Before Puberty',
      afterPuberty: '🌟 After Puberty',
      selectInstruction: '👇 Click on a card below, then choose when it happens!',
      chooseInstruction: '👆 Now click either "Before Puberty" or "After Puberty" below!'
    },
    bodyGuide: {
      title: 'Body Changes Guide',
      subtitle: 'Explore the physical changes that happen during puberty 🌱',
      everyone: 'Everyone',
      female: 'Female Body',
      male: 'Male Body',
      remember: 'Remember: Everyone is Unique 🌈',
      timing: 'Timing: These changes can start anywhere from ages 8-14 and continue into late teens or early 20s.',
      variation: "Variation: There's NO \"normal\" - everyone develops differently!",
      questions: 'Questions? Always feel comfortable talking to a parent, guardian, doctor, or trusted adult.',
      health: "Health: If something hurts or worries you, don't hesitate to ask for help!"
    },
    guidance: {
      title: 'Helpful Tips & Guidance',
      subtitle: 'Learn how to deal with changes and feel confident',
      copingStrategies: 'Coping Strategies',
      talkToSomeone: 'Talk to Someone',
      talkToSomeoneDesc: 'Share your feelings with a trusted adult, friend, or counselor. You\'re not alone!',
      stayActive: 'Stay Active',
      stayActiveDesc: 'Exercise helps manage stress and improves mood. Find activities you enjoy!',
      healthyHabits: 'Healthy Habits',
      healthyHabitsDesc: 'Eat well, get enough sleep (8-10 hours), and maintain good hygiene.',
      journaling: 'Keep a Journal',
      journalingDesc: 'Writing down your thoughts and feelings can help you process emotions.',
      selfCare: 'Practice Self-Care',
      selfCareDesc: 'Take time for activities that make you happy and help you relax.',
      positiveThinking: 'Positive Thinking',
      positiveThinkingDesc: 'Be kind to yourself. Everyone develops at their own pace!',
      whenToSeek: 'When to Seek Help',
      whenToSeekDesc: 'Talk to a doctor if you experience severe pain, unusual symptoms, or if you\'re feeling very worried or sad for a long time.'
    },
    footer: {
      title: 'Puberty Awareness',
      subtitle: 'A safe space to learn and grow 🌱',
      copyright: 'Educational Resource'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      changes: 'التغييرات',
      timeline: 'الجدول الزمني',
      diary: 'المذكرات',
      bodyGuide: 'دليل الجسم',
      appName: 'الوعي بالبلوغ'
    },
    home: {
      title: 'فهم البلوغ',
      subtitle: 'مساحة آمنة وودودة للتعرف على التغييرات التي تحدث في جسمك وعقلك 🌟',
      startLearning: 'ابدأ التعلم',
      myDiary: 'مذكراتي',
      notAlone: 'لست وحدك 💙',
      notAloneText: 'البلوغ جزء طبيعي من النمو. الجميع يمر به بوتيرته الخاصة. هذا التطبيق هنا لمساعدتك على فهم ما يحدث، وتتبع رحلتك، والشعور بالثقة بشأن التغييرات القادمة.',
      features: {
        changes: {
          title: 'التغييرات الجسدية والعاطفية',
          desc: 'تعرف على التغييرات الطبيعية التي تحدث لجسمك وعقلك'
        },
        timeline: {
          title: 'نشاط الجدول الزمني',
          desc: 'لعبة مطابقة تفاعلية لفهم ما قبل وبعد البلوغ'
        },
        diary: {
          title: 'مذكرات المزاج',
          desc: 'تتبع مشاعرك وعواطفك في رحلتك'
        },
        bodyGuide: {
          title: 'دليل تغييرات الجسم',
          desc: 'رسوم متحركة ومعلومات حساسة للجنسين حول النمو'
        }
      }
    },
    changes: {
      title: 'فهم التغييرات',
      subtitle: 'يجلب البلوغ العديد من التغييرات لجسمك وعقلك. دعنا نستكشفها معًا! 🌟',
      physical: 'جسدية',
      emotional: 'عاطفية',
      remember: 'تذكر: كل شخص مختلف 🌈',
      timing: 'التوقيت: يمكن أن يبدأ البلوغ في أي مكان من سن 8-14. لا يوجد وقت "صحيح"!',
      pace: 'الوتيرة: بعض التغييرات تحدث بسرعة، والبعض الآخر يستغرق سنوات. رحلتك فريدة.',
      support: 'الدعم: تحدث إلى البالغين الموثوق بهم إذا كان لديك أسئلة أو مخاوف. هم هنا للمساعدة!',
      physicalChanges: {
        growth: {
          title: 'طفرات النمو',
          desc: 'سوف تصبح أطول! يحدث هذا في أوقات مختلفة للجميع.'
        },
        bodyShape: {
          title: 'تغييرات شكل الجسم',
          desc: 'سيطور جسمك منحنيات ونسب جديدة عندما تنضج.'
        },
        voice: {
          title: 'تغييرات الصوت',
          desc: 'قد يصبح صوتك أعمق أو يتغير في النبرة - هذا طبيعي تمامًا!'
        },
        skin: {
          title: 'تغييرات الجلد',
          desc: 'قد تحصل على حب الشباب أو البشرة الدهنية. النظافة الجيدة تساعد في إدارة ذلك.'
        },
        hair: {
          title: 'نمو الشعر',
          desc: 'سينمو شعر جديد في أماكن مختلفة من جسمك.'
        },
        bodyOdor: {
          title: 'رائحة الجسم',
          desc: 'ستبدأ في التعرق أكثر. يصبح استخدام مزيل العرق مهمًا!'
        }
      },
      emotionalChanges: {
        moods: {
          title: 'تقلبات المزاج',
          desc: 'قد تشعر أن عواطفك مثل الأفعوانية - هذا طبيعي!'
        },
        interests: {
          title: 'اهتمامات جديدة',
          desc: 'قد تطور هوايات واهتمامات وشغف جديدة.'
        },
        independence: {
          title: 'الاستقلالية',
          desc: 'ستريد المزيد من الخصوصية والاستقلالية عن العائلة.'
        },
        relationships: {
          title: 'العلاقات',
          desc: 'تصبح الصداقات والروابط الاجتماعية أكثر أهمية.'
        },
        selfAwareness: {
          title: 'الوعي الذاتي',
          desc: 'ستفكر أكثر في من أنت ومن تريد أن تكون.'
        },
        confidence: {
          title: 'الثقة',
          desc: 'بناء الثقة يستغرق وقتًا - كن صبورًا مع نفسك!'
        }
      }
    },
    diary: {
      title: 'مذكرات مشاعري',
      subtitle: 'تتبع مزاجك وأفكارك خلال رحلتك 📝',
      addEntry: 'إضافة مدخل جديد',
      cancel: 'إلغاء',
      howFeeling: 'كيف تشعر اليوم؟',
      placeholder: 'ما الذي يدور في ذهنك؟ شارك أفكارك ومشاعرك أو ما حدث اليوم...',
      saveEntry: 'حفظ المدخل',
      noEntries: 'لا توجد إدخالات بعد. ابدأ بإضافة أول واحد! 💭',
      tipsTitle: '💡 نصائح المذكرات',
      tips: {
        regular: 'اكتب بانتظام - حتى بضع جمل تساعد!',
        honest: 'كن صادقًا بشأن مشاعرك - هذا مساحتك الخاصة',
        lookBack: 'انظر إلى الإدخالات القديمة لترى كيف نمت',
        valid: 'تذكر: جميع المشاعر صحيحة وطبيعية'
      },
      moods: {
        happy: 'سعيد',
        neutral: 'محايد',
        sad: 'حزين',
        excited: 'متحمس',
        anxious: 'قلق'
      }
    },
    timeline: {
      title: 'لعبة مطابقة الجدول الزمني',
      subtitle: 'طابق كل تغيير لما قبل أو بعد بدء البلوغ! 🎯',
      score: 'النتيجة',
      attempts: 'المحاولات',
      accuracy: 'الدقة',
      congratulations: 'تهانينا! 🎉',
      completeMessage: 'لقد أكملت اللعبة مع {score} صحيح من أصل {attempts} محاولة!',
      playAgain: 'العب مرة أخرى',
      resetGame: 'إعادة تعيين اللعبة',
      beforePuberty: '👶 قبل البلوغ',
      afterPuberty: '🌟 بعد البلوغ',
      selectInstruction: '👇 انقر على بطاقة أدناه، ثم اختر متى يحدث ذلك!',
      chooseInstruction: '👆 الآن انقر على "قبل البلوغ" أو "بعد البلوغ" أدناه!'
    },
    bodyGuide: {
      title: 'دليل تغييرات الجسم',
      subtitle: 'استكشف التغييرات الجسدية التي تحدث أثناء البلوغ 🌱',
      everyone: 'الجميع',
      female: 'الجسم الأنثوي',
      male: 'الجسم الذكري',
      remember: 'تذكر: الجميع فريد 🌈',
      timing: 'التوقيت: يمكن أن تبدأ هذه التغييرات في أي مكان من سن 8-14 وتستمر حتى أواخر المراهقة أو أوائل العشرينات.',
      variation: 'التنوع: لا يوجد "طبيعي" - الجميع يتطور بشكل مختلف!',
      questions: 'أسئلة؟ شعر دائمًا بالراحة في التحدث إلى والد أو وصي أو طبيب أو بالغ موثوق به.',
      health: 'الصحة: إذا كان هناك شيء يؤلمك أو يقلقك، لا تتردد في طلب المساعدة!'
    },
    guidance: {
      title: 'نصائح وإرشادات مفيدة',
      subtitle: 'تعلم كيفية التعامل مع التغييرات والشعور بالثقة',
      copingStrategies: 'استراتيجيات التكيف',
      talkToSomeone: 'تحدث إلى شخص ما',
      talkToSomeoneDesc: 'شارك مشاعرك مع شخص بالغ موثوق به أو صديق أو مستشار. أنت لست وحدك!',
      stayActive: 'ابق نشطًا',
      stayActiveDesc: 'التمرين يساعد في إدارة التوتر ويحسن المزاج. ابحث عن الأنشطة التي تستمتع بها!',
      healthyHabits: 'عادات صحية',
      healthyHabitsDesc: 'تناول الطعام بشكل جيد، واحصل على قسط كافٍ من النوم (8-10 ساعات)، وحافظ على النظافة الجيدة.',
      journaling: 'احتفظ بمذكرات',
      journalingDesc: 'كتابة أفكارك ومشاعرك يمكن أن يساعدك على معالجة العواطف.',
      selfCare: 'مارس العناية الذاتية',
      selfCareDesc: 'خذ وقتًا للأنشطة التي تجعلك سعيدًا وتساعدك على الاسترخاء.',
      positiveThinking: 'التفكير الإيجابي',
      positiveThinkingDesc: 'كن لطيفًا مع نفسك. الجميع يتطور بوتيرته الخاصة!',
      whenToSeek: 'متى تطلب المساعدة',
      whenToSeekDesc: 'تحدث إلى الطبيب إذا كنت تعاني من ألم شديد أو أعراض غير عادية أو إذا كنت تشعر بالقلق الشديد أو الحزن لفترة طويلة.'
    },
    footer: {
      title: 'الوعي بالبلوغ',
      subtitle: 'مساحة آمنة للتعلم والنمو 🌱',
      copyright: 'مورد تعليمي'
    }
  },
  ms: {
    nav: {
      home: 'Laman Utama',
      changes: 'Perubahan',
      timeline: 'Garis Masa',
      diary: 'Diari',
      bodyGuide: 'Panduan Badan',
      appName: 'Kesedaran Akil Baligh'
    },
    home: {
      title: 'Memahami Akil Baligh',
      subtitle: 'Ruang yang selamat dan mesra untuk belajar tentang perubahan yang berlaku pada badan dan minda anda 🌟',
      startLearning: 'Mula Belajar',
      myDiary: 'Diari Saya',
      notAlone: 'Anda Tidak Bersendirian 💙',
      notAloneText: 'Akil baligh adalah bahagian semula jadi daripada membesar. Setiap orang melaluinya dengan kadar mereka sendiri. Aplikasi ini di sini untuk membantu anda memahami apa yang berlaku, menjejaki perjalanan anda, dan berasa yakin tentang perubahan yang akan datang.',
      features: {
        changes: {
          title: 'Perubahan Fizikal & Emosi',
          desc: 'Ketahui tentang perubahan semula jadi yang berlaku pada badan dan minda anda'
        },
        timeline: {
          title: 'Aktiviti Garis Masa',
          desc: 'Permainan padanan interaktif untuk memahami sebelum dan selepas akil baligh'
        },
        diary: {
          title: 'Diari Mood',
          desc: 'Jejaki perasaan dan emosi anda dalam perjalanan anda'
        },
        bodyGuide: {
          title: 'Panduan Perubahan Badan',
          desc: 'Animasi sensitif jantina dan maklumat tentang pertumbuhan'
        }
      }
    },
    changes: {
      title: 'Memahami Perubahan',
      subtitle: 'Akil baligh membawa banyak perubahan kepada badan dan minda anda. Mari kita terokai bersama! 🌟',
      physical: 'Fizikal',
      emotional: 'Emosi',
      remember: 'Ingat: Setiap Orang Berbeza 🌈',
      timing: 'Masa: Akil baligh boleh bermula di mana-mana dari umur 8-14. Tiada masa yang "betul"!',
      pace: 'Kadar: Sesetengah perubahan berlaku dengan cepat, yang lain mengambil masa bertahun-tahun. Perjalanan anda adalah unik.',
      support: 'Sokongan: Bercakap dengan orang dewasa yang dipercayai jika anda mempunyai soalan atau kebimbangan. Mereka di sini untuk membantu!',
      physicalChanges: {
        growth: {
          title: 'Lonjakan Pertumbuhan',
          desc: 'Anda akan menjadi lebih tinggi! Ini berlaku pada masa yang berbeza untuk setiap orang.'
        },
        bodyShape: {
          title: 'Perubahan Bentuk Badan',
          desc: 'Badan anda akan mengembangkan lengkungan dan perkadaran baru semasa anda matang.'
        },
        voice: {
          title: 'Perubahan Suara',
          desc: 'Suara anda mungkin menjadi lebih dalam atau berubah dalam nada - ini sangat normal!'
        },
        skin: {
          title: 'Perubahan Kulit',
          desc: 'Anda mungkin mendapat jerawat atau kulit berminyak. Kebersihan yang baik membantu menguruskan ini.'
        },
        hair: {
          title: 'Pertumbuhan Rambut',
          desc: 'Rambut baru akan tumbuh di tempat yang berbeza di badan anda.'
        },
        bodyOdor: {
          title: 'Bau Badan',
          desc: 'Anda akan mula berpeluh lebih banyak. Menggunakan deodoran menjadi penting!'
        }
      },
      emotionalChanges: {
        moods: {
          title: 'Perubahan Mood',
          desc: 'Emosi anda mungkin terasa seperti roller coaster - itu normal!'
        },
        interests: {
          title: 'Minat Baru',
          desc: 'Anda mungkin mengembangkan hobi, minat, dan keghairahan baru.'
        },
        independence: {
          title: 'Kebebasan',
          desc: 'Anda akan mahukan lebih banyak privasi dan kebebasan daripada keluarga.'
        },
        relationships: {
          title: 'Perhubungan',
          desc: 'Persahabatan dan hubungan sosial menjadi lebih penting.'
        },
        selfAwareness: {
          title: 'Kesedaran Diri',
          desc: 'Anda akan berfikir lebih banyak tentang siapa anda dan siapa yang anda ingin jadi.'
        },
        confidence: {
          title: 'Keyakinan',
          desc: 'Membina keyakinan mengambil masa - bersabar dengan diri sendiri!'
        }
      }
    },
    diary: {
      title: 'Diari Perasaan Saya',
      subtitle: 'Jejaki mood dan fikiran anda semasa perjalanan anda 📝',
      addEntry: 'Tambah Catatan Baru',
      cancel: 'Batal',
      howFeeling: 'Bagaimana perasaan anda hari ini?',
      placeholder: 'Apa yang bermain di fikiran anda? Kongsi pemikiran, perasaan, atau apa yang berlaku hari ini...',
      saveEntry: 'Simpan Catatan',
      noEntries: 'Tiada catatan lagi. Mulakan dengan menambah yang pertama! 💭',
      tipsTitle: '💡 Petua Diari',
      tips: {
        regular: 'Tulis secara berkala - walaupun hanya beberapa ayat membantu!',
        honest: 'Jujur tentang perasaan anda - ini adalah ruang peribadi anda',
        lookBack: 'Lihat kembali catatan lama untuk melihat bagaimana anda telah berkembang',
        valid: 'Ingat: semua perasaan adalah sah dan normal'
      },
      moods: {
        happy: 'Gembira',
        neutral: 'Neutral',
        sad: 'Sedih',
        excited: 'Teruja',
        anxious: 'Cemas'
      }
    },
    timeline: {
      title: 'Permainan Padanan Garis Masa',
      subtitle: 'Padankan setiap perubahan kepada sebelum atau selepas akil baligh bermula! 🎯',
      score: 'Skor',
      attempts: 'Percubaan',
      accuracy: 'Ketepatan',
      congratulations: 'Tahniah! 🎉',
      completeMessage: 'Anda telah menyelesaikan permainan dengan {score} betul daripada {attempts} percubaan!',
      playAgain: 'Main Lagi',
      resetGame: 'Set Semula Permainan',
      beforePuberty: '👶 Sebelum Akil Baligh',
      afterPuberty: '🌟 Selepas Akil Baligh',
      selectInstruction: '👇 Klik pada kad di bawah, kemudian pilih bila ia berlaku!',
      chooseInstruction: '👆 Sekarang klik sama ada "Sebelum Akil Baligh" atau "Selepas Akil Baligh" di bawah!'
    },
    bodyGuide: {
      title: 'Panduan Perubahan Badan',
      subtitle: 'Terokai perubahan fizikal yang berlaku semasa akil baligh 🌱',
      everyone: 'Semua Orang',
      female: 'Badan Wanita',
      male: 'Badan Lelaki',
      remember: 'Ingat: Setiap Orang Unik 🌈',
      timing: 'Masa: Perubahan ini boleh bermula di mana-mana dari umur 8-14 dan berterusan hingga lewat remaja atau awal 20-an.',
      variation: 'Variasi: TIADA "normal" - setiap orang berkembang secara berbeza!',
      questions: 'Soalan? Sentiasa selesa bercakap dengan ibu bapa, penjaga, doktor, atau orang dewasa yang dipercayai.',
      health: 'Kesihatan: Jika sesuatu menyakitkan atau membimbangkan anda, jangan teragak-agak untuk meminta bantuan!'
    },
    guidance: {
      title: 'Petua & Panduan Berguna',
      subtitle: 'Belajar cara menghadapi perubahan dan berasa yakin',
      copingStrategies: 'Strategi Mengatasi',
      talkToSomeone: 'Bercakap dengan Seseorang',
      talkToSomeoneDesc: 'Kongsi perasaan anda dengan orang dewasa yang dipercayai, rakan, atau kaunselor. Anda tidak bersendirian!',
      stayActive: 'Kekal Aktif',
      stayActiveDesc: 'Senaman membantu menguruskan tekanan dan meningkatkan mood. Cari aktiviti yang anda suka!',
      healthyHabits: 'Tabiat Sihat',
      healthyHabitsDesc: 'Makan dengan baik, dapatkan tidur yang cukup (8-10 jam), dan kekalkan kebersihan yang baik.',
      journaling: 'Simpan Jurnal',
      journalingDesc: 'Menulis fikiran dan perasaan anda boleh membantu anda memproses emosi.',
      selfCare: 'Amalkan Penjagaan Diri',
      selfCareDesc: 'Luangkan masa untuk aktiviti yang membuat anda gembira dan membantu anda berehat.',
      positiveThinking: 'Pemikiran Positif',
      positiveThinkingDesc: 'Bersikap baik kepada diri sendiri. Setiap orang berkembang pada kadar mereka sendiri!',
      whenToSeek: 'Bila Perlu Mendapatkan Bantuan',
      whenToSeekDesc: 'Bercakap dengan doktor jika anda mengalami kesakitan teruk, gejala luar biasa, atau jika anda berasa sangat bimbang atau sedih untuk masa yang lama.'
    },
    footer: {
      title: 'Kesedaran Akil Baligh',
      subtitle: 'Ruang selamat untuk belajar dan berkembang 🌱',
      copyright: 'Sumber Pendidikan'
    }
  }
}

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en
}
