let horasTrabalhadas = 160;
let valorHoraAula = 6.40;
let totalDsconto;
let percetualDesconto = 6;
let salarioBruto;
let salarioLiquido;

salarioBruto = horasTrabalhadas*valorHoraAula;

totalDsconto = (percetualDesconto / 100) * salarioBruto;

salarioLiquido = salarioBruto - totalDsconto;

console.log('salario bruto: ' + salarioBruto);
console.log('salario liquido é: ' + salarioLiquido);
console.log('valor descontado: ' + totalDsconto)