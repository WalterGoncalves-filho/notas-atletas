class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil';
    } else if (this.idade >= 12 && this.idade <= 13) {
      return 'Juvenil';
    } else if (this.idade >= 14 && this.idade <= 15) {
      return 'Intermediário';
    } else if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto';
    } else {
      return 'Sem categoria';
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    if (!this.notas || this.notas.length < 3) {
      return 0;
    }
    let notasOrdenadas = [...this.notas].sort((a, b) => a - b)
    notasOrdenadas.pop()
    notasOrdenadas.shift()
    let soma = 0
    notasOrdenadas.forEach(nota => {
      soma += nota
    })
    return soma / notasOrdenadas.length;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }

}

// Declara o atleta

let nome = "Cesar Abascal";
let idade = 30;
let peso = 80;
let altura = 1.70;
let notas = [10, 9.34, 8.42, 10, 7.88];
const atleta = new Atleta(nome, idade, peso, altura, notas);


console.log();
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC().toFixed(2).replace('.', ','));
console.log("Média válida: " + atleta.obtemMediaValida().toFixed(8).replace('.', ','));
