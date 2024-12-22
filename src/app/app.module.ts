import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalComponent, ResultDialog } from './modal/modal.component'; // Importa los componentes standalone
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserModule, // Importa BrowserModule para que Angular funcione en el navegador
    MatButtonModule, // Importa MatButtonModule
    MatCheckboxModule, // Importa MatCheckboxModule
    MatDialogModule, // Importa MatDialogModule
    ModalComponent, // Importa directamente el componente standalone
    ResultDialog // También importa el ResultDialog
  ]
})
export class AppModule {}
