import { useRef } from 'react'
import { v4 } from 'uuid'

import './Slider.sass'

interface SliderProps {
  pics: string[] | undefined;
}

const Slider: React.FC<SliderProps> = ({ pics }: SliderProps) => {
  const ref = useRef(null);

  return (
    <div className="product-card-slider">
      <div className="product-card-slider__slider">
        {pics?.map((pic) => (
          <div className="product-card-slider__item">
            <img
              key={v4()}
              className="product-card-slider__image"
              src={pic}
              onMouseOver={() => console.log(3)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;