const template = document.createElement("template")
template.innerHTML = `
    <button class="user-points-button">
    <wa-icon class="dollar-icon" name="dollar-sign"></wa-icon>
    10
    </button>
`

class UserPoints extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("user-points", UserPoints)