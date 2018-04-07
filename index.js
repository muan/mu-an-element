class MuAn extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', this.setEmoji)
  }
  static get emoji() {
    return ['😬', '🍵', '🤷🏻', '🧤', '🐟', '🏋🏻', '🎮', '👩🏻‍💻', '💅🏻', '📮']
  }

  connectedCallback() {
    this.setEmoji()
  }

  setEmoji() {
    this.innerHTML = MuAn.emoji[Math.floor(MuAn.emoji.length * Math.random())]
  }
}

window.customElements.define('mu-an', MuAn)
