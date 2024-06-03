// Função que calcula o saldo de vitórias e determina o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível do jogador com base na quantidade de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibe a mensagem com o saldo de vitórias e o nível do jogador
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função
let vitorias = 45;
let derrotas = 30;
calcularRank(vitorias, derrotas);
