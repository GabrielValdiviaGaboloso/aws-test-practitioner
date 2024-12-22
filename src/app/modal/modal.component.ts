import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule,MatDialogRef  } from '@angular/material/dialog';  // Asegúrate de importar MAT_DIALOG_DATA
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QUESTIONS } from '../questions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule,MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ModalComponent {
  questions = QUESTIONS;
  showResults = false;
  results: string[] = [];

  constructor(public dialog: MatDialog) {}

  onSelectOption(index: number, option: string, event: any) {
    const question = this.questions[index];
    if (event.checked) {
      question.selectedAnswers.push(option);
    } else {
      const index = question.selectedAnswers.indexOf(option);
      if (index > -1) {
        question.selectedAnswers.splice(index, 1);
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

@Component({
  selector: 'result-dialog',
  template: `
    <h2>Resultados del Test</h2>

    <div class="dialog-content">
      <p>Tu puntaje es: {{ data.score }}%</p>
      <p>Respuestas Correctas: {{ data.correctAnswers }}</p>
      <p>Respuestas Incorrectas: {{ data.incorrectAnswers }}</p>
    </div>

    <div class="dialog-actions">
      <button (click)="closeDialog()">Cerrar</button>
    </div>
  `,
  styles: [
    `
      h2 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 16px;
      }

      .dialog-content {
        padding: 16px;
        font-size: 18px;
        line-height: 1.5;
      }

      .dialog-actions {
        padding: 16px;
        text-align: center;
      }

      button {
        background-color: #6200ea;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 16px;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #3700b3;
      }
    `
  ]
})
export class ResultDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,        // Para recibir los datos del modal
    private dialogRef: MatDialogRef<ResultDialog>       // Para poder cerrar el modal
  ) {}

  closeDialog() {
    this.dialogRef.close();  // Cierra el modal
  }}