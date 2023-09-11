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
            src="https://yandex.ru/images/search?cbir_id=4481145%2FBWxPAUjSatwXL6STWBFBEA1340&cbir_page=similar&from=tabbar&img_url=https%3A%2F%2Fcdn.img-gorod.ru%2Fnomenclature%2F27%2F527%2F2752722.jpg&lr=41&pos=0&rpt=imageview&source-serpid=7V4LlsGBn36qUw-cPcYC6A&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F4481145%2FBWxPAUjSatwXL6STWBFBEA1340%2Forig"
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