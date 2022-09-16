class PessoaEstudante {
  private _matricula: number;
  private _nome: string;
  private _notas_provas: Array<number>;
  private _notas_trabalhos: Array<number>;

  constructor(
    matricula: number,
    nome: string,
    notas_provas: Array<number>,
    notas_trabalhos: Array<number>
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas_provas = notas_provas;
    this._notas_trabalhos = notas_trabalhos;
    console.log(
      `
    Matricula: ${this._matricula}
    Nome: ${this._nome}
    Notas das provas: ${this._notas_provas}
    Notas dos trabalhos: ${this._notas_trabalhos}
    `
    )
  }

  get nome() {
    return this._nome;
  }
  
  get sum() {
    const totalProvas = this._notas_provas
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const totalTrabalhos = this._notas_trabalhos
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return totalProvas + totalTrabalhos;
  }

  get media() {
    const result = this.sum / (this._notas_provas.length + this._notas_trabalhos.length);
    console.log(this._notas_provas.length + this._notas_trabalhos.length)
    return Math.round(result);
  }

}


const estudante1 = new PessoaEstudante(1, 'Guilherme', [8, 4, 7, 8], [3, 7]);
const estudante2 = new PessoaEstudante(2, 'Marina', [9, 9, 7, 8], [8, 7]);

console.log(`Soma das notas de ${estudante1.nome}: ${estudante1.sum}`);
console.log(`Média das notas de ${estudante1.nome}: ${estudante1.media}`);
console.log(`Soma das notas de ${estudante2.nome}: ${estudante2.sum}`);
console.log(`Média das notas de ${estudante2.nome}: ${estudante2.media}`);
