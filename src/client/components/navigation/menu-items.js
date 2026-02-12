const template = document.createElement("template")
template.innerHTML = `
<!-- change to settings icon-->
<button class="menu-btn">
    <wa-icon class="menu-img" name="bars"></wa-icon>
</button>

<ul class="side-bar">
    <li>light/dark settings</li>
    <li>donate</li>
    <li>profile settings</li>
</ul>
`

class MenuItems extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }

    connectedCallback() {
        const button = this.querySelector('.menu-btn')
        const sidebar = this.querySelector('.side-bar')
        const body = document.getElementById('app')

        if (button && sidebar) {
            button.addEventListener('click', () => {
                sidebar.classList.add('visible')
                body.addEventListener('click', handleOutsideClick)
            });

            const handleOutsideClick = (event) => {

                if (sidebar.contains(event.target) || button.contains(event.target)) {
                    return
                }

                sidebar.classList.remove('visible')
                body.removeEventListener('click', handleOutsideClick)
            }

        };
    };

    disconnectedCallback() {
        console.log('disconnected')
    }
}

customElements.define("menu-items", MenuItems)