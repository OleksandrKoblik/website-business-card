import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { DetailInfoModule } from "./pages/detail-info/detail-info.module";
import { HomeModule } from "./pages/home/home.module";
import { ShoppingCartModule } from "./pages/shopping-cart/shopping-cart.module";
import { TermsOfUseModule } from "./pages/terms-of-use/terms-of-use.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailInfoModule,
    HomeModule,
    ShoppingCartModule,
    TermsOfUseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
