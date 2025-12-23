const state = {
  user: {
    xp: 0,
    level: 1,
    streak: 0,
    completedQuests: [],
    achievements: 0,
    experiments: 0,
    accuracy: 0,
    lessons: 0,
  },
  currentFilter: "all",
  labItems: [],
  currentQuest: null,
  currentQuestion: 0,
}

window.addEventListener("load", () => {
  initializeApp()
})

function initializeApp() {
  // Hide loading screen
  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden")
  }, 2000)

  // Load saved data
  loadUserData()

  // Setup navigation
  setupNavigation()

  // Initialize sections
  renderPeriodicTable()
  renderLab()
  renderQuestPath()
  renderMolecules()

  // Start hero animation
  animateHeroCanvas()

  // Update UI
  updateUserDisplay()
}

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const section = link.dataset.section
      switchSection(section)
    })
  })
}

function switchSection(sectionName) {
  // Update nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.dataset.section === sectionName) {
      link.classList.add("active")
    }
  })

  // Update sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })
  document.getElementById(sectionName).classList.add("active")
}

function animateHeroCanvas() {
  const canvas = document.getElementById("heroCanvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  let angle = 0

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Draw nucleus
    ctx.fillStyle = "#00f2ff"
    ctx.beginPath()
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
    ctx.fill()

    // Draw electron orbits
    for (let i = 0; i < 3; i++) {
      const radius = 80 + i * 60
      const speed = 0.02 + i * 0.01
      const electronAngle = angle * speed + i * ((Math.PI * 2) / 3)

      // Orbit
      ctx.strokeStyle = `rgba(0, 242, 255, ${0.3 - i * 0.1})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Electron
      const ex = centerX + Math.cos(electronAngle) * radius
      const ey = centerY + Math.sin(electronAngle) * radius

      ctx.fillStyle = ["#00f2ff", "#ff00ff", "#ffff00"][i]
      ctx.beginPath()
      ctx.arc(ex, ey, 8, 0, Math.PI * 2)
      ctx.fill()

      ctx.shadowBlur = 20
      ctx.shadowColor = ["#00f2ff", "#ff00ff", "#ffff00"][i]
      ctx.fill()
      ctx.shadowBlur = 0
    }

    angle += 0.02
    requestAnimationFrame(draw)
  }

  draw()
}

function renderPeriodicTable() {
  const table = document.getElementById("periodicTable")
  if (!table) return

  table.innerHTML = ""

  // Filter elements
  const filteredElements =
    state.currentFilter === "all" ? elements : elements.filter((el) => el.category === state.currentFilter)

  // Create grid
  const positions = {}
  elements.forEach((el) => {
    const key = `${el.period}-${el.group || 0}`
    positions[key] = el
  })

  // Render 7 periods x 18 groups
  for (let period = 1; period <= 7; period++) {
    for (let group = 1; group <= 18; group++) {
      const key = `${period}-${group}`
      const el = positions[key]

      if (el && (state.currentFilter === "all" || el.category === state.currentFilter)) {
        const elementDiv = document.createElement("div")
        elementDiv.className = `element ${el.category}`
        elementDiv.style.gridColumn = group
        elementDiv.style.gridRow = period

        elementDiv.innerHTML = `
          <div class="element-number">${el.num}</div>
          <div class="element-symbol">${el.symbol}</div>
          <div class="element-name">${el.name}</div>
          <div class="element-mass">${el.mass}</div>
        `

        elementDiv.addEventListener("click", () => showElementDetails(el))
        table.appendChild(elementDiv)
      }
    }
  }

  // Setup filters
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      state.currentFilter = btn.dataset.filter
      renderPeriodicTable()
    })
  })
}

function showElementDetails(element) {
  const modal = document.getElementById("elementModal")
  document.getElementById("modalSymbol").textContent = element.symbol
  document.getElementById("modalSymbol").style.color = getElementColor(element.category)
  document.getElementById("modalName").textContent = element.name
  document.getElementById("modalNumber").textContent = `Атомдық нөмірі: ${element.num}`

  const properties = `
    <div class="property">
      <div class="property-label">Атомдық масса</div>
      <div class="property-value">${element.mass}</div>
    </div>
    <div class="property">
      <div class="property-label">Категория</div>
      <div class="property-value">${getCategoryName(element.category)}</div>
    </div>
    <div class="property">
      <div class="property-label">Балқу температурасы</div>
      <div class="property-value">${element.meltingPoint ? element.meltingPoint + "°C" : "Белгісіз"}</div>
    </div>
    <div class="property">
      <div class="property-label">Қайнау температурасы</div>
      <div class="property-value">${element.boilingPoint ? element.boilingPoint + "°C" : "Белгісіз"}</div>
    </div>
    <div class="property">
      <div class="property-label">Тығыздық</div>
      <div class="property-value">${element.density ? element.density + " г/см³" : "Белгісіз"}</div>
    </div>
    <div class="property">
      <div class="property-label">Электрондық конфигурация</div>
      <div class="property-value">${element.electronConfig}</div>
    </div>
  `
  document.getElementById("modalProperties").innerHTML = properties

  modal.classList.add("active")
  drawAtomModel(element)

  // Close modal handlers
  const closeBtn = modal.querySelector(".modal-close")
  closeBtn.onclick = () => modal.classList.remove("active")
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active")
  }
}

function drawAtomModel(element) {
  const canvas = document.getElementById("atomCanvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2

  // Draw nucleus
  ctx.fillStyle = getElementColor(element.category)
  ctx.beginPath()
  ctx.arc(centerX, centerY, 25, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = "#fff"
  ctx.font = "12px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText(element.symbol, centerX, centerY + 4)

  // Draw electron shells based on period
  const shells = element.period
  for (let shell = 1; shell <= shells; shell++) {
    const radius = 40 + shell * 35

    // Shell orbit
    ctx.strokeStyle = "rgba(255,255,255,0.3)"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Electrons
    const electronsInShell = Math.min(element.num, shell === 1 ? 2 : shell === 2 ? 8 : 18)
    for (let e = 0; e < Math.min(electronsInShell, shell * 2); e++) {
      const angle = ((Math.PI * 2) / (shell * 2)) * e
      const ex = centerX + Math.cos(angle) * radius
      const ey = centerY + Math.sin(angle) * radius

      ctx.fillStyle = "#00f2ff"
      ctx.beginPath()
      ctx.arc(ex, ey, 5, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

function getElementColor(category) {
  const colors = {
    alkali: "#ff6b6b",
    alkaline: "#ffd93d",
    transition: "#6bcf7f",
    "post-transition": "#4ecdc4",
    metalloid: "#95e1d3",
    nonmetal: "#00f2ff",
    halogen: "#ff00ff",
    noble: "#c77dff",
    lanthanide: "#ff9ff3",
    actinide: "#f67280",
    unknown: "#888",
  }
  return colors[category] || "#888"
}

function getCategoryName(category) {
  const names = {
    alkali: "Сілтілік металдар",
    alkaline: "Сілтілік-жер металдары",
    transition: "Өтпелі металдар",
    "post-transition": "Өтпелі емес металдар",
    metalloid: "Жартылай металдар",
    nonmetal: "Металл емес",
    halogen: "Галогендер",
    noble: "Асыл газдар",
    lanthanide: "Лантаноидтар",
    actinide: "Актиноидтар",
    unknown: "Белгісіз",
  }
  return names[category] || "Белгісіз"
}

function renderLab() {
  const chemicals = [
    // Хлорсутек қышқылы
    { id: "HCl", name: "Тұз қышқылы (HCl)", color: "#ff6b6b" },

    // Сілті
    { id: "NaOH", name: "Натрий гидроксиді (NaOH)", color: "#6bcf7f" },

    // Күкірт қышқылы
    { id: "H2SO4", name: "Күкірт қышқылы (H₂SO₄)", color: "#ff9ff3" },

    // Карбонат (әк тас)
    { id: "CaCO3", name: "Кальций карбонаты (CaCO₃)", color: "#f0f0f0" },

    // Аммиак
    { id: "NH3", name: "Аммиак (NH₃)", color: "#74b9ff" },

    // Азот қышқылы
    { id: "HNO3", name: "Азот қышқылы (HNO₃)", color: "#ffeaa7" },
  ]

  const chemicalsList = document.getElementById("chemicalsList")
  if (!chemicalsList) return

  chemicalsList.innerHTML = ""
  chemicals.forEach((chem) => {
    const div = document.createElement("div")
    div.className = "chemical-item"
    div.textContent = chem.name
    div.draggable = true
    div.dataset.chemical = chem.id
    div.style.borderColor = chem.color

    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("chemical", chem.id)
      e.dataTransfer.setData("name", chem.name)
    })

    div.addEventListener("click", () => addToLabBench(chem.id, chem.name))

    chemicalsList.appendChild(div)
  })

  // Lab bench drop zone
  const labBench = document.getElementById("labBench")
  labBench.addEventListener("dragover", (e) => e.preventDefault())
  labBench.addEventListener("drop", (e) => {
    e.preventDefault()
    const chemId = e.dataTransfer.getData("chemical")
    const chemName = e.dataTransfer.getData("name")
    addToLabBench(chemId, chemName)
  })

  // Lab buttons
  document.getElementById("mixBtn").onclick = mixChemicals
  document.getElementById("heatBtn").onclick = heatChemicals
  document.getElementById("resetLabBtn").onclick = resetLab
}


function addToLabBench(id, name) {
  const labBench = document.getElementById("labBench")
  const hint = labBench.querySelector(".bench-hint")
  if (hint) hint.remove()

  const item = document.createElement("div")
  item.className = "bench-item"
  item.innerHTML = `
    ${name}
    <button class="remove-btn" onclick="this.parentElement.remove()">×</button>
  `
  item.dataset.chemical = id

  labBench.appendChild(item)
  state.labItems.push(id)
}

function mixChemicals() {
  const items = Array.from(document.querySelectorAll(".bench-item")).map((el) => el.dataset.chemical)
  if (items.length < 2) {
    showReactionResult("Кем дегенде екі реактив қосыңыз!", "error")
    return
  }

  const reactions = {
    "HCl,NaOH": { result: "NaCl + H₂O түзілді (бейтараптану)", type: "success" },
    "NaOH,HCl": { result: "NaCl + H₂O түзілді (бейтараптану)", type: "success" },
    "CaCO3,HCl": { result: "CaCl₂ + H₂O + CO₂↑ түзілді (газ бөлінді)", type: "success" },
    "HCl,CaCO3": { result: "CaCl₂ + H₂O + CO₂↑ түзілді (газ бөлінді)", type: "success" },
    "H2SO4,NaOH": { result: "Na₂SO₄ + H₂O түзілді", type: "success" },
    "NaOH,H2SO4": { result: "Na₂SO₄ + H₂O түзілді", type: "success" },
  }

  const key = items.sort().join(",")
  const reaction = reactions[key]

  if (reaction) {
    showReactionResult("✓ " + reaction.result, reaction.type)
    state.user.experiments++
    state.user.xp += 50
    updateUserDisplay()
  } else {
    showReactionResult("Бұл заттар әрекеттеспейді немесе реакция жүрмейді.", "error")
  }
}

function heatChemicals() {
  const items = Array.from(document.querySelectorAll(".bench-item")).map((el) => el.dataset.chemical)
  if (items.length === 0) {
    showReactionResult("Алдымен реактив қосыңыз!", "error")
    return
  }

  if (items.includes("CaCO3")) {
    showReactionResult("✓ CaCO₃ → CaO + CO₂↑ (әктас ыдырады)", "success")
    state.user.experiments++
    state.user.xp += 50
    updateUserDisplay()
  } else {
    showReactionResult("Қыздыру әсері байқалмады.", "error")
  }
}

function resetLab() {
  const labBench = document.getElementById("labBench")
  labBench.innerHTML = '<p class="bench-hint">Реактивтерді қосып, реакция жасаңыз</p>'
  state.labItems = []
  document.getElementById("reactionResult").textContent = ""
}

function showReactionResult(message, type) {
  const result = document.getElementById("reactionResult")
  result.textContent = message
  result.className = `reaction-result ${type}`
}

function renderQuestPath() {
  const questPath = document.getElementById("questPath")
  if (!questPath) return

  questPath.innerHTML = ""

  quests.forEach((quest, index) => {
    const isCompleted = state.user.completedQuests.includes(quest.id)
    const isAvailable = index === 0 || state.user.completedQuests.includes(quests[index - 1].id)
    const isLocked = !isCompleted && !isAvailable

    const nodeClass = isCompleted ? "completed" : isAvailable ? "available" : "locked"

    const node = document.createElement("div")
    node.className = `quest-node ${nodeClass}`
    node.innerHTML = `
      <div class="quest-icon-circle">
        ${isCompleted ? "✓" : quest.icon}
      </div>
      <div class="quest-info">
        <div class="quest-title">${quest.title}</div>
        <div class="quest-description">${quest.description}</div>
      </div>
    `

    if (isAvailable && !isCompleted) {
      node.addEventListener("click", () => startQuest(quest))
    }

    questPath.appendChild(node)

    if (index < quests.length - 1) {
      const connector = document.createElement("div")
      connector.className = "quest-connector"
      questPath.appendChild(connector)
    }
  })
}

function startQuest(quest) {
  state.currentQuest = quest
  state.currentQuestion = 0

  const modal = document.getElementById("questModal")
  const modalContent = document.getElementById("questModalContent")

  modalContent.innerHTML = `
    <div class="quest-modal-header">
      <h2>${quest.icon} ${quest.title}</h2>
      <p>${quest.description}</p>
    </div>
    <div id="questContent"></div>
  `

  modal.style.display = "flex"
  modal.classList.add("active")
  showQuestion()

  modal.querySelector(".modal-close").onclick = () => {
    modal.style.display = "none"
    modal.classList.remove("active")
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      modal.classList.remove("active")
    }
  }
}

function showQuestion() {
  const quest = state.currentQuest
  const question = quest.questions[state.currentQuestion]
  const questContent = document.getElementById("questContent")

  questContent.innerHTML = `
    <div class="quest-question">
      <h3>Сұрақ ${state.currentQuestion + 1} / ${quest.questions.length}</h3>
      <h3>${question.question}</h3>
    </div>
    <div class="quest-options">
      ${question.options
        .map(
          (opt, i) => `
        <div class="quest-option" data-index="${i}">${opt}</div>
      `,
        )
        .join("")}
    </div>
    <div class="quest-feedback" id="questFeedback"></div>
    <div class="quest-actions">
      <button class="quest-btn" id="checkBtn" disabled>Тексеру</button>
    </div>
  `

  let selectedIndex = null

  questContent.querySelectorAll(".quest-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      questContent.querySelectorAll(".quest-option").forEach((o) => o.classList.remove("selected"))
      opt.classList.add("selected")
      selectedIndex = Number.parseInt(opt.dataset.index)
      document.getElementById("checkBtn").disabled = false
    })
  })

  document.getElementById("checkBtn").onclick = () => {
    if (selectedIndex === null) return

    const isCorrect = selectedIndex === question.correct
    const feedback = document.getElementById("questFeedback")
    const options = questContent.querySelectorAll(".quest-option")

    options.forEach((opt, i) => {
      opt.style.pointerEvents = "none"
      if (i === question.correct) {
        opt.classList.add("correct")
      } else if (i === selectedIndex && !isCorrect) {
        opt.classList.add("incorrect")
      }
    })

    feedback.className = `quest-feedback ${isCorrect ? "correct" : "incorrect"}`
    feedback.textContent = question.explanation

    if (isCorrect) {
      state.user.xp += 30
      updateUserDisplay()
    }

    document.getElementById("checkBtn").textContent =
      state.currentQuestion < quest.questions.length - 1 ? "Келесі" : "Аяқтау"
    document.getElementById("checkBtn").onclick = () => {
      if (state.currentQuestion < quest.questions.length - 1) {
        state.currentQuestion++
        showQuestion()
      } else {
        completeQuest()
      }
    }
  }
}

function completeQuest() {
  const quest = state.currentQuest

  if (!state.user.completedQuests.includes(quest.id)) {
    state.user.completedQuests.push(quest.id)
    state.user.xp += quest.xpReward
    state.user.lessons++

    const modal = document.getElementById("questModal")
    const modalContent = document.getElementById("questModalContent")
    modalContent.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <div style="font-size: 80px; margin-bottom: 20px;">🎉</div>
        <h2 style="font-size: 32px; margin-bottom: 15px;">Құттықтаймыз!</h2>
        <p style="font-size: 18px; color: #aaa; margin-bottom: 20px;">
          "${quest.title}" квестін аяқтадыңыз!
        </p>
        <div style="font-size: 24px; color: #00f2ff; font-weight: 700;">
          +${quest.xpReward} XP
        </div>
        <button class="quest-btn" onclick="document.getElementById('questModal').classList.remove('active'); renderQuestPath();" style="margin-top: 30px;">
          Жалғастыру
        </button>
      </div>
    `

    updateUserDisplay()
    saveUserData()
  }
}

function renderMolecules() {
  const grid = document.getElementById("moleculesGrid")
  if (!grid) return

  grid.innerHTML = ""

  molecules.forEach((mol) => {
    const card = document.createElement("div")
    card.className = "molecule-card"
    card.innerHTML = `
      <canvas class="molecule-preview" width="200" height="200"></canvas>
      <h3>${mol.name}</h3>
      <p>${mol.description}</p>
    `

    card.addEventListener("click", () => show3DMolecule(mol))
    grid.appendChild(card)

    // Draw 2D preview
    const canvas = card.querySelector("canvas")
    draw2DMolecule(canvas, mol)
  })
}

function draw2DMolecule(canvas, molecule) {
  const ctx = canvas.getContext("2d")
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const scale = 20

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw bonds
  ctx.strokeStyle = "rgba(255,255,255,0.5)"
  ctx.lineWidth = 3
  molecule.bonds.forEach(([a, b]) => {
    const atom1 = molecule.atoms[a]
    const atom2 = molecule.atoms[b]
    ctx.beginPath()
    ctx.moveTo(centerX + atom1.x * scale, centerY + atom1.y * scale)
    ctx.lineTo(centerX + atom2.x * scale, centerY + atom2.y * scale)
    ctx.stroke()
  })

  // Draw atoms
  molecule.atoms.forEach((atom) => {
    const x = centerX + atom.x * scale
    const y = centerY + atom.y * scale
    const r = atom.radius * 10

    ctx.fillStyle = atom.color
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = "rgba(255,255,255,0.5)"
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = "#fff"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(atom.element, x, y)
  })
}

function show3DMolecule(molecule) {
  const modal = document.getElementById("molecule3DModal")
  document.getElementById("molecule3DName").textContent = molecule.name
  document.getElementById("molecule3DInfo").innerHTML = `
    <h4>Формула: ${molecule.formula}</h4>
    <p>${molecule.description}</p>
    <h4 style="margin-top: 15px;">Қызықты факт:</h4>
    <p>${molecule.facts}</p>
  `

  modal.classList.add("active")

  const canvas = document.getElementById("molecule3DCanvas")
  let rotationX = 0
  let rotationY = 0
  let animationId
  let isRotating = true

  function draw3D() {
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const scale = 40

    // Sort atoms by z-depth for proper rendering
    const projectedAtoms = molecule.atoms
      .map((atom, index) => {
        // Rotate around Y axis
        const x = atom.x * Math.cos(rotationY) - atom.z * Math.sin(rotationY)
        let z = atom.x * Math.sin(rotationY) + atom.z * Math.cos(rotationY)

        // Rotate around X axis
        const y = atom.y * Math.cos(rotationX) - z * Math.sin(rotationX)
        z = atom.y * Math.sin(rotationX) + z * Math.cos(rotationX)

        return { ...atom, x, y, z, index }
      })
      .sort((a, b) => a.z - b.z)

    // Draw bonds
    ctx.lineWidth = 4
    molecule.bonds.forEach(([a, b]) => {
      const atom1 = projectedAtoms.find((at) => at.index === a)
      const atom2 = projectedAtoms.find((at) => at.index === b)

      const x1 = centerX + atom1.x * scale
      const y1 = centerY + atom1.y * scale
      const x2 = centerX + atom2.x * scale
      const y2 = centerY + atom2.y * scale

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, atom1.color)
      gradient.addColorStop(1, atom2.color)

      ctx.strokeStyle = gradient
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })

    // Draw atoms
    projectedAtoms.forEach((atom) => {
      const x = centerX + atom.x * scale
      const y = centerY + atom.y * scale
      const r = atom.radius * 15 * (1 + atom.z * 0.1) // Perspective

      // Shadow
      ctx.fillStyle = "rgba(0,0,0,0.3)"
      ctx.beginPath()
      ctx.arc(x + 5, y + 5, r, 0, Math.PI * 2)
      ctx.fill()

      // Atom
      const gradient = ctx.createRadialGradient(x - r / 3, y - r / 3, 0, x, y, r)
      gradient.addColorStop(0, atom.color)
      gradient.addColorStop(1, shadeColor(atom.color, -40))

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()

      // Highlight
      ctx.fillStyle = "rgba(255,255,255,0.4)"
      ctx.beginPath()
      ctx.arc(x - r / 3, y - r / 3, r / 3, 0, Math.PI * 2)
      ctx.fill()

      // Label
      ctx.fillStyle = "#fff"
      ctx.font = "bold 16px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(atom.element, x, y)
    })

    if (isRotating) {
      rotationY += 0.02
      rotationX = Math.sin(Date.now() * 0.0005) * 0.3
    }

    animationId = requestAnimationFrame(draw3D)
  }

  draw3D()

  // Controls
  document.getElementById("rotateBtn").onclick = () => {
    isRotating = !isRotating
    document.getElementById("rotateBtn").textContent = isRotating ? "Тоқтату" : "Айналдыру"
  }

  document.getElementById("resetViewBtn").onclick = () => {
    rotationX = 0
    rotationY = 0
  }

  // Close modal
  const closeBtn = modal.querySelector(".modal-close")
  closeBtn.onclick = () => {
    modal.classList.remove("active")
    cancelAnimationFrame(animationId)
  }
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      cancelAnimationFrame(animationId)
    }
  }
}

function shadeColor(color, percent) {
  const num = Number.parseInt(color.replace("#", ""), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  )
}

function updateUserDisplay() {
  // Calculate level
  state.user.level = Math.floor(state.user.xp / 500) + 1

  // Update displays
  document.getElementById("userLevel").textContent = state.user.level
  document.getElementById("userXP").textContent = state.user.xp
  document.getElementById("streakDays").textContent = state.user.streak
  document.getElementById("achievementCount").textContent = state.user.achievements
  document.getElementById("experimentCount").textContent = state.user.experiments
  document.getElementById("accuracyRate").textContent =
    state.user.completedQuests.length > 0
      ? Math.round((state.user.completedQuests.length / quests.length) * 100) + "%"
      : "0%"
  document.getElementById("lessonsCompleted").textContent = state.user.lessons
}

function saveUserData() {
  localStorage.setItem("chemQuestUser", JSON.stringify(state.user))
}

function loadUserData() {
  const saved = localStorage.getItem("chemQuestUser")
  if (saved) {
    state.user = JSON.parse(saved)
  }
}


  const numStars = 150; // нүктелер саны

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // кездейсоқ өлшем мен позиция
    const size = Math.random() * 3 + 1; // 1-4px
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const duration = Math.random() * 10 + 5; // 5-15s

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${left}px`;
    star.style.top = `${top}px`;
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
  }