const template = document.createElement("template")
template.innerHTML = `
<div class="about-container">
    <h1 id="#about">About Me</h1>
</div>
`

class AboutApp extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("about-app", AboutApp)