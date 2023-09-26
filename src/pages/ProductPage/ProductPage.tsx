import React, { useEffect, useRef } from 'react';
import Slider from '../../components/Slider/Slider'; 
import Header from '../../parts/Header/Header';
import Footer from '../../parts/Footer/Footer';

import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';

import { Chart, ChartItem, registerables } from 'chart.js'; 

import './ProductPage.sass';

import { PRODUCTS } from '../../mock/Products';

const ProductPage: React.FC = () => {
  const { id } = useParams()
  const product = PRODUCTS.find(el => el._id === id)

  useEffect(() => {
    Chart.register(...registerables)
    const canvas = document.getElementById("line-chart") as HTMLCanvasElement

    const lineChart = new Chart(canvas as ChartItem, {
      type: "line",
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
      }
    });
  }, [])

  return (
    <div className="product-page-wrapper">
      <Header />

      <div className="product-page">
        <div className="product-page__images">
          <Slider key={v4()} pics={product?.images} />
        </div>

        <div className="product-page-description">
          <div className="product-page-description_about"> 
            <h2> О товаре </h2>
            {product?.about} 
          </div>
          <div className="product-page-description_title"> 
            <h2> {product?.title} </h2> 
          </div>
          <div className="product-page-description_author">{product?.author} </div>
          <div className="product-page-description_age-limit"> {product?.ageLimit} </div>

          <div className="product-page-description_about__full"> {product?.about} </div>
        </div>

        <div className="product-page-buy">
          <div className="product-page-buy_button"> Купить </div>
          <div className="product-page-buy-analysis">
            <div className="product-page-buy_chart">
              <canvas id="line-chart" width="600" height="400"></canvas>
            </div>
            <div className="product-page-buy_price"> {product?.price} </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default ProductPage;