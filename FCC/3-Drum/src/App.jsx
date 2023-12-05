import Pad from "./component/Pad";

function App() {
  return (
    <div
      className="container mx-auto h-screen flex items-center justify-center"
      id="drum-machine"
    >
      <div
        className="bg-Bluelight_Drum w-4/6 h-3/5 grid grid-cols-12 gap-5 p-5 grid-rows-4 border rounded-md border-BlueBG_Drum"
        id="display"
      >
        <Pad />
      </div>
    </div>
  );
}

export default App;
