
// Función para generar la jugada de la máquina
function jugadaMaquina() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * 3);
    return opciones[randomIndex];
}

// Función para determinar el ganador
function determinarGanador(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        return 'Empate';
    } else if (
        (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaMaquina === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaMaquina === 'papel')
    ) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

// Función principal del juego
function jugarCachipun() {
    const veces = parseInt(document.getElementById('veces').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    for (let i = 0; i < veces; i++) {
        const jugadaUsuario = prompt('Elige tu jugada: piedra, papel o tijera').toLowerCase();
        const jugadaPC = jugadaMaquina();
        const resultado = determinarGanador(jugadaUsuario, jugadaPC);

        resultadoDiv.innerHTML += `<p>Partida ${i + 1}: Tú elegiste ${jugadaUsuario}, la máquina eligió ${jugadaPC}. Resultado: ${resultado}</p>`;
    }
}
