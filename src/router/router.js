const routes = {
    404: "/src/client/pages/404.html",
    "/": "/src/client/pages/home.html",
    "/home": "/src/client/pages/home.html",
    "/trivia": "/src/client/pages/game.html",
    "/shop": "/src/client/pages/shop.html",
};

export const handleLocation = async () => {
    const path = location.pathname;
    const hash = location.hash;
    const routePath = routes[path] || routes[404];

    try {
        const res = await fetch(routePath);
        const html = await res.text();
        const outlet = document.getElementById("routing-pages");

        if (outlet) {
            outlet.innerHTML = html;

            // Wait for custom elements to load and then scroll to hash
            requestAnimationFrame(() => {
                if (hash) {
                    const target = outlet.querySelector(hash);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    } catch (err) {
        console.error("Router error:", err);
    }
};

export const route = (evt) => {
    evt?.preventDefault();
    const href = evt?.currentTarget?.getAttribute("href") || evt || "/";
    history.pushState({}, "", href);
    handleLocation();
};

window.route = route;
window.onpopstate = handleLocation;
