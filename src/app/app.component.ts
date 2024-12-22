import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Si estás usando rutas
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { QUESTIONS } from './questions';

@Component({
  selector: 'app-root',
  standalone: true, // Esto lo marca como standalone
  imports: [RouterOutlet, CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = QUESTIONS;
  showResults = false;
  results: string[] = [];

  public onSelectOption(questionIndex: number, option: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const maxAnswers = this.questions[questionIndex].maxAnswers;
    
    // Verificar cuántas respuestas están seleccionadas
    const selectedAnswers = this.questions[questionIndex].selectedAnswers;
  
    if (isChecked) {
      if (selectedAnswers.length < maxAnswers) {
        selectedAnswers.push(option);
      } else {
        // Si ya se ha alcanzado el límite de respuestas permitidas, no hacer nada
        (event.target as HTMLInputElement).checked = false;
      }
    } else {
      const index = selectedAnswers.indexOf(option);
      if (index > -1) {
        selectedAnswers.splice(index, 1);
      }
    }
  }
  

  public submitTest(): void {
    this.results = [];
    this.questions.forEach((question, index) => {
      const selectedAnswers = question.selectedAnswers || [];
      
      const isCorrect = 
        selectedAnswers.length === question.correctAnswer.length &&
        question.correctAnswer.every(answer => selectedAnswers.includes(answer)) &&
        selectedAnswers.every(answer => question.correctAnswer.includes(answer));

      this.results.push(`Pregunta ${index + 1}: ${isCorrect ? 'Correcta' : 'Incorrecta'}`);
    });
    this.showResults = true;
  }
}
