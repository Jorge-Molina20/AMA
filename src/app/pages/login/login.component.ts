import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: LoginService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      // Utiliza el servicio de autenticación para verificar las credenciales
      const isAuthenticated = this.authService.login(username, password);

      if (isAuthenticated) {
        // Si las credenciales son válidas, redirige a la ruta deseada
        this.router.navigate(['/brigada']);
      } else {
        // Si las credenciales son inválidas, puedes mostrar un mensaje o realizar otra acción
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    }
  }

  onClickLogin() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrecta!",
    });
  }
}
