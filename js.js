const views = {
    home: `
        <header class="container text-center mb-4">
            <section class="glass">
                <h1 id="typing-spa" style="color: #00ff88; font-weight: bold; min-height: 1.2em;"></h1>
                <p class="lead text-white-50">Estudiante de Programación & Lógica</p>
                <figure>
                    <img src="WhatsApp Image 2026-03-17 at 10.53.22 PM.jpeg" class="rounded-circle mt-3 profile-img" width="160">
                </figure>
                <p class="mt-4 px-md-5 text-white">Apasionado por crear soluciones digitales modernas y eficientes.</p>
            </section>
        </header>

        <section class="container mb-5">
            <article class="glass">
                <h2 class="text-center mb-5" style="color: #00ff88;">Habilidades Técnicas</h2>
                <div class="row text-white">
                    ${[
                        {n:'Java', p:'80%'}, {n:'HTML & CSS', p:'95%'},
                        {n:'Python', p:'70%'}, {n:'SQL', p:'75%'}
                    ].map(h => `
                        <div class="col-md-6 mb-4">
                            <p class="mb-2 fw-bold">${h.n} - ${h.p}</p>
                            <div class="progress"><div class="progress-bar" style="--target-width: ${h.p}"></div></div>
                        </div>
                    `).join('')}
                </div>
            </article>
        </section>

        <section class="container mb-5">
            <h2 class="text-center mb-4" style="color: #00ff88;">Mis Proyectos</h2>
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <div class="glass h-100 d-flex flex-column">
                        <img src="CITASSSSSSSSSS.JPG" class="project-img-fixed mb-3">
                        <h4 class="text-white">Citas Médicas</h4>
                        <a href="#citas" class="btn btn-info mt-auto fw-bold" style="background: #00d1ff; border: none;">VER PROYECTO</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="glass h-100 d-flex flex-column">
                        <img src="cafeylobros.JPG" class="project-img-fixed mb-3">
                        <h4 class="text-white">Café & Libros</h4>
                        <a href="#cafeylibros" class="btn btn-info mt-auto fw-bold" style="background: #00d1ff; border: none;">VER PROYECTO</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="glass h-100 d-flex flex-column">
                        <img src="sasssa.JPG" class="project-img-fixed mb-3">
                        <h4 class="text-white">FocusApp</h4>
                        <a href="#focusapp" class="btn btn-info mt-auto fw-bold" style="background: #00d1ff; border: none;">VER PROYECTO</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <article class="glass">
                <h2 class="text-center mb-4" style="color: #00ff88;">Reseñas</h2>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-3 border border-secondary rounded bg-dark text-white">
                            <h5>Juan Pérez</h5>
                            <p class="small text-info mb-1">Proyecto: Desarrollo Web Café</p>
                            <p class="mb-2">⭐⭐⭐⭐⭐</p>
                            <p class="fst-italic">"Excelente trabajo, el diseño superó mis expectativas."</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border border-secondary rounded bg-dark text-white">
                            <h5>María García</h5>
                            <p class="small text-info mb-1">Proyecto: App de Lógica</p>
                            <p class="mb-2">⭐⭐⭐⭐⭐</p>
                            <p class="fst-italic">"Muy dedicado y el código es muy limpio. Recomendado."</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <section class="container mb-5 pb-5">
            <article class="glass">
                <h2 class="text-center mb-4" style="color: #00ff88;">Contáctame</h2>
                <form class="row g-3 text-white">
                    <div class="col-md-6">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="Escribe tu nombre">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Tipo de proyecto</label>
                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="Ej: Página Web, App, Lógica">
                    </div>
                    <div class="col-md-12">
                        <label class="form-label">Descripción del proyecto</label>
                        <textarea class="form-control bg-dark text-white border-secondary" rows="4" placeholder="Cuéntame de qué trata tu idea..."></textarea>
                    </div>
                    <div class="col-12 text-center mt-4">
                        <button type="button" class="btn btn-info px-5 fw-bold" style="background: #00d1ff; border: none;">ENVIAR PROPUESTA</button>
                    </div>
                </form>
                <div class="mt-4 text-center">
                    <p class="mb-0 text-white-50">brayanstivenperezcarrion@gmail.com</p>
                </div>
            </article>
            <p class="text-center text-white-50 mt-4">© 2026 CodeStiven</p>
        </section>
    `,

    citas: `<section class="container glass mt-4 text-center">
        <h1 style="color: #d9534f;">CITAS MÉDICAS</h1>
        <img src="CITASSSSSSSSSS.JPG" class="img-fluid rounded my-4 shadow" style="max-height: 400px;">
        <p class="lead text-white">Gestión hospitalaria eficiente.</p>
        <a href="#home" class="btn btn-outline-light">Regresar</a>
    </section>`,

    cafeylibros: `<section class="container glass mt-4 text-center">
        <h1 style="color: #d7ccc8;">CAFÉ & LIBROS</h1>
        <img src="cafeylobros.JPG" class="img-fluid rounded my-4 shadow" style="max-height: 400px;">
        <p class="lead text-white">Espacio acogedor para lectores.</p>
        <a href="#home" class="btn btn-outline-light">Regresar</a>
    </section>`,

    focusapp: `<section class="container glass mt-4 text-center">
        <h1 class="text-primary">FOCUS APP</h1>
        <img src="sasssa.JPG" class="img-fluid rounded my-4 shadow" style="max-height: 400px;">
        <p class="lead text-white">Optimización de tiempo.</p>
        <a href="#home" class="btn btn-outline-light">Regresar</a>
    </section>`
};

// --- EL RESTO DEL CÓDIGO (router, typing, matrix) SE MANTIENE IGUAL ---
function router() {
    const hash = window.location.hash || '#home';
    const root = document.getElementById('root');
    const route = hash.replace('#', '');
    root.innerHTML = views[route] || views.home;
    if (route === 'home' || hash === '#home') startTyping();
    window.scrollTo(0, 0);
}

function startTyping() {
    const text = "Hola, soy Brayan Stiven Perez Carrion";
    let i = 0;
    const target = document.getElementById("typing-spa");
    if (!target) return;
    target.innerHTML = "";
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize(); window.addEventListener("resize", resize);
const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
let drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const char = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 35);
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
