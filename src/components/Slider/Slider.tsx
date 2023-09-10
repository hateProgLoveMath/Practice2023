import { useRef } from 'react'
import { v4 } from 'uuid'

interface SliderProps {
  pics: string[];
}
  
const Slider: React.FC<SliderProps> = ({ pics }: SliderProps) => {
  const ref = useRef(null);

  return (
    <div className="product_card-slider">
      <div className="product_card-slider__slider">
        {pics.map((pic) => (
          <img
            key={v4()}
            className="product_card-slider__item"
            src="/workspaces/Practice2023/src/assets/images/TSPSO18.jpg"
            onMouseOver={() => console.log()}
          />
        ))}
      </div>
      <div className="product_card-slider__main">
        <img src="" />
      </div>
    </div>
  );
};

export default Slider;