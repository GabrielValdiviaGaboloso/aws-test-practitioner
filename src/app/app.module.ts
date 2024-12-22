// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo para el navegador
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router'; // Importa RouterModule si tienes rutas
import { AppComponent } from './app.component'; // Importa tu componente principal

@NgModule({
  declarations: [], // Declara el componente principal
  imports: [
    BrowserModule,  // Asegúrate de importar BrowserModule
    CommonModule,   // Importa CommonModule para usar *ngFor y *ngIf
    RouterModule    // Si tienes rutas, importa RouterModule
  ],
  bootstrap: [] // Establece el componente principal
})
export class AppModule {}
