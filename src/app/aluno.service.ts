import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = []; // Array para armazenar os alunos

  adicionarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }

  obterAlunos() {
    return this.alunos;
  }

  excluirAluno(index: number) {
    this.alunos.splice(index, 1);
  }
}
