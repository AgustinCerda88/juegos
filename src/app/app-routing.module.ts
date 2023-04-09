import { GuacamoleComponent } from '../app/guacamole/guacamole.component';
import { ExchangesComponent } from '../app/exchanges/exchanges.component';
import { HomeComponent } from '../app/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesoroComponent } from '../app/tesoro/tesoro.component';
import { MemoComponent } from './memo/memo.component';

const routes: Routes = [
  {  path: '',
  component: HomeComponent
},
{
  path: 'TiposdeCambio',
  component: ExchangesComponent,
},
{
  path: 'BusquedadelTesoro',
  component: TesoroComponent,
},
{
  path: 'WhackaMole',
  component: GuacamoleComponent,
},
{
  path: 'Memo',
  component: MemoComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
