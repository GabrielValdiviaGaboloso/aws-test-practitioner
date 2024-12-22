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

    this.questions.forEach(question => {
      const isCorrect = question.selectedAnswers.sort().toString() === question.correctAnswer.sort().toString();
      if (isCorrect) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    const totalQuestions = this.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;

    this.openResultModal(score, correctAnswers, incorrectAnswers);
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
