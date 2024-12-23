import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QUESTIONS } from './questions';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialog } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  questions = QUESTIONS;
  showResults = false;
  results: string[] = [];
  timeRemaining: number = 90 * 60;  // 1 hora y 30 minutos en segundos (5400 segundos)
  timerInterval: any;
  timerStarted: boolean = false;

  // Inyectar MatDialog en el constructor
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);  // Detener el cronómetro cuando el componente se destruya
    }
  }

  startTimer() {
    if (this.timerStarted) return;  // Evitar que se inicie más de una vez
    this.timerStarted = true;
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.submitTest();  // Enviar el test cuando el tiempo se acabe
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timerInterval);  // Detener el cronómetro
    this.timeRemaining = 90 * 60;  // Resetear a 1 hora y 30 minutos
    this.timerStarted = false;  // Permitir que se inicie de nuevo
  }

  public onSelectOption(questionIndex: number, option: string, event: MatCheckboxChange): void {
    const isChecked = event.checked;
    const maxAnswers = this.questions[questionIndex].maxAnswers;
    const selectedAnswers = this.questions[questionIndex].selectedAnswers;

    if (isChecked) {
      if (selectedAnswers.length < maxAnswers) {
        selectedAnswers.push(option);
      } else {
        event.source.checked = false;
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
    const incorrectQuestions: number[] = [];

    this.questions.forEach((question, index) => {
      const isCorrect = question.selectedAnswers.sort().toString() === question.correctAnswer.sort().toString();
      question.isAnsweredIncorrectly = !isCorrect;

      if (isCorrect) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
        incorrectQuestions.push(index + 1);
      }
    });

    if (incorrectQuestions.length > 0) {
      this.results = [`Preguntas incorrectas: ${incorrectQuestions.join(', ')}`];
    } else {
      this.results = ['Todas las respuestas son correctas'];
    }

    const totalQuestions = this.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;

    this.openResultModal(score, correctAnswers, incorrectAnswers);
    this.showResults = true;
  }

  getOptionLetter(index: number): string {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    return letters[index] || '';
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

  getMinutes() {
    return Math.floor(this.timeRemaining / 60);  // Convertir los segundos a minutos
  }

  getSeconds() {
    return this.timeRemaining % 60;  // Obtener los segundos restantes
  }
}