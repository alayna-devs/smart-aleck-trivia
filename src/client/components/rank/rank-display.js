const template = document.createElement("template")
template.innerHTML = `
<div class="rank-container">
    <h1>Ranks</h1>
</div>
    
`

class RankDisplay extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("rank-display", RankDisplay)