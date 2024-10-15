import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  nome: string = '';
  senha: string = '';
  confirmacaoSenha: string = '';
  mensagem: string = '';

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.mensagem = 'Salvo com sucesso!';
      console.log('Cadastro:', this.nome, this.senha);
      form.reset();
    }
  }
}
