interface Props {
  choice: string;
  answerChoice: string;
  onAnswerChoice: React.Dispatch<React.SetStateAction<string>>;
  onDisable: boolean;
  correctChoice: string;
}

const Buttons = (props: Props) => {
  return (
    <button
      className={`${
        props.answerChoice === props.choice // style the button that we clicked, wether it holds the correct answer or not
          ? props.correctChoice !== props.choice // now check if that button holds the correct answer, if yes, set bg = green, if not set bg = red
            ? "bg-red-400 border-red-700"
            : "bg-green-400 border-green-700"
          : props.answerChoice && // making sure that we click a button first before we add a style
            props.correctChoice === props.choice && // set the background of the button that holds the correct answer to green
            "bg-green-400 border-green-700"
      } bg-blue-500 enabled:hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 enabled:hover:border-blue-500 rounded`}
      onClick={() => props.onAnswerChoice(props.choice)}
      disabled={props.onDisable}
    >
      {props.choice}
    </button>
  );
};

export default Buttons;
