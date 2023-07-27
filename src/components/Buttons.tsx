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
        props.answerChoice === props.choice
          ? props.correctChoice !== props.choice
            ? "bg-red-400 border-red-700"
            : "bg-green-400 border-green-700"
          : props.answerChoice &&
            props.correctChoice === props.choice &&
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
