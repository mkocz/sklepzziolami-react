import React, { useState, useEffect } from 'react';
import data from './data';
import products from './data';
import './Slider.css';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const length = products.length;

    useEffect(() => {
        let clear = setTimeout(() => {
            nextSlide();
        }, 5000);
        return () => clearTimeout(clear);
    }, [index])

    const nextSlide = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    }

    return (
        <>
            <div className="slider">
                {data.map((slide, productIndex) => {
                    const { id, image, name, description_short } = slide;
                    let position = "next";
        
                    if (productIndex === index) {
                        position = "active1";
                    }
        
                    if (productIndex === index + 1 || (index === products.length - 1 && productIndex === 0)) {
                        position = "active2";
                    }

                    if (productIndex === index + 2) {
                        position = "active3";
                    }

                    if ((index === products.length - 2 && productIndex === 0) || (index === products.length - 1 && productIndex === 1)) {
                        position = "active3";
                    }

                    if (productIndex === index - 1 || (index === 0 && productIndex === products.length - 1)) {
                        position = "last";
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt="" />
                            <h4>{name}</h4>
                            <p className="slider__description">{description_short}</p>
                        </article>
                    );
                })}
            </div>
        </>
    )
}

export default Slider
