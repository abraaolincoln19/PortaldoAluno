import { Component } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  alunos: Aluno[] = [];
  nome: string = '';
  nota1: number = 0;
  nota2: number = 0;

  constructor(private alunoService: AlunoService) {}

  adicionarAluno() {
    const novoAluno = new Aluno(this.nome, this.nota1, this.nota2);
    this.alunoService.adicionarAluno(novoAluno);
    
    this.nome = '';
    this.nota1 = 0;
    this.nota2 = 0;
  }
}
