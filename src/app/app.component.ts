import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QUESTIONS } from './questions';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange } from '@angular/material/checkbox';  // Importar MatCheckboxChange

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = QUESTIONS;
  showResults = false;
  results: string[] = [];

  public onSelectOption(questionIndex: number, option: string, event: MatCheckboxChange): void {
    const isChecked = event.checked;  // Obtener el estado del checkbox desde MatCheckboxChange
    const maxAnswers = this.questions[questionIndex].maxAnswers;

    const selectedAnswers = this.questions[questionIndex].selectedAnswers;

    if (isChecked) {
      if (selectedAnswers.length < maxAnswers) {
        selectedAnswers.push(option);
      } else {
        event.source.checked = false; // Desmarcar el checkbox si se alcanza el límite
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
