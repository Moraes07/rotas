import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.usuario === 'admin' && this.senha === '123') {
      this.router.navigate(['/home', this.usuario]);
    } else {
      this.mensagem = 'Usuário ou senha inválido';
    }
  }
}
