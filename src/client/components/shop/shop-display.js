const template = document.createElement("template")
template.innerHTML = `
    <h1>Shop</h1>
    <p>ok ok ok ok ok ok ok ok ok ok</p>
`

class ShopDisplay extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("shop-display", ShopDisplay)