import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cpf-form',
  templateUrl: './cpf-form.component.html',
  styleUrls: ['./cpf-form.component.scss'],
})
export class CpfFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  cpfForm = this.formBuilder.group({
    cpf: ['', [Validators.required]],
  });

  onSubmit() {
    console.log(this.cpfForm.value.cpf);
  }
}
