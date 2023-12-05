import { useEffect } from "react";
import data from "../data/audio.json";
import { useState } from "react";
import Settings from "./Settings";

const Pad = () => {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <>
      {data.map((pad) => (
        <div
          className="bg-Bluelightlight_Drum col-span-4 row-span-1 hover:bg-BlueBG_Drum border rounded-md flex flex-col items-center justify-center drum-pad"
          id={pad.id}
          key={pad.keyboard}
          onClick={() => {
            playSound(pad.keyboard);
          }}
        >
          <p>{pad.keyboard}</p>
          {/* <p>{pad.name}</p> */}

          <audio src={pad.audio} id={pad.keyboard} className="clip"></audio>
        </div>
      ))}

      <div className="bg-Bluelightlight_Drum col-start-1 col-end-13 row-start-4 row-end-4 rounded-md">
        <Settings activeKey={activeKey} />
      </div>
    </>
  );
};

export default Pad;
