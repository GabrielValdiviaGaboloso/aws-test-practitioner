import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Asegúrate de que este archivo existe
import { AppComponent } from './app/app.component'; // Asegúrate de que tu componente principal esté correctamente importado

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Manejo de errores
