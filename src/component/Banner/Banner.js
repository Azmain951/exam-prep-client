import React, { useState } from 'react';
import './Banner.css'
import banner1 from '../../img/book1.jpg';
import banner2 from '../../img/book2.jpg';
import banner3 from '../../img/book3.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    }
    return (
        <Carousel className='p-3' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={banner2} className="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h4>“Don't let what you cannot do interfere with what you can do.”</h4>
                    <p>― John Wooden</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner1} className="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h4>“Successful and unsuccessful people do not vary greatly in their abilities. They vary in their
                        desires to reach their potential.”</h4>
                    <p>― John Maxwell</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner3} className="d-block w-100" alt="..." />
                <Carousel.Caption>
                    <h4>“Education's purpose is to replace an empty mind with an open one.”</h4>
                    <p>― Malcolm Forbes</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;