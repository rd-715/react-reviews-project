import { useState } from "react";
import reviews from "./data";
import "./index.css"; // Import CSS styles

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex + 1 >= reviews.length) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length);
    setIndex(randomNumber);
  };

  return (
    <main className="review-card">
      <div className="image-container">
        <img src={image} alt={name} className="review-image" />
      </div>
      <h2 className="review-name">{name}</h2>
      <h4 className="review-job">{job}</h4>
      <p className="review-text">{text}</p>
      <div className="button-container">
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
      <button onClick={handleRandom} className="btn surprise-btn">
        Surprise Me
      </button>
    </main>
  );
}
