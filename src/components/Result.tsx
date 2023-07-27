import { IResult } from "../data";

interface Props {
  result: IResult;
  onHideResult: () => void;
}

const Result = (props: Props) => {
  let total = props.result.correctAnswers + props.result.wrongAnswers;

  return (
    <div>
      <p className="text-2xl mb-2 text-center">Score:</p>
      <hr className="opacity-20" />
      <div className="mt-2 flex flex-col justify-center items-center text-sm">
        {props.result.wrongAnswers === 0 && (
          <p className="text-green-400">Perfection!</p>
        )}
        {props.result.correctAnswers === 0 && (
          <p>
            You got <span className="text-red-400">zero</span>, dont worry you
            can try again!
          </p>
        )}
        <p className="text-8xl mb-4">
          <span className="text-blue-400">{props.result.correctAnswers}</span>/
          <span className="text-red-400">{total}</span>
        </p>
        <p>
          {" "}
          <span className="text-blue-400">Correct Answers:</span>{" "}
          {props.result.correctAnswers}{" "}
        </p>
        <p className="mb-4">
          <span className="text-red-400">Wrong Answers:</span>{" "}
          {props.result.wrongAnswers}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => props.onHideResult()}
        >
          {props.result.correctAnswers === total ? "Again" : "Retry"}
        </button>
      </div>
    </div>
  );
};

export default Result;
