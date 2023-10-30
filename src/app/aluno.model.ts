export class Aluno {
    nome: string;
    nota1: number;
    nota2: number;
  
    constructor(nome: string, nota1: number, nota2: number) {
      this.nome = nome;
      this.nota1 = nota1;
      this.nota2 = nota2;
    }
  
    calcularMedia(): number {
      return (this.nota1 + this.nota2) / 2;
    }
  
    verificarAprovacao(): string {
      const media = this.calcularMedia();
      return media >= 6 ? 'Aprovado' : 'Reprovado';
    }
  }
  
  
  