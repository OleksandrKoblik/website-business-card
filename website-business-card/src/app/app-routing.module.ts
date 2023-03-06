import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./pages/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./pages/detail-info/detail-info.module').then(m => m.DetailInfoModule)
      },
      {
        path: 'shopping-cart',
        loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
      },
      {
        path: 'terms-of-use',
        loadChildren: () => import('./pages/terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule)
      },
    ],
    component: MainLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
