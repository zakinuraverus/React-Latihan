import { useState } from "react";

export default function Slider() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const [imageNow, setImageNow] = useState(0);

  function nextImage() {
    setImageNow(imageNow === images.length - 1 ? 0 : imageNow + 1);
  }

  function prevImage() {
    setImageNow(imageNow === 0 ? images.length - 1 : imageNow - 1);
  }

  return (
    <div>
      <h1>Caraousel</h1>
      <div className="slider">
        <div className="left-arrow" onClick={prevImage}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextImage}>
          ➡
        </div>
        {images.map(
          (image, index) =>
            imageNow === index && (
              <div key={image}>
                <img src={image} />
              </div>
            )
        )}
      </div>
    </div>
  );
}
