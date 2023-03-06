import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent
  }
]

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
