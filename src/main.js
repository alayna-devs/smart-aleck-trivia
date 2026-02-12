//api
import { dataTest } from './client/services/trivia-api.js';

//components
import './client/components/navigation/header-nav.js'
import './client/components/hero/hero-main.js'
import './client/components/about/about-app.js'
import './client/components/game/trivia-settings.js'
import './client/components/rank/rank-display.js'
import './client/components/shop/shop-display.js'

//router
import './router/router.js'

//styling
import './client/styles/variables.css'
import './client/styles/main.css'
import './client/styles/navigation.css'
import './client/styles/hero.css'
import './client/styles/game.css'
import './client/styles/rank.css'
import './client/styles/about.css'
import './client/styles/shop.css'


// hide-on-scroll-navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("#navbar");
    let lastScrollTop = 0;
    console.log("Script is running.");
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log("Scroll event fired!");
        console.log(window.scrollY)
        if (scrollTop > lastScrollTop) {
            // scrolling down — hide navbar
            navbar.classList.add("active");
        } else {
            // scrolling up — show navbar
            navbar.classList.remove("active");
        }

        lastScrollTop = scrollTop;
    });
});

