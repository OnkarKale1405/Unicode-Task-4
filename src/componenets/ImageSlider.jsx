import { useState } from "react";


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat'
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1 ;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles}
                onClick={goToPrevious}>⮜</div>
            <div style={slideStyles}></div>
            <div style={rightArrowStyles}
                onClick={goToNext}>⮞</div>
        </div>
    )
}

export default ImageSlider;
