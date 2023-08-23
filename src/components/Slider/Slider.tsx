import { useRef } from 'react'

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
            src="https://uploads.adrenaline.com.br/chamadas/amd-ryzen-5-7600x1.jpg"
            onMouseOver={() => console.log()}
          />
        ))}
      </div>
      <div className="product_card-slider__main">
        <img className="product_card-slider__main-img" ref={ref} />
        <img src="" />
      </div>
    </div>
  );
};

export default Slider;