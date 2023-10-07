/* eslint-disable react/prop-types */
import { heroList } from "./Herolist";

const ButtonCategory = ({ category, filterCategory, setCategory }) => {
  return (
    <div className="ButtonHero">
      <button onClick={() => setCategory(heroList)}>All</button>
      {category.map((hero) => (
        <button key={hero} onClick={() => filterCategory(hero)}>
          {hero}
        </button>
      ))}
    </div>
  );
};

export default ButtonCategory;
