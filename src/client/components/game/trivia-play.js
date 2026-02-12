const template = document.createElement("template")
template.innerHTML = `
`

class TriviaPlay extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("trivia-play", TriviaPlay)