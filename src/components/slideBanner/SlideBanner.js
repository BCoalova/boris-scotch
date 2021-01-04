import React, {useState} from 'react'
//Bootstrap
import Carousel from 'react-bootstrap/Carousel'
//SCSS
import './slideBanner.scss'

const SlideBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel controls={false} animation="false" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../img/slide-banner-amd.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Performance to Rule Your Game</h2>
                    <p>Introducing the AMD Radeon™ RX 6000 Series graphics cards, featuring the breakthrough AMD RDNA™ 2 architecture, engineered to deliver ultra-high performance, ultra-high resolution, visually stunning gaming for all. We’re powering the next generation of gaming.</p>
                    <img src="../img/amd-radeon-tr.png" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../img/slide-banner-nvidia.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>GEFORCE RTX 30 SERIES</h2>
                    <h3>THE ULTIMATE PLAY</h3>
                    <p>GeForce RTX™ 30 Series GPUs deliver the ultimate performance for gamers and creators. They’re powered by Ampere—NVIDIA’s 2nd gen RTX architecture—with new RT Cores, Tensor Cores, and streaming multiprocessors for the most realistic ray-traced graphics and cutting-edge AI features.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideBanner
