import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RestaurarLoginComponent } from './pages/restaurar-login/restaurar-login.component';
import { BrigadaComponent } from './pages/brigada/brigada.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { DonantesComponent } from './pages/donantes/donantes.component';
import { BeneficiariosComponent } from './pages/beneficiarios/beneficiarios.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'restaurar-contraseña', component: RestaurarLoginComponent },
  { path: 'brigada', component: BrigadaComponent},
  { path: 'donaciones', component: DonacionesComponent},
  { path: 'donantes', component: DonantesComponent},
  { path: 'beneficiarios', component: BeneficiariosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
