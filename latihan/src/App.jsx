import "./App.css";
import Question from "./components/Question";
import Slider from "./components/slider";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="upper">
        <Slider />
        <FaqSection>
          {questions.map((quest) => (
            <Question key={quest.id} question={quest} />
          ))}
        </FaqSection>
      </div>
      <div className="Hero" id="hero">
        <Hero />
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

export default App;
