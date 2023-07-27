import { data } from "../data";

interface Props {
  answerChoice: string;
  correctAnswer: string;
  onNextQuestion: () => void;
  currentQuestion: number;
  onShowResult: () => void;
}

const ShowAnswer = (props: Props) => {
  return (
    <>
      <div className="font-semibold text-gray-300 w-2/3">
        {props.answerChoice === props.correctAnswer ? (
          <p>
            <span className="text-green-400">{props.answerChoice}</span> is
            correct
          </p>
        ) : (
          <p>
            <span className="text-red-400">{props.answerChoice}</span> is wrong,
            the correct answer is{" "}
            <span className="text-green-400">{props.correctAnswer}</span>
          </p>
        )}
      </div>

      {props.currentQuestion !== data.length - 1 ? (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 py-1 text-sm rounded"
          onClick={props.onNextQuestion}
        >
          Next
        </button>
      ) : (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 py-2 text-sm rounded"
          onClick={() => props.onShowResult()}
        >
          Show Result
        </button>
      )}
    </>
  );
};

export default ShowAnswer;
