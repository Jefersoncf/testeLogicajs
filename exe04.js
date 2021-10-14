let tempo = 5; // horas de viagem
let velocidade = 110;//velocidade media por hora
let distancia; // kms percorridos
let litroPorKm = 12; // litro consumido por km

distancia = tempo * velocidade;
let litrosgastos = distancia / litroPorKm;

console.log('Quilômetros percorridos: ' + distancia);
console.log('Litros de combustivel gastos na viagem: ' + litrosgastos.toFixed(2));

