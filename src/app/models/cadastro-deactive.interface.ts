import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface CadastroDeactivate {
  formulario;
  prosseguir: boolean;

  onSubmit(): void;
}
