const template = document.createElement("template")
template.innerHTML = `
<section id="home" >
    <div class="desc-container">
        <div class="text-container">
            <p class="open-title">Welcome!</p>
            <p class="desc-text">Choose from many categories. class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow(</p>
        </div>

        <div class="carousel">
            <div class="group">
                <div id="1" class="card">1</div>
                <div id="2" class="card">2</div>
                <div id="3" class="card">3</div>
                <div id="4" class="card">4</div>
            </div>

            <div aria-hidden class="group">
                <div id="1" class="card">1</div>
                <div id="2" class="card">2</div>
                <div id="3" class="card">3</div>
                <div id="4" class="card">4</div>
            </div>
        </div>
    </div>

    <button class="to-game">
    Confirm
    </button>
</section>
`

class HeroMain extends HTMLElement {
    constructor() {
        super()
        this.append(template.content.cloneNode(true))
    }
}

customElements.define("hero-main", HeroMain)