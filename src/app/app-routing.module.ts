import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfValidationComponent } from './pages/cpf-validation/cpf-validation.component';

const routes: Routes = [
  { path: '', title: 'CPF Validation', component: CpfValidationComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
