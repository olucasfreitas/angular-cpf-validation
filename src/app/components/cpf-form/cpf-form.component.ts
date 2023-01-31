import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cpf-form',
  templateUrl: './cpf-form.component.html',
  styleUrls: ['./cpf-form.component.scss'],
})
export class CpfFormComponent {
  @Output() cpfEmitter = new EventEmitter<string>();
  @Input() clientNotFound = true;

  constructor(private formBuilder: FormBuilder) {}

  cpfForm = this.formBuilder.group({
    cpf: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.cpfForm.value.cpf) {
      this.cpfEmitter.emit(this.cpfForm.value.cpf);
    }
  }
}
