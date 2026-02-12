import './trivia-play'

const template = document.createElement("template")
template.innerHTML = `
<section id="game" class="game-card">
    <p>Trivia Settings</p>
    <div>
        <div class="match-record-card">
            <p>Last Game Score</p>
            <p>In front:</p>
            <p>Behind:</p>
        </div>

        <div class="trivia-settings">
            <p>Categories</p>
            <div id="settings-grid">
            </div>
        </div>

        <div class="popular-record-card">
            <p>Popular Selection</p>
        </div>
    </div>
    <button>Start</button>
    <p>Ratings</p>
</section>
`

class TriviaSettings extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("trivia-settings", TriviaSettings)