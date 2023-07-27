export interface IResult {
  correctAnswers: number;
  wrongAnswers: number;
}

export const data = [
  {
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Segments",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Segments",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "A standard text-based format for representing structured data based on JavaScript object syntax.",
    choices: ["XML", "JSON", "JQuery", "HTML"],
    answer: "JSON",
  },

  {
    question: "Who is the inventor of JavaScript?",
    choices: [
      "Brendan Eich",
      "James Gosling",
      "Guido van Rossum",
      "Tim-Berners Lee",
    ],
    answer: "Brendan Eich",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: [
      "In the <body> section",
      "In the <head> section",
      "At the end of the document",
      "You can place it anywhere",
    ],
    answer: "In the <head> section",
  },
  {
    question: "Correct way to declare variable in JavasScript.",
    choices: ["var name", "let name", "const name", "All of them"],
    answer: "All of them",
  },
  {
    question: "ReactJS is a...",
    choices: [
      "JavaScript Library",
      "HTML Framework",
      "JavaScript runtime environment",
      "JavaScript file extension",
    ],
    answer: "JavaScript Library",
  },
  {
    question: "Who was the first computer programmer?",
    choices: [
      "Tim-Berners Lee",
      "Ada Lovelace",
      "James Gosling",
      "Charles Babbage",
    ],
    answer: "Ada Lovelace",
  },
];
