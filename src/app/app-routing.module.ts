import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    path:'', // aca va la direccion del index
    component: ItemsComponent // Componente que quiero cargar en dicha direccion (en este caso el index)
  },
  {
    path:'New_Item',
    component:AddItemComponent // Quiero que cargue este componente en la direccion add
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
