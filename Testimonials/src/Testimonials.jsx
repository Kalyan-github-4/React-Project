import { useState } from "react";
import "./Testimonials.css";
import testimonials from "./data/data";

import TestimonialCard from "./TestimonialCard";
import TestimonialDots from "./TestamonialDots";
import TestimonialNav from "./TestimonialNav";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length)
  }
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  return(
    <div className="testimonials">
      <TestimonialCard testimonial={testimonials[currentIndex]}/>
      <TestimonialDots 
        count={testimonials.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <TestimonialNav
        onPrev={handlePrevClick}
        onNext={handleNextClick}
      />
    </div>
  )
};

export default Testimonials;
