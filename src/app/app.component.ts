import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QUESTIONS } from './questions';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange } from '@angular/material/checkbox';  // Importar MatCheckboxChange
import { MatDialog } from '@angular/material/dialog'; // Importar MatDialog
import { ResultDialog } from './modal/modal.component';  // Importar ResultDialog

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
  

  // Inyectar MatDialog en el constructor
  constructor(public dialog: MatDialog) {}

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

  submitTest() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const incorrectQuestions: number[] = [];  // Lista de preguntas incorrectas
    
    this.questions.forEach((question, index) => {
      // Compara las respuestas seleccionadas con la respuesta correcta
      const isCorrect = question.selectedAnswers.sort().toString() === question.correctAnswer.sort().toString();
      question.isAnsweredIncorrectly = !isCorrect;  // Marcar si la respuesta fue incorrecta
    
      if (isCorrect) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
        incorrectQuestions.push(index + 1);  // Agregar el número de la pregunta incorrecta
      }
    });
  
    // Almacenar las preguntas incorrectas
    if (incorrectQuestions.length > 0) {
      this.results = [`Preguntas incorrectas: ${incorrectQuestions.join(', ')}`];
    } else {
      this.results = ['Todas las respuestas son correctas'];
    }
  
    const totalQuestions = this.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
  
    // Llamar al modal para mostrar resultados
    this.openResultModal(score, correctAnswers, incorrectAnswers);
    this.showResults = true;  // Mostrar resultados después de enviar el test
  }
  
  

  openResultModal(score: number, correctAnswers: number, incorrectAnswers: number): void {
    this.dialog.open(ResultDialog, {
      data: {
        score,
        correctAnswers,
        incorrectAnswers
      }
    });
  }
}
