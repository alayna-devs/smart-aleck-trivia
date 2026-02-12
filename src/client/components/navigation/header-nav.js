import './menu-items'
import './brand-logo'
import './user-profile'
import './user-points'

console.log('header-nav module loaded')

const template = document.createElement("template")
template.innerHTML = `
<nav>
    <div id="navbar" class="header-container">
    <div class="menu-logo-container">
        <div class="menu-container">
            <menu-items></menu-items>
        </div>
        <brand-logo></brand-logo>
    </div>
    
    <div class="nav-container">
        <div class="nav">
            <a href="/home" onclick="route(event)"><wa-icon class="home-icon"  name="house"></wa-icon></a>
            <a href="/trivia" onclick="route(event)"><wa-icon name="gamepad"></wa-icon></a>
            <a href="/trivia#ranks" onclick="route(event)"><wa-icon name="crown"></wa-icon></a>
            <a href="/shop" onclick="route(event)"><wa-icon name="store"></wa-icon></a>
        </div>
    </div>

    <div class="profile-points-container">
    <user-profile></user-profile>
    <user-points></user-points>
    </div>
    </div>
</nav>
`

class HeaderNav extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))

        // store bound handlers so removeEventListener works
        this._onScroll = this._onScroll.bind(this)
        this._onWheel = this._onWheel.bind(this)
        this._onTouch = this._onTouch.bind(this)
        this._onKey = this._onKey.bind(this)

        this._lastScrollTop = 0
        this._threshold = 6 // small threshold for wheel deltas
        this._navbar = null
    }
}


customElements.define("header-nav", HeaderNav)

