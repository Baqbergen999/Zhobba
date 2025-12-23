// Lesson Data
const lessonsData = {
  53: {
    title: "Органикалық заттардың ерекшеліктері",
    duration: "45 минут",
    topic: "Органикалық химияға кіріспе",
    sections: [
      {
        heading: "Органикалық заттар дегеніміз не?",
        content:
          "Органикалық заттар - бұл құрамында көміртегі (C) бар қосылыстар. Олар тірі организмдерде кездеседі және өте көп түрлі болады. Органикалық заттардың 60 миллионнан астамы белгілі, ал бейорганикалық заттар тек 600 мыңға жуық.",
        list: [
          "Органикалық заттар көміртегі мен сутегіден тұрады",
          "Олардың қайнау және балқу температуралары төмен",
          "Көпшілігі суда ерімейді, бірақ органикалық еріткіштерде ериді",
          "Жанғанда CO₂ және H₂O түзеді",
        ],
      },
      {
        heading: "Органикалық заттардың жіктелуі",
        content: "Органикалық заттар функционалдық топтары бойынша жіктеледі:",
        table: [
          ["Класс", "Функционалдық топ", "Мысал"],
          ["Көмірсутектер", "Жоқ", "CH₄, C₂H₄"],
          ["Спирттер", "-OH", "C₂H₅OH"],
          ["Альдегидтер", "-CHO", "CH₃CHO"],
          ["Карбон қышқылдары", "-COOH", "CH₃COOH"],
        ],
      },
      {
        heading: "Функционалдық топтар",
        content:
          "Функционалдық топ - бұл молекуладағы заттың химиялық қасиеттерін анықтайтын атомдар тобы. Мысалы, спирттердегі -OH тобы немесе қышқылдардағы -COOH тобы.",
        formula: "R-OH (спирттер), R-COOH (қышқылдар)",
      },
    ],
  },
  54: {
    title: "Гомологиялық қатарлар",
    duration: "45 минут",
    topic: "Органикалық химияға кіріспе",
    sections: [
      {
        heading: "Гомология ұғымы",
        content:
          "Гомологтар - бұл құрылымы ұқсас, бірақ құрамы -CH₂- тобына ерекшеленетін заттар. Олар гомологиялық қатар құрайды.",
        formula: "Гомологиялық айырмашылық: -CH₂- (14 а.б.м.)",
      },
      {
        heading: "Алкандардың гомологиялық қатары",
        content: "Алкандар - қанық көмірсутектер. Жалпы формуласы: CₙH₂ₙ₊₂",
        list: [
          "Метан - CH₄",
          "Этан - C₂H₆",
          "Пропан - C₃H₈",
          "Бутан - C₄H₁₀",
          "Пентан - C₅H₁₂",
          "Гексан - C₆H₁₄",
          "Гептан - C₇H₁₆",
          "Октан - C₈H₁₈",
          "Нонан - C₉H₂₀",
          "Декан - C₁₀H₂₂",
        ],
      },
      {
        heading: "Гомологтардың қасиеттері",
        content:
          "Гомологтар ұқсас химиялық қасиеттерге ие, бірақ физикалық қасиеттері (қайнау температурасы, тығыздығы) біртіндеп өзгереді. Молекулалық масса артқан сайын қайнау температурасы да артады.",
        info: "Метаннан бастап бутанға дейін - газдар, пентаннан бастап - сұйықтар, ал C₁₆H₃₄-тен бастап - қатты заттар.",
      },
    ],
  },
  55: {
    title: "Номенклатура және изомерия",
    duration: "45 минут",
    topic: "Органикалық химияға кіріспе",
    sections: [
      {
        heading: "IUPAC номенклатурасы",
        content: "IUPAC - халықаралық органикалық заттарды атау жүйесі. Негізгі қағидалар:",
        list: [
          "1. Ең ұзын көміртегі тізбегін таңдаңыз",
          "2. Тізбектегі көміртектер санын санаңыз",
          "3. Тармақтардың орнын нөмірлеңіз",
          "4. Тармақтарды алфавит бойынша жазыңыз",
        ],
      },
      {
        heading: "Изомерия құбылысы",
        content:
          "Изомерлер - бір молекулалық формулаға ие, бірақ құрылымы әртүрлі заттар. Олардың қасиеттері де әртүрлі болады.",
        formula: "C₄H₁₀: бутан және 2-метилпропан (изобутан)",
      },
      {
        heading: "Изомерия түрлері",
        content: "Құрылымдық изомерия түрлері:",
        list: [
          "Көміртегі скелетінің изомериясы",
          "Функционалдық топтың орнының изомериясы",
          "Функционалдық топ изомериясы",
        ],
      },
      {
        heading: "Практикалық мысал",
        content: "Пентан (C₅H₁₂) үш изомерге ие:",
        list: ["н-пентан (түзу тізбек)", "2-метилбутан (изопентан)", "2,2-диметилпропан (неопентан)"],
        info: "Көміртектер саны артқан сайын изомерлер саны да артады. C₁₀H₂₂ үшін 75 изомер бар!",
      },
    ],
  },
  57: {
    title: "Алкандар",
    duration: "45 минут",
    topic: "Көмірсутектер және отын",
    sections: [
      {
        heading: "Алкандардың құрылымы",
        content: "Алкандар - қанық көмірсутектер. Барлық байланыстар жалғыз. Жалпы формула: CₙH₂ₙ₊₂",
        formula: "CH₄, C₂H₆, C₃H₈, C₄H₁₀, ...",
      },
      {
        heading: "Алкандардың химиялық қасиеттері",
        content: "Алкандар салыстырмалы түрде инертті заттар. Олар негізінен орынбасу реакцияларына түседі.",
        list: [
          "Жану реакциясы: CH₄ + 2O₂ → CO₂ + 2H₂O + Q",
          "Хлорлау: CH₄ + Cl₂ → CH₃Cl + HCl (жарық әсерінен)",
          "Термиялық ыдырау: C₃H₈ → C₂H₄ + CH₄ (жоғары температурада)",
        ],
        info: "Алкандардың жануы экзотермиялық процесс - көп энергия бөлінеді, сондықтан олар отын ретінде қолданылады.",
      },
      {
        heading: "Алкандардың қолданылуы",
        content: "Алкандар өндірісте және тұрмыста кеңінен қолданылады:",
        list: [
          "Отын (табиғи газ, пропан, бутан)",
          "Еріткіштер (гексан, гептан)",
          "Шикізат (пластик, каучук өндіру)",
          "Тұрмыстық газ (метан, пропан-бутан қоспасы)",
        ],
      },
    ],
  },
  62: {
    title: "Оттекті органикалық заттар. Спирттер",
    duration: "45 минут",
    topic: "Оттекті қосылыстар",
    sections: [
      {
        heading: "Спирттер және олардың жіктелуі",
        content: "Спирттер - құрамында гидроксил тобы (-OH) бар органикалық заттар. Жалпы формула: R-OH",
        formula: "R-OH (R - көмірсутегі радикалы)",
      },
      {
        heading: "Маңызды спирттер",
        content: "Өмірде кең қолданылатын спирттер:",
        list: [
          "Метанол (CH₃OH) - улы еріткіш",
          "Этанол (C₂H₅OH) - алкогольді ішімдіктер",
          "Этиленгликоль (C₂H₄(OH)₂) - антифриз",
          "Глицерин (C₃H₅(OH)₃) - косметика, фармацевтика",
        ],
        warning:
          "НАЗАР АУДАРЫҢЫЗ: Метанол өте улы! Ішуге болмайды. Тіпті аз мөлшері де соқырлыққа және өлімге әкелуі мүмкін.",
      },
      {
        heading: "Этанолдың қасиеттері",
        content: "Этанол - ең көп таралған спирт. Қасиеттері:",
        list: [
          "Түссіз, ерекше иісті сұйықтық",
          "Сумен кез келген қатынаста араласады",
          "Қайнау температурасы: 78°C",
          "Жанады: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
        ],
      },
      {
        heading: "Спирттердің денсаулыққа зияны",
        content: "Алкоголь тұтыну адам денсаулығына зиянды әсер етеді:",
        list: [
          "Бауыр бүлінеді (цирроз)",
          "Ми қызметі нашарлайды",
          "Есте сақтау қабілеті төмендейді",
          "Тәуелділік қалыптасады",
        ],
        warning: "Жасөспірімдер үшін алкоголь ерекше қауіпті! Дамып келе жатқан ағзаға түзетілмейтін зиян келтіреді.",
      },
    ],
  },
  65: {
    title: "Көмірсулар",
    duration: "45 минут",
    topic: "Оттекті қосылыстар",
    sections: [
      {
        heading: "Көмірсулар дегеніміз не?",
        content: "Көмірсулар - тірі организмдердегі ең маңызды энергия көзі. Жалпы формула: Cₙ(H₂O)ₘ",
        formula: "Cₙ(H₂O)ₘ",
      },
      {
        heading: "Көмірсулардың жіктелуі",
        content: "Көмірсулар үш топқа бөлінеді:",
        list: [
          "Моносахаридтер: глюкоза (C₆H₁₂O₆), фруктоза",
          "Дисахаридтер: сахароза (C₁₂H₂₂O₁₁), мальтоза, лактоза",
          "Полисахаридтер: крахмал, целлюлоза",
        ],
      },
      {
        heading: "Глюкоза - негізгі энергия көзі",
        content: "Глюкоза (C₆H₁₂O₆) - ең маңызды моносахарид. Оны жүзім қанты деп те атайды.",
        list: [
          "Өсімдіктерде фотосинтез арқылы түзіледі",
          "Қанда тасымалданады (қалыпты деңгей: 3.3-5.5 ммоль/л)",
          "Жасушаларда тотығып, энергия береді",
          "Реакция: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + энергия",
        ],
        info: "Ми күніне шамамен 120 г глюкоза тұтынады. Сондықтан оқу кезінде тәтті тамақ жеген пайдалы!",
      },
      {
        heading: "Крахмал және целлюлоза",
        content: "Полисахаридтер - көп глюкоза молекулаларынан тұратын полимерлер.",
        list: [
          "Крахмал: өсімдіктердің запастық заты (картоп, астық)",
          "Целлюлоза: өсімдік қабығының негізгі құрамы",
          "Гликоген: жануарлар мен адамдардағы запастық көмірсу",
        ],
      },
      {
        heading: "Көмірсулардың биологиялық маңызы",
        content: "Көмірсулар тірі организмдерде маңызды рөл атқарады:",
        list: [
          "Энергия көзі (1 г көмірсу = 17 кДж)",
          "Құрылымдық функция (целлюлоза)",
          "Запастау функциясы (крахмал, гликоген)",
          "ДНК және РНК құрамына кіреді",
        ],
      },
    ],
  },
}

// Test Data
const testsData = {
  1: {
    title: "БЖБ №1: Органикалық химияға кіріспе",
    duration: 45,
    questions: [
      {
        question: "Органикалық заттарға тән ерекшелік:",
        options: [
          "Құрамында көміртегі бар",
          "Тек қатты күйде болады",
          "Барлығы суда ериді",
          "Металдармен ғана әрекеттеседі",
        ],
        correct: 0,
      },
      {
        question: "Алкандардың жалпы формуласы:",
        options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"],
        correct: 1,
      },
      {
        question: "Гомологиялық айырмашылық қандай топқа тең?",
        options: ["-CH₃", "-CH₂-", "-CH-", "-C-"],
        correct: 1,
      },
      {
        question: "Изомерлер дегеніміз:",
        options: [
          "Молекулалық формуласы бірдей, құрылымы әртүрлі заттар",
          "Тек қана қасиеттері бірдей заттар",
          "Гомологиялық қатардағы көршілес заттар",
          "Әртүрлі класстағы заттар",
        ],
        correct: 0,
      },
      {
        question: "Этанның (C₂H₆) молекулалық массасы:",
        options: ["28", "30", "32", "34"],
        correct: 1,
      },
      {
        question: "Пропанның (C₃H₈) құрамындағы сутегі атомдарының саны:",
        options: ["6", "7", "8", "10"],
        correct: 2,
      },
      {
        question: "Функционалдық топ дегеніміз:",
        options: [
          "Заттың қасиетін анықтайтын атомдар тобы",
          "Тек көміртегі атомдары",
          "Барлық сутегі атомдары",
          "Молекуланың ең үлкен бөлігі",
        ],
        correct: 0,
      },
      {
        question: "C₄H₁₀ формуласы қанша изомерге ие?",
        options: ["1", "2", "3", "4"],
        correct: 1,
      },
      {
        question: "Метан молекуласындағы байланыс түрі:",
        options: ["Қос байланыс", "Үштік байланыс", "Жалғыз байланыс", "Ароматты байланыс"],
        correct: 2,
      },
      {
        question: "IUPAC бойынша CH₃-CH₂-CH₃ қалай аталады?",
        options: ["Метан", "Этан", "Пропан", "Бутан"],
        correct: 2,
      },
    ],
  },
  2: {
    title: "БЖБ №2: Көмірсутектер және отын",
    duration: 45,
    questions: [
      {
        question: "Алкендердің жалпы формуласы:",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"],
        correct: 1,
      },
      {
        question: "Этилен молекуласындағы байланыс түрі:",
        options: ["Жалғыз байланыс", "Қос байланыс", "Үштік байланыс", "Ароматты"],
        correct: 1,
      },
      {
        question: "Метанның жану реакциясының өнімдері:",
        options: ["CO және H₂", "CO₂ және H₂O", "C және H₂O", "CO₂ және H₂"],
        correct: 1,
      },
      {
        question: "Бензолдың формуласы:",
        options: ["C₆H₆", "C₆H₁₂", "C₆H₁₄", "C₆H₁₀"],
        correct: 0,
      },
      {
        question: "Алкиндердің жалпы формуласы:",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"],
        correct: 2,
      },
      {
        question: "Ацетиленнің басқа атауы:",
        options: ["Метан", "Этан", "Этилен", "Этин"],
        correct: 3,
      },
      {
        question: "Табиғи газдың негізгі құрамы:",
        options: ["Этан", "Метан", "Пропан", "Бутан"],
        correct: 1,
      },
      {
        question: "Полиэтилен қандай реакциямен алынады?",
        options: ["Жану", "Орынбасу", "Полимерлену", "Ыдырау"],
        correct: 2,
      },
      {
        question: "Этиленді бром суымен әрекеттескенде не болады?",
        options: ["Түс өзгермейді", "Бром суы түссізденеді", "Газ бөлінеді", "Тұнба түзіледі"],
        correct: 1,
      },
      {
        question: "Қазақстандағы ең ірі мұнай кен орны:",
        options: ["Теңіз", "Қарашығанақ", "Қашаған", "Барлығы дұрыс"],
        correct: 3,
      },
    ],
  },
  3: {
    title: "БЖБ №3: Оттекті және азотты қосылыстар",
    duration: 45,
    questions: [
      {
        question: "Спирттердің функционалдық тобы:",
        options: ["-COOH", "-OH", "-CHO", "-NH₂"],
        correct: 1,
      },
      {
        question: "Этанолдың формуласы:",
        options: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        correct: 1,
      },
      {
        question: "Сірке қышқылының формуласы:",
        options: ["CH₃COOH", "HCOOH", "C₂H₅COOH", "C₃H₇COOH"],
        correct: 0,
      },
      {
        question: "Глюкозаның молекулалық формуласы:",
        options: ["C₅H₁₂O₆", "C₆H₁₂O₆", "C₇H₁₂O₆", "C₆H₁₀O₅"],
        correct: 1,
      },
      {
        question: "Карбон қышқылдарының функционалдық тобы:",
        options: ["-OH", "-CHO", "-COOH", "-NH₂"],
        correct: 2,
      },
      {
        question: "Глицериннің құрамындағы гидроксил топтары саны:",
        options: ["1", "2", "3", "4"],
        correct: 2,
      },
      {
        question: "Аминқышқылдардың құрамына не кіреді?",
        options: ["Тек -COOH", "Тек -NH₂", "-NH₂ және -COOH", "Тек -OH"],
        correct: 2,
      },
      {
        question: "Нәруыздар қандай байланыспен қосылған?",
        options: ["Иондық", "Ковалентті", "Пептидтік", "Сутектік"],
        correct: 2,
      },
      {
        question: "Сахарозаның гидролизі кезінде не түзіледі?",
        options: ["Глюкоза және фруктоза", "Тек глюкоза", "Тек фруктоза", "Крахмал"],
        correct: 0,
      },
      {
        question: "Метанол неге улы?",
        options: ["Бауырды бүлдіреді", "Көру нервін зақымдайды", "Өкпені зақымдайды", "Жүрекке зиян"],
        correct: 1,
      },
    ],
  },
}

// Game Data and Functions
const gamesData = {
  "formula-match": {
    title: "Формула Жұптастыру",
    description: "Заттардың атауын олардың формуласымен жұптастырыңыз",
    pairs: [
      { name: "Метан", formula: "CH₄" },
      { name: "Этан", formula: "C₂H₆" },
      { name: "Этилен", formula: "C₂H₄" },
      { name: "Ацетилен", formula: "C₂H₂" },
      { name: "Бензол", formula: "C₆H₆" },
      { name: "Этанол", formula: "C₂H₅OH" },
      { name: "Сірке қышқылы", formula: "CH₃COOH" },
      { name: "Глюкоза", formula: "C₆H₁₂O₆" },
    ],
  },
  "chemistry-quiz": {
    title: "Жылдам Викторина",
    description: "30 секундта барынша көп сұраққа жауап беріңіз",
    questions: [
      { q: "Метанның формуласы?", a: "CH₄" },
      { q: "Алкандардың жалпы формуласы?", a: "CₙH₂ₙ₊₂" },
      { q: "Спирттердің функционалдық тобы?", a: "-OH" },
      { q: "Глюкозаның формуласы?", a: "C₆H₁₂O₆" },
      { q: "Бензолда неше көміртегі атомы бар?", a: "6" },
      { q: "Этанолдың басқа атауы?", a: "Этил спирті" },
      { q: "Табиғи газдың негізгі құрамы?", a: "Метан" },
      { q: "Қос байланыс бар көмірсутектер?", a: "Алкендер" },
      { q: "Сірке қышқылының формуласы?", a: "CH₃COOH" },
      { q: "Гомологиялық айырмашылық?", a: "-CH₂-" },
    ],
  },
  "reaction-balance": {
    title: "Реакция Теңдестіру",
    description: "Химиялық реакцияны дұрыс теңдестіріңіз",
    reactions: [
      { equation: "CH₄ + O₂ → CO₂ + H₂O", coeffs: [1, 2, 1, 2] },
      { equation: "C₂H₆ + O₂ → CO₂ + H₂O", coeffs: [2, 7, 4, 6] },
      { equation: "C₃H₈ + O₂ → CO₂ + H₂O", coeffs: [1, 5, 3, 4] },
      { equation: "C₂H₄ + O₂ → CO₂ + H₂O", coeffs: [1, 3, 2, 2] },
      { equation: "C₂H₅OH + O₂ → CO₂ + H₂O", coeffs: [1, 3, 2, 3] },
    ],
  },
  "molecule-builder": {
    title: "Молекула Құрастырушы",
    description: "Молекуланы атомдардан құрастырыңыз",
    molecules: [
      { name: "Метан", formula: "CH₄", atoms: { C: 1, H: 4 } },
      { name: "Этан", formula: "C₂H₆", atoms: { C: 2, H: 6 } },
      { name: "Этилен", formula: "C₂H₄", atoms: { C: 2, H: 4 } },
      { name: "Этанол", formula: "C₂H₅OH", atoms: { C: 2, H: 6, O: 1 } },
      { name: "Сірке қышқылы", formula: "CH₃COOH", atoms: { C: 2, H: 4, O: 2 } },
    ],
  },
  "isomer-challenge": {
    title: "Изомер Челлендж",
    description: "Берілген формуладан барлық изомерлерді табыңыз",
    challenges: [
      { formula: "C₄H₁₀", isomers: ["Бутан", "2-метилпропан"], count: 2 },
      { formula: "C₅H₁₂", isomers: ["Пентан", "2-метилбутан", "2,2-диметилпропан"], count: 3 },
      { formula: "C₄H₈", isomers: ["1-бутен", "2-бутен", "2-метилпропен", "Циклобутан"], count: 4 },
    ],
  },
  "functional-groups": {
    title: "Функционалдық Топтар",
    description: "Затты дұрыс топқа жатқызыңыз",
    compounds: [
      { name: "C₂H₅OH", group: "Спирттер" },
      { name: "CH₃COOH", group: "Қышқылдар" },
      { name: "CH₃CHO", group: "Альдегидтер" },
      { name: "C₆H₁₂O₆", group: "Көмірсулар" },
      { name: "CH₄", group: "Көмірсутектер" },
      { name: "C₂H₄", group: "Көмірсутектер" },
      { name: "C₃H₇OH", group: "Спирттер" },
      { name: "HCOOH", group: "Қышқылдар" },
    ],
    groups: ["Көмірсутектер", "Спирттер", "Қышқылдар", "Альдегидтер", "Көмірсулар"],
  },
}

// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// Show progress
function showProgress() {
  alert("Сіздің үлгеріміңіз: 94%\n\nАяқталған сабақтар: 15/15\nПрактикалық жұмыстар: 8/8\nБақылау жұмыстары: 3/3")
}

// Expand topic card
function expandTopic(card, topicId) {
  scrollToSection("lessons")
}

// Toggle lesson group
function toggleGroup(header) {
  header.classList.toggle("active")
}

// Open lesson with full content
function openLesson(lessonNumber) {
  const lesson = lessonsData[lessonNumber]

  if (!lesson) {
    alert(`Сабақ ${lessonNumber} әзірге дайындалуда...`)
    return
  }

  let content = `
    <div class="lesson-detail">
      <h2>${lesson.title}</h2>
      <div class="lesson-meta-info">
        <div class="meta-item">⏱️ ${lesson.duration}</div>
        <div class="meta-item">📚 ${lesson.topic}</div>
      </div>
  `

  lesson.sections.forEach((section) => {
    content += `<div class="lesson-section">`
    content += `<h3>${section.heading}</h3>`
    content += `<p>${section.content}</p>`

    if (section.formula) {
      content += `<div class="formula-box">${section.formula}</div>`
    }

    if (section.list) {
      content += `<ul>`
      section.list.forEach((item) => {
        content += `<li>${item}</li>`
      })
      content += `</ul>`
    }

    if (section.table) {
      content += `<table class="data-table"><thead><tr>`
      section.table[0].forEach((header) => {
        content += `<th>${header}</th>`
      })
      content += `</tr></thead><tbody>`
      for (let i = 1; i < section.table.length; i++) {
        content += `<tr>`
        section.table[i].forEach((cell) => {
          content += `<td>${cell}</td>`
        })
        content += `</tr>`
      }
      content += `</tbody></table>`
    }

    if (section.info) {
      content += `<div class="info-box">💡 <strong>Білесіз бе?</strong><br>${section.info}</div>`
    }

    if (section.warning) {
      content += `<div class="warning-box">⚠️ <strong>НАЗАР!</strong><br>${section.warning}</div>`
    }

    content += `</div>`
  })

  content += `</div>`

  document.getElementById("lessonContent").innerHTML = content
  document.getElementById("lessonModal").style.display = "block"
}

// Start Game
function startGame(gameId) {
  const game = gamesData[gameId]

  if (gameId === "formula-match") {
    startFormulaMatchGame(game)
  } else if (gameId === "chemistry-quiz") {
    startQuizGame(game)
  } else if (gameId === "reaction-balance") {
    startReactionBalanceGame()
  } else if (gameId === "molecule-builder") {
    startMoleculeBuilderGame()
  } else if (gameId === "isomer-challenge") {
    startIsomerChallengeGame()
  } else if (gameId === "functional-groups") {
    startFunctionalGroupsGame()
  } else {
    alert(`${gameId} ойыны әзірше дайындалуда...`)
  }
}

// Formula Match Game
function startFormulaMatchGame(game) {
  let currentPair = 0
  let score = 0
  let errors = 0

  const shuffledPairs = [...game.pairs].sort(() => Math.random() - 0.5)

  function renderGame() {
    if (currentPair >= shuffledPairs.length) {
      showGameResult()
      return
    }

    const pair = shuffledPairs[currentPair]
    const allFormulas = shuffledPairs.map((p) => p.formula).sort(() => Math.random() - 0.5)

    let content = `
      <div class="game-container">
        <div class="game-header">
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentPair + 1}/${shuffledPairs.length}</div>
              <div class="game-stat-label">Сұрақ</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${errors}</div>
              <div class="game-stat-label">Қате</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <h3 style="text-align: center; font-size: 28px; margin-bottom: 32px;">${pair.name}</h3>
          <div class="game-options">
    `

    allFormulas.forEach((formula) => {
      content += `<div class="game-option" onclick="checkFormulaAnswer('${formula}', '${pair.formula}')">${formula}</div>`
    })

    content += `
          </div>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("gameModal").style.display = "block"
  }

  window.checkFormulaAnswer = (selected, correct) => {
    if (selected === correct) {
      score += 10
      currentPair++
      setTimeout(renderGame, 500)
    } else {
      errors++
      alert("Қате! Қайталап көріңіз.")
    }
  }

  function showGameResult() {
    const percentage = Math.round((score / (shuffledPairs.length * 10)) * 100)
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Ойын аяқталды!</h3>
          <div class="game-result-score">${percentage}%</div>
          <p>Сіз ${shuffledPairs.length} сұрақтың ${score / 10} дұрыс жауап бердіңіз</p>
          <p>Қателер саны: ${errors}</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('formula-match')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  renderGame()
}

// Quiz Game
function startQuizGame(game) {
  let currentQ = 0
  let score = 0
  let timeLeft = 30
  let timer

  const shuffled = [...game.questions].sort(() => Math.random() - 0.5)

  function renderQuiz() {
    if (timeLeft <= 0 || currentQ >= shuffled.length) {
      clearInterval(timer)
      showQuizResult()
      return
    }

    const q = shuffled[currentQ]

    const content = `
      <div class="game-container">
        <div class="game-header">
          <h2>${game.title}</h2>
          <div class="test-timer">⏱️ ${timeLeft} секунд</div>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentQ}/${shuffled.length}</div>
              <div class="game-stat-label">Сұрақтар</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <h3 style="font-size: 24px; margin-bottom: 24px;">${q.q}</h3>
          <input type="text" id="quizAnswer" placeholder="Жауабыңызды енгізіңіз..." 
            style="width: 100%; padding: 16px; font-size: 18px; border: 2px solid rgba(139, 92, 246, 0.3); 
            border-radius: 12px; margin-bottom: 16px;" onkeypress="if(event.key==='Enter') checkQuizAnswer('${q.a}')">
          <button class="game-btn game-btn-primary" style="width: 100%;" onclick="checkQuizAnswer('${q.a}')">Тексеру</button>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("quizAnswer").focus()
  }

  window.checkQuizAnswer = (correct) => {
    const answer = document.getElementById("quizAnswer").value.trim()
    if (answer.toLowerCase() === correct.toLowerCase() || answer === correct) {
      score += 10
    }
    currentQ++
    renderQuiz()
  }

  function showQuizResult() {
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Уақыт бітті!</h3>
          <div class="game-result-score">${score} ұпай</div>
          <p>Сіз ${currentQ} сұраққа жауап бердіңіз</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('chemistry-quiz')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  timer = setInterval(() => {
    timeLeft--
    renderQuiz()
  }, 1000)

  renderQuiz()
}

// Reaction Balance Game
function startReactionBalanceGame() {
  const reactions = gamesData["reaction-balance"].reactions

  let currentReaction = 0
  let score = 0

  function renderGame() {
    if (currentReaction >= reactions.length) {
      showResult()
      return
    }

    const reaction = reactions[currentReaction]
    const parts = reaction.equation.split(" → ")
    const reactants = parts[0].split(" + ")
    const products = parts[1].split(" + ")

    const content = `
      <div class="game-container">
        <div class="game-header">
          <h2>⚖️ Реакция Теңдестіру</h2>
          <p>Химиялық реакцияны дұрыс теңдестіріңіз</p>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentReaction + 1}/${reactions.length}</div>
              <div class="game-stat-label">Реакция</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <div class="reaction-equation">
            <div class="reaction-side">
              ${reactants
                .map(
                  (r, i) => `
                <div class="molecule-group">
                  <input type="number" id="coeff${i}" class="coeff-input" min="1" max="10" value="1">
                  <span class="molecule">${r.trim()}</span>
                </div>
                ${i < reactants.length - 1 ? '<span class="plus">+</span>' : ""}
              `,
                )
                .join("")}
            </div>
            <span class="arrow">→</span>
            <div class="reaction-side">
              ${products
                .map(
                  (p, i) => `
                <div class="molecule-group">
                  <input type="number" id="coeff${reactants.length + i}" class="coeff-input" min="1" max="10" value="1">
                  <span class="molecule">${p.trim()}</span>
                </div>
                ${i < products.length - 1 ? '<span class="plus">+</span>' : ""}
              `,
                )
                .join("")}
            </div>
          </div>
          <button class="game-btn game-btn-primary" style="width: 100%; margin-top: 32px;" onclick="checkBalance()">Тексеру</button>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("gameModal").style.display = "block"
  }

  window.checkBalance = () => {
    const reaction = reactions[currentReaction]
    let isCorrect = true

    for (let i = 0; i < reaction.coeffs.length; i++) {
      const input = document.getElementById(`coeff${i}`)
      if (Number.parseInt(input.value) !== reaction.coeffs[i]) {
        isCorrect = false
        break
      }
    }

    if (isCorrect) {
      score += 20
      alert("Дұрыс! 🎉")
      currentReaction++
      renderGame()
    } else {
      alert("Қате! Қайталап көріңіз. Подсказка: молекулалардағы атомдар саны екі жақта тең болуы керек.")
    }
  }

  function showResult() {
    const percentage = Math.round((score / (reactions.length * 20)) * 100)
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Ойын аяқталды!</h3>
          <div class="game-result-score">${percentage}%</div>
          <p>Сіз ${reactions.length} реакцияның ${score / 20} дұрыс теңдестірдіңіз</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('reaction-balance')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  renderGame()
}

// Molecule Builder game
function startMoleculeBuilderGame() {
  const molecules = gamesData["molecule-builder"].molecules

  let currentMolecule = 0
  let score = 0
  let userAtoms = { C: 0, H: 0, O: 0 }

  function renderGame() {
    if (currentMolecule >= molecules.length) {
      showResult()
      return
    }

    const molecule = molecules[currentMolecule]

    const content = `
      <div class="game-container">
        <div class="game-header">
          <h2>🧬 Молекула Құрастырушы</h2>
          <p>Молекуланы атомдардан құрастырыңыз</p>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentMolecule + 1}/${molecules.length}</div>
              <div class="game-stat-label">Молекула</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <h3 style="text-align: center; font-size: 24px; margin-bottom: 16px;">Құрастырыңыз: ${molecule.name}</h3>
          <div class="atom-builder">
            <div class="atom-palette">
              <div class="atom-option atom-carbon" onclick="addAtom('C')">
                <span class="atom-symbol">C</span>
                <span class="atom-name">Көміртегі</span>
              </div>
              <div class="atom-option atom-hydrogen" onclick="addAtom('H')">
                <span class="atom-symbol">H</span>
                <span class="atom-name">Сутегі</span>
              </div>
              <div class="atom-option atom-oxygen" onclick="addAtom('O')">
                <span class="atom-symbol">O</span>
                <span class="atom-name">Оттегі</span>
              </div>
            </div>
            <div class="built-molecule">
              <h4>Сіздің молекулаңыз:</h4>
              <div class="atom-counts">
                <div class="atom-count">C: <strong>${userAtoms.C}</strong></div>
                <div class="atom-count">H: <strong>${userAtoms.H}</strong></div>
                <div class="atom-count">O: <strong>${userAtoms.O}</strong></div>
              </div>
            </div>
          </div>
          <div class="game-actions" style="margin-top: 24px;">
            <button class="game-btn game-btn-secondary" onclick="resetMolecule()">Тазалау</button>
            <button class="game-btn game-btn-primary" onclick="checkMolecule()">Тексеру</button>
          </div>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("gameModal").style.display = "block"
  }

  window.addAtom = (atom) => {
    userAtoms[atom]++
    renderGame()
  }

  window.resetMolecule = () => {
    userAtoms = { C: 0, H: 0, O: 0 }
    renderGame()
  }

  window.checkMolecule = () => {
    const molecule = molecules[currentMolecule]
    let isCorrect = true

    for (const atom in molecule.atoms) {
      if (userAtoms[atom] !== molecule.atoms[atom]) {
        isCorrect = false
        break
      }
    }

    if (isCorrect) {
      score += 15
      alert(`Дұрыс! Сіз ${molecule.formula} молекуласын құрастырдыңыз! 🎉`)
      userAtoms = { C: 0, H: 0, O: 0 }
      currentMolecule++
      renderGame()
    } else {
      alert("Қате! Қайталап көріңіз.")
    }
  }

  function showResult() {
    const percentage = Math.round((score / (molecules.length * 15)) * 100)
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Ойын аяқталды!</h3>
          <div class="game-result-score">${percentage}%</div>
          <p>Сіз ${molecules.length} молекуланың ${score / 15} дұрыс құрастырдыңыз</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('molecule-builder')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  renderGame()
}

// Isomer Challenge game
function startIsomerChallengeGame() {
  const challenges = gamesData["isomer-challenge"].challenges

  let currentChallenge = 0
  let score = 0

  function renderGame() {
    if (currentChallenge >= challenges.length) {
      showResult()
      return
    }

    const challenge = challenges[currentChallenge]

    const content = `
      <div class="game-container">
        <div class="game-header">
          <h2>🔄 Изомер Челлендж</h2>
          <p>Берілген формуладан барлық изомерлерді табыңыз</p>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentChallenge + 1}/${challenges.length}</div>
              <div class="game-stat-label">Деңгей</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <h3 style="text-align: center; font-size: 32px; margin-bottom: 24px;">${challenge.formula}</h3>
          <p style="text-align: center; margin-bottom: 24px;">Осы формулада неше изомер бар?</p>
          <div class="isomer-options">
            ${[1, 2, 3, 4, 5]
              .map(
                (num) => `
              <button class="isomer-btn" onclick="checkIsomerCount(${num})">${num}</button>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("gameModal").style.display = "block"
  }

  window.checkIsomerCount = (count) => {
    const challenge = challenges[currentChallenge]

    if (count === challenge.count) {
      score += 25
      const isomerList = challenge.isomers.map((iso, i) => `${i + 1}. ${iso}`).join("\n")
      alert(`Дұрыс! 🎉\n\nИзомерлер:\n${isomerList}`)
      currentChallenge++
      renderGame()
    } else {
      alert("Қате! Қайталап көріңіз.")
    }
  }

  function showResult() {
    const percentage = Math.round((score / (challenges.length * 25)) * 100)
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Ойын аяқталды!</h3>
          <div class="game-result-score">${percentage}%</div>
          <p>Сіз ${challenges.length} деңгейдің ${score / 25} дұрыс өттіңіз</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('isomer-challenge')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  renderGame()
}

// Functional Groups game
function startFunctionalGroupsGame() {
  const compounds = gamesData["functional-groups"].compounds
  const groups = gamesData["functional-groups"].groups

  let currentCompound = 0
  let score = 0
  let errors = 0
  const shuffled = [...compounds].sort(() => Math.random() - 0.5)

  function renderGame() {
    if (currentCompound >= shuffled.length) {
      showResult()
      return
    }

    const compound = shuffled[currentCompound]

    const content = `
      <div class="game-container">
        <div class="game-header">
          <h2>🔬 Функционалдық Топтар</h2>
          <p>Затты дұрыс топқа жатқызыңыз</p>
          <div class="game-stats">
            <div class="game-stat">
              <div class="game-stat-value">${currentCompound + 1}/${shuffled.length}</div>
              <div class="game-stat-label">Зат</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${score}</div>
              <div class="game-stat-label">Ұпай</div>
            </div>
            <div class="game-stat">
              <div class="game-stat-value">${errors}</div>
              <div class="game-stat-label">Қате</div>
            </div>
          </div>
        </div>
        <div class="game-board">
          <h3 style="text-align: center; font-size: 36px; margin-bottom: 32px;">${compound.name}</h3>
          <div class="functional-groups">
            ${groups
              .map(
                (group) => `
              <button class="functional-group-btn" onclick="checkGroup('${group}', '${compound.group}')">${group}</button>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `

    document.getElementById("gameContent").innerHTML = content
    document.getElementById("gameModal").style.display = "block"
  }

  window.checkGroup = (selected, correct) => {
    if (selected === correct) {
      score += 10
      currentCompound++
      renderGame()
    } else {
      errors++
      alert("Қате! Қайталап көріңіз.")
    }
  }

  function showResult() {
    const percentage = Math.round((score / (shuffled.length * 10)) * 100)
    const content = `
      <div class="game-container">
        <div class="game-result">
          <h3>Ойын аяқталды!</h3>
          <div class="game-result-score">${percentage}%</div>
          <p>Сіз ${shuffled.length} заттың ${score / 10} дұрыс жіктедіңіз</p>
          <p>Қателер саны: ${errors}</p>
          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startGame('functional-groups')">Қайта бастау</button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('gameModal')">Жабу</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("gameContent").innerHTML = content
  }

  renderGame()
}

// Open practice
function openPractice(practiceId) {
  alert(
    `Практикалық жұмыс ${practiceId} әзірге дайындалуда...\n\nБұл бөлімде сіз молекулалық модельдермен жұмыс істей аласыз.`,
  )
}

// Start test with full functionality
function startTest(testNumber) {
  const test = testsData[testNumber]

  if (!test) {
    alert(`БЖБ №${testNumber} әзірге дайындалуда...`)
    return
  }

  let currentQuestion = 0
  const answers = []
  let timeLeft = test.duration * 60
  let timerInterval

  function renderTest() {
    const question = test.questions[currentQuestion]

    console.log("[v0] Rendering question:", currentQuestion, question)

    let content = `
      <div class="test-container">
        <div class="test-header">
          <h2>${test.title}</h2>
          <div class="test-timer">⏱️ ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")}</div>
        </div>
        <div class="test-progress-bar">
          <div class="test-progress-fill" style="width: ${((currentQuestion + 1) / test.questions.length) * 100}%"></div>
        </div>
        <div class="test-question">
          <span class="question-number">Сұрақ ${currentQuestion + 1} / ${test.questions.length}</span>
          <h3 class="question-text">${question.question}</h3>
          <div class="question-options">
    `

    question.options.forEach((option, index) => {
      const selected = answers[currentQuestion] === index ? "selected" : ""
      content += `
        <div class="question-option ${selected}" onclick="selectAnswer(${index})">
          <div class="option-radio ${selected ? "option-radio-selected" : ""}">
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          </div>
          <span class="option-text">${option}</span>
        </div>
      `
    })

    content += `
          </div>
        </div>
        <div class="test-navigation">
          <button class="nav-btn nav-btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? "disabled" : ""}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Артқа
          </button>
          ${
            currentQuestion < test.questions.length - 1
              ? `<button class="nav-btn nav-btn-primary" onclick="nextQuestion()">
                  Келесі
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>`
              : `<button class="nav-btn nav-btn-success" onclick="finishTest()">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Аяқтау
                </button>`
          }
        </div>
      </div>
    `

    document.getElementById("testContent").innerHTML = content
    document.getElementById("testModal").style.display = "block"
  }

  window.selectAnswer = (index) => {
    console.log("[v0] Selected answer:", index)
    answers[currentQuestion] = index
    renderTest()
  }

  window.nextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      currentQuestion++
      renderTest()
    }
  }

  window.previousQuestion = () => {
    if (currentQuestion > 0) {
      currentQuestion--
      renderTest()
    }
  }

  window.finishTest = () => {
    clearInterval(timerInterval)

    let correct = 0
    const results = []

    test.questions.forEach((q, i) => {
      const isCorrect = answers[i] === q.correct
      if (isCorrect) correct++
      results.push({
        question: q.question,
        userAnswer: answers[i] !== undefined ? q.options[answers[i]] : "Жауап берілмеді",
        correctAnswer: q.options[q.correct],
        isCorrect: isCorrect,
      })
    })

    const percentage = Math.round((correct / test.questions.length) * 100)
    let grade = "2"
    if (percentage >= 85) grade = "5"
    else if (percentage >= 70) grade = "4"
    else if (percentage >= 50) grade = "3"

    let resultsHTML = ""
    results.forEach((r, i) => {
      resultsHTML += `
        <div class="answer-review ${r.isCorrect ? "correct-answer" : "wrong-answer"}">
          <div class="review-header">
            <span class="review-number">Сұрақ ${i + 1}</span>
            <span class="review-status">${r.isCorrect ? "✓ Дұрыс" : "✗ Қате"}</span>
          </div>
          <p class="review-question">${r.question}</p>
          <div class="review-answers">
            <p class="user-answer">Сіздің жауабыңыз: <strong>${r.userAnswer}</strong></p>
            ${!r.isCorrect ? `<p class="correct-answer-text">Дұрыс жауап: <strong>${r.correctAnswer}</strong></p>` : ""}
          </div>
        </div>
      `
    })

    const content = `
      <div class="test-container">
        <div class="test-results">
          <div class="result-badge result-badge-${percentage >= 70 ? "success" : percentage >= 50 ? "warning" : "danger"}">
            <div class="result-icon">${percentage >= 70 ? "🎉" : percentage >= 50 ? "😊" : "😔"}</div>
            <h2>Тест аяқталды!</h2>
          </div>
          
          <div class="test-score-display">
            <div class="score-circle">
              <svg width="200" height="200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="12"/>
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient)" stroke-width="12"
                  stroke-dasharray="${(percentage / 100) * 565} 565" 
                  stroke-linecap="round" 
                  transform="rotate(-90 100 100)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b5cf6"/>
                    <stop offset="100%" style="stop-color:#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="score-text">
                <div class="score-percentage">${percentage}%</div>
                <div class="score-grade">Баға: ${grade}</div>
              </div>
            </div>
          </div>

          <div class="test-score-text">${correct} / ${test.questions.length} дұрыс жауап</div>
          
          <div class="test-results-details">
            <div class="result-detail result-detail-success">
              <div class="result-detail-icon">✓</div>
              <div class="result-detail-value">${correct}</div>
              <div class="result-detail-label">Дұрыс</div>
            </div>
            <div class="result-detail result-detail-danger">
              <div class="result-detail-icon">✗</div>
              <div class="result-detail-value">${test.questions.length - correct}</div>
              <div class="result-detail-label">Қате</div>
            </div>
            <div class="result-detail result-detail-info">
              <div class="result-detail-icon">⏱️</div>
              <div class="result-detail-value">${Math.floor((test.duration * 60 - timeLeft) / 60)} мин</div>
              <div class="result-detail-label">Уақыт</div>
            </div>
          </div>

          <div class="answers-review-section">
            <h3 class="review-section-title">Жауаптарды қарау</h3>
            ${resultsHTML}
          </div>

          <div class="game-actions">
            <button class="game-btn game-btn-primary" onclick="startTest(${testNumber})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
              </svg>
              Қайта тапсыру
            </button>
            <button class="game-btn game-btn-secondary" onclick="closeModal('testModal')">Жабу</button>
          </div>
        </div>
      </div>
    `

    document.getElementById("testContent").innerHTML = content
  }

  timerInterval = setInterval(() => {
    timeLeft--
    if (timeLeft <= 0) {
      window.finishTest()
    } else {
      renderTest()
    }
  }, 1000)

  renderTest()
}

// Open review
function openReview(reviewType) {
  alert(
    `${reviewType} қайталауы әзірге дайындалуда...\n\nБұл бөлімде барлық негізгі материалдар қысқаша түрде берілген.`,
  )
}

// Toggle table
function toggleTable(card) {
  card.classList.toggle("active")
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none"
}

// Close modal when clicking outside
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".glass-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Smooth scroll for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})
