import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen px-2 bg-slate-900 font-mono">
      <h1 className="lg:text-7xl text-5xl text-white">Quiz Time</h1>
      <Quiz />
      <span className="text-gray-500 text-xs absolute bottom-5">
        Developed by Clinton Orbaña
      </span>
    </div>
  );
};

export default App;
