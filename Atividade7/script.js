// 0 = Pedra, 1 = Papel, 2 = Tesoura
const opcoes = ["Pedra", "Papel", "Tesoura"];

let vitorias = 0;
let empates = 0;
let derrotas = 0;

function escolhaDoComputador() {
    return Math.floor(Math.random() * 3);
}
function determinarVencedor(usuario, computador) {
    if (usuario === computador) {
        return "empate";
    }
    if (
        (usuario === 0 && computador === 2) || 
        (usuario === 2 && computador === 1) || 
        (usuario === 1 && computador === 0)    
    ) {
        return "usuario";
    }
    return "computador";
}

function jogar(escolhaUsuario) {
    const escolhaPC = escolhaDoComputador();
    const vencedor = determinarVencedor(escolhaUsuario, escolhaPC);
    let mensagem = "";

    if (vencedor === "empate") {
        mensagem = "Empate!";
        empates++;
    } else if (vencedor === "usuario") {
        mensagem = "Você ganhou! " + descricaoDaJogada(escolhaUsuario, escolhaPC);
        vitorias++;
    } else {
        mensagem = "O computador ganhou! " + descricaoDaJogada(escolhaPC, escolhaUsuario);
        derrotas++;
    }

    document.getElementById("escolhaUsuario").innerHTML = "Você escolheu: <strong>" + opcoes[escolhaUsuario] + "</strong>";
    document.getElementById("escolhaComputador").innerHTML = "Computador escolheu: <strong>" + opcoes[escolhaPC] + "</strong>";
    document.getElementById("resultado").innerHTML = mensagem;

    
    document.getElementById("vitorias").innerHTML = vitorias;
    document.getElementById("empates").innerHTML = empates;
    document.getElementById("derrotas").innerHTML = derrotas;
}

function descricaoDaJogada(vencedor, perdedor) {
    if (vencedor === 0 && perdedor === 2) {
        return "Pedra quebra tesoura.";
    }
    if (vencedor === 2 && perdedor === 1) {
        return "Tesoura corta papel.";
    }
    return "Papel cobre a pedra.";
}
