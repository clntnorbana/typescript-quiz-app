import { useEffect, useState } from "react";
import { IResult, data } from "../data";
import ShowAnswer from "./ShowAnswer";
import Buttons from "./Buttons";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answerChoice, setAnswerChoice] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  //   check answer
  useEffect(() => {
    const handleAnswer = () => {
      if (answerChoice) {
        setDisabledButton(true);
        setShowAnswer(true);

        if (answerChoice === data[currentQuestion].answer) {
          setResult((prev) => ({
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }));
        } else {
          setResult((prev) => ({
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }));
        }
      }
    };

    handleAnswer();
  }, [answerChoice]);

  // reset UI in current question
  const resetCurrentQuestionUI = () => {
    setAnswerChoice("");
    setDisabledButton(false);
    setShowAnswer(false);
  };

  //   Proceed to next question
  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    resetCurrentQuestionUI();
  };

  // reset quiz
  const resetQuiz = () => {
    setShowResult(false);
    resetCurrentQuestionUI();
    setCurrentQuestion(0);
    setResult((result) => ({
      ...result,
      correctAnswers: 0,
      wrongAnswers: 0,
    }));
  };

  return (
    <div className="lg:w-2/5 w-full p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-slate-800 text-white">
      {showResult ? (
        <Result result={result} onHideResult={resetQuiz} />
      ) : (
        <>
          {/* HEADER */}
          <p className="font-semibold mb-2">
            Question {currentQuestion + 1} /{" "}
            <span className="text-xs">{data.length}</span>
          </p>
          <hr className="opacity-20" />

          {/* QUESTION */}
          <p className="mt-2 md:text-2xl text-gray-300">
            {data[currentQuestion].question}
          </p>

          {/* ANSWER CHOICES BUTTON */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            {data[currentQuestion].choices.map((choice) => {
              return (
                <Buttons
                  key={choice}
                  choice={choice}
                  answerChoice={answerChoice}
                  onAnswerChoice={setAnswerChoice}
                  onDisable={disabledButton}
                  correctChoice={data[currentQuestion].answer}
                />
              );
            })}
          </div>

          {/* SHOW ANSWER */}
          {showAnswer && (
            <>
              <hr className="opacity-20 mt-5" />
              <div className="flex justify-between items-center mt-5">
                <ShowAnswer
                  answerChoice={answerChoice}
                  correctAnswer={data[currentQuestion].answer}
                  onNextQuestion={handleNextQuestion}
                  currentQuestion={currentQuestion}
                  onShowResult={() => setShowResult(true)}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
