export const QUESTIONS = [
    {
      question: '¿Qué servicio de AWS se utiliza para almacenamiento de objetos?',
      options: ['S3', 'EC2', 'Lambda', 'RDS'],
      correctAnswer: ['S3'],
      selectedAnswers: [] as string[],
      maxAnswers: 1 // Solo se puede seleccionar una respuesta
    },
    {
      question: 'Selecciona los servicios de computación de AWS:',
      options: ['EC2', 'Lambda', 'S3', 'RDS'],
      correctAnswer: ['EC2', 'Lambda'],
      selectedAnswers: [] as string[],
      maxAnswers: 2 // Se pueden seleccionar hasta dos respuestas
    },
    {
      question: '¿Qué servicio permite analizar datos masivos?',
      options: ['Redshift', 'S3', 'DynamoDB', 'Glue', 'Athena'],
      correctAnswer: ['Redshift', 'Glue'],
      selectedAnswers: [] as string[],
      maxAnswers: 2 // Se pueden seleccionar hasta dos respuestas
    }
  ];
  