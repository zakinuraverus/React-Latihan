import ButtonCategory from "./ButtonCategory";
import { heroList } from "./Herolist";
import { useState } from "react";

export default function Hero() {
  const [classHero, setClassHero] = useState(heroList);

  const categoryItem = [...new Set(heroList.map((hero) => hero.class))];

  const filterCategory = (cat) => {
    const newCategory = heroList.filter((hero) => hero.class === cat);
    setClassHero(newCategory);
  };

  return (
    <>
      <ButtonCategory
        category={categoryItem}
        filterCategory={filterCategory}
        setCategory={setClassHero}
      />
      <div className="Foto-Hero">
        {classHero.map((hero) => (
          <div key={hero}>
            <img src={hero.img} />
            <p>
              {hero.Name} - {hero.class}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
