const template = document.createElement("template")
template.innerHTML = `
<img class="brand-img" src="/src/client/public/assets/images/Smart Aleck.svg" alt="brand logo image"/>
`

class BrandLogo extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("brand-logo", BrandLogo)