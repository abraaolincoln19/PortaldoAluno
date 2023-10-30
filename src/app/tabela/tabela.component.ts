import { Component } from '@angular/core';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  alunos: Aluno[] = [];
  emEdicao: boolean = false;
  alunoEditando: Aluno | null = null;

  constructor(private alunoService: AlunoService) {
    this.alunos = alunoService.obterAlunos();
  }

  calcularMedia(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }

  verificarCondicao(media: number): string {
    return media >= 6 ? 'Aprovado' : 'Reprovado';
  }

  editarAluno(aluno: Aluno) {
    this.emEdicao = true;
    this.alunoEditando = aluno;
  }

  salvarEdicao() {
    this.emEdicao = false;
    this.alunoEditando = null;
  }

  cancelarEdicao() {
    this.emEdicao = false;
    this.alunoEditando = null;
  }

  excluirAluno(aluno: Aluno) {
    const index = this.alunos.findIndex(a => a === aluno);
    if (index !== -1) {
      this.alunos.splice(index, 1);
    }
  }
}
