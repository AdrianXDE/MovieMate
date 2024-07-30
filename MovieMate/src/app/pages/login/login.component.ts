import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login successful', response);
          // Establecer mensaje de éxito
          this.successMessage = '¡Has iniciado sesión correctamente! Bienvenido a MovieMate.';
          // Redirigir a la vista principal después de un inicio de sesión exitoso
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000); // Espera 1 segundo para mostrar el mensaje
        },
        error => {
          console.error('Login error', error);
          // Manejar errores aquí
          if (error.status === 401) {
            this.errorMessage = 'Correo o contraseña incorrectos';
          } else if (error.status === 400) {
            this.errorMessage = 'Solicitud incorrecta. Por favor, revisa los datos ingresados.';
          } else if (error.status === 500) {
            this.errorMessage = 'Error del servidor. Por favor, inténtelo de nuevo más tarde.';
          } else {
            this.errorMessage = 'Error desconocido al intentar iniciar sesión. Por favor, inténtelo de nuevo más tarde.';
          }
        }
      );
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToHelp(): void {
    // Lógica para navegar a la página de ayuda
    // Ejemplo: console.log('Ir a la página de ayuda');
  }
}
