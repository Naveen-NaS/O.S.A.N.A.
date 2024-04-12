import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "./carousel.css";

export default function SliderComponent() {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      var splide = new Splide(".splide", {
        type: "loop",
        drag: "free",
        // snap: true,
        perPage: 5,
        perMove: 1,
        splide__pagination__page: false,
      });

      splide.mount();

      return () => splide.destroy(); // Cleanup when component unmounts
    }
  }, []);

  return (
    <div ref={splideRef} className="splide container mt-14">
      <div className="splide__track custom-scrollbar2  overflow-x-scroll">
        <ul className="splide__list ">
          <li className="splide__slide text-white text-center">HOTS</li>
          <li className="splide__slide text-white text-center">Top100</li>
          <li className="splide__slide text-white text-center">Local News</li>
          <li className="splide__slide text-white text-center">Sports News</li>
          <li className="splide__slide text-white text-center">
            Business News
          </li>
          <li className="splide__slide text-white text-center">
            Entertainment News
          </li>
          {/* Add more slides as needed */}
        </ul>
      </div>
    </div>
  );
}
