let esquimageF = [
    './esqueleto/pixil-frame-1.png',
    './esqueleto/pixil-frame-2.png',
    './esqueleto/pixil-frame-3.png',
    './esqueleto/pixil-frame-4.png',
    './esqueleto/pixil-frame-5.png',
    './esqueleto/pixil-frame-6.png',
    './esqueleto/pixil-frame-7.png',
    './esqueleto/pixil-frame-8.png',
    './esqueleto/pixil-frame-9.png',
    './esqueleto/pixil-frame-10.png',
]
let esquimageM = [
    './esqueleto/pixil-frame-2.png',
    './esqueleto/pixil-frame-4.png',
    './esqueleto/pixil-frame-6.png',
    './esqueleto/pixil-frame-7.png',
    './esqueleto/pixil-frame-8.png',
    './esqueleto/pixil-frame-9.png',
    './esqueleto/pixil-frame-10.png',
]
let esquimageD = [
    './esqueleto/pixil-frame-6.png',
    './esqueleto/pixil-frame-7.png',
    './esqueleto/pixil-frame-8.png',
    './esqueleto/pixil-frame-9.png',
    './esqueleto/pixil-frame-10.png',
]
let actual = 0

document.getElementById("todo").setAttribute("style", "display:none !important")
function aparecerComF() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    comF()
}
function comF() {
    const palabrasComF = ['huevo', 'arroz', 'tomate', 'pizza', 'arepa', 'jugo', 'limon', 'carne', 'galleta'];
    let palabraSecreta = palabrasComF[Math.floor(Math.random() * palabrasComF.length)];
    let letrasCorrectas = new Set();
    let intentos = 10;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageF[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageF.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasComF[Math.floor(Math.random() * palabrasComF.length)];
        letrasCorrectas.clear();
        intentos = 10;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aparecerComM() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    comM()
}
function comM() {
    const palabrasComM = ['sancocho', 'caldo', 'bagre', 'frijoles', 'lentejas', 'berenjena', 'empanada', 'hamburguesa'];
    let palabraSecreta = palabrasComM[Math.floor(Math.random() * palabrasComM.length)];
    let letrasCorrectas = new Set();
    let intentos = 7;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageM[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageM.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasComM[Math.floor(Math.random() * palabrasComM.length)];
        letrasCorrectas.clear();
        intentos = 7;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aparecerComD() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    comD()
}
function comD() {
    const palabrasComD = ['sandwich', 'croissant', 'barbabcoa', 'aborrajado', 'sushi', 'baguette', 'mariscos', 'langostino'];
    let palabraSecreta = palabrasComD[Math.floor(Math.random() * palabrasComD.length)];
    let letrasCorrectas = new Set();
    let intentos = 5;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageD[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageD.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'comida.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasComD[Math.floor(Math.random() * palabrasComD.length)];
        letrasCorrectas.clear();
        intentos = 5;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}

function aparecerAleF() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aleF()
}
function aparecerAleM() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aleM()
}
function aparecerAleD() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aleD()
}
function aleF() {
    const palabrasAleF = ['aro', 'chile', 'reloj', 'olla', 'tijeras', 'verde', 'bota', 'bigote', 'moneda', 'sombrero'];
    let palabraSecreta = palabrasAleF[Math.floor(Math.random() * palabrasAleF.length)];
    let letrasCorrectas = new Set();
    let intentos = 10;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageF[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageF.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAleF[Math.floor(Math.random() * palabrasAleF.length)];
        letrasCorrectas.clear();
        intentos = 10;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aleM() {
    const palabrasAleM = ['nitrogeno', 'pantalon', 'guitarra', 'indigo', 'frontera', 'jupiter', 'ventilador', 'ahorcado'];
    let palabraSecreta = palabrasAleM[Math.floor(Math.random() * palabrasAleM.length)];
    let letrasCorrectas = new Set();
    let intentos = 7;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageM[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageM.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAleM[Math.floor(Math.random() * palabrasAleM.length)];
        letrasCorrectas.clear();
        intentos = 7;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aleD() {
    const palabrasAleD = ['torniquete', 'lenceria', 'william', 'marihuana', 'amsterdam', 'computadora', 'esternocleidomastoideo', 'frambuesa'];
    let palabraSecreta = palabrasAleD[Math.floor(Math.random() * palabrasAleD.length)];
    let letrasCorrectas = new Set();
    let intentos = 5;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageD[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageD.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'aleatorio.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAleD[Math.floor(Math.random() * palabrasAleD.length)];
        letrasCorrectas.clear();
        intentos = 5;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}

function aparecerAniF() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aniF()
}
function aparecerAniM() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aniM()
}
function aparecerAniD() {
    document.getElementById("alertaPri").setAttribute("style", "display:none !important")
    document.getElementById("tittlecom").setAttribute("style", "display:none !important")
    document.getElementById("todo").setAttribute("style", "display:flex !important")
    aniD()
}
function aniF() {
    const palabrasAniF = ['perro', 'zorro', 'pez', 'loro', 'ballena', 'conejo', 'cerdo', 'vaca', 'pollo'];
    let palabraSecreta = palabrasAniF[Math.floor(Math.random() * palabrasAniF.length)];
    let letrasCorrectas = new Set();
    let intentos = 10;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageF[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageF.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAniF[Math.floor(Math.random() * palabrasAniF.length)];
        letrasCorrectas.clear();
        intentos = 10;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aniM() {
    const palabrasAniM = ['murcielago', 'avestruz', 'cucaracha', 'saltamontes', 'tarantula', 'salamandra', 'cacatua'];
    let palabraSecreta = palabrasAniM[Math.floor(Math.random() * palabrasAniM.length)];
    let letrasCorrectas = new Set();
    let intentos = 7;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageM[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageM.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAniM[Math.floor(Math.random() * palabrasAniM.length)];
        letrasCorrectas.clear();
        intentos = 7;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
function aniD() {
    const palabrasAniD = ['ajolote', 'rinoceronte', 'hiena', 'pajaro carpintero', 'babuino', 'calamar', 'sanguijuela', 'cachalote'];
    let palabraSecreta = palabrasAniD[Math.floor(Math.random() * palabrasAniD.length)];
    let letrasCorrectas = new Set();
    let intentos = 5;
    document.getElementById("inten").textContent = `Intentos: ${intentos}`

    const wordContainer = document.getElementById('word');
    const keyboard = document.getElementById('keyboard');

    function mostrarPalabraSecreta() {
        const palabraMostrada = palabraSecreta.split('').map(letra => letrasCorrectas.has(letra) ? letra : '_').join(' ');
        wordContainer.textContent = palabraMostrada;
    }

    function mostrarTeclado() {
        for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
            const button = document.createElement('button');
            button.textContent = letra;
            button.addEventListener('click', () => {
                if (palabraSecreta.includes(letra)) {
                    letrasCorrectas.add(letra);
                } else {
                    intentos -= 1;
                    document.getElementById("inten").textContent = `Intentos: ${intentos}`
                    let contenedor = document.getElementById("esquelex");
                    let imagenAnterior = document.getElementById("esqui");
                    if (imagenAnterior) {
                        contenedor.removeChild(imagenAnterior);
                    }
                    let esqui = document.createElement("img");
                    esqui.src = esquimageD[actual];
                    esqui.id = "esqui";
                    actual = (actual + 1) % esquimageD.length;
                    contenedor.appendChild(esqui);
                }
                mostrarPalabraSecreta();
                button.disabled = true;
                button.style.color = "grey";
                verificarJuego();
            });
            keyboard.appendChild(button);
        }
    }

    function verificarJuego() {
        if (intentos == 0) {
            document.getElementById("alerta").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje").textContent = `¡PERDISTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta").appendChild(volver)
        } else if (!wordContainer.textContent.includes('_')) {
            document.getElementById("alerta1").setAttribute("style", "display:flex !important")
            document.getElementById("mensaje1").textContent = `¡GANASTE!`
            let reinten = document.createElement("button")
            reinten.textContent = "reintentar"
            reinten.id = "reiten"
            reinten.addEventListener("click", () => {
                window.location.href = 'animal.html'
            })
            document.getElementById("alerta1").appendChild(reinten)
            let volver = document.createElement("button")
            volver.textContent = "volver"
            volver.id = "volver"
            volver.addEventListener("click", () => {
                window.location.href = 'categorias.html'
            })
            document.getElementById("alerta1").appendChild(volver)
        }
    }

    function reiniciarJuego() {

        palabraSecreta = palabrasAniD[Math.floor(Math.random() * palabrasAniD.length)];
        letrasCorrectas.clear();
        intentos = 5;
        if (document.getElementById("esqui")) {
            document.getElementById("esquelex").removeChild(document.getElementById("esqui"))
            actual = 0
        }

        document.getElementById("inten").textContent = `Intentos: ${intentos}`
        mostrarPalabraSecreta();

        keyboard.innerHTML = '';
        mostrarTeclado();
    }
    mostrarPalabraSecreta()
    mostrarTeclado()
    verificarJuego()
    reiniciarJuego()
}
