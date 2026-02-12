const template = document.createElement("template")
template.innerHTML = `
    <wa-icon class="user-icon" name="user"></wa-icon>
`

class UserProfile extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("user-profile", UserProfile)