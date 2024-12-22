// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo para el navegador
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [], // Declara el componente principal
  imports: [
    BrowserModule,  // Asegúrate de importar BrowserModule
    CommonModule,   // Importa CommonModule para usar *ngFor y *ngIf
    MatButtonModule,  // Importa MatButtonModule
    MatCheckboxModule,  // Importa MatCheckboxModule
  ],
  bootstrap: [] // Establece el componente principal
})
export class AppModule {}
