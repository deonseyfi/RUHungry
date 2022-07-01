import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { isBrowser } from 'react-device-detect';
import '../App/App.css';
/**
 * PhotoCarousel props.
 */
interface CarouselProps{
    /**
     * Photos in the carousel.
     */
    photos: string[];
}
/**
 * Displays a carousel of the selected restaurant's photos.
 *
 * @param {CarouselProps} props Carousel props.
 * @returns {React.ReactElement<CarouselProps>} PhotoCarousel component with props.
 */
const PhotoCarousel = (props: CarouselProps): React.ReactElement<CarouselProps> => (
    <Carousel
        autoPlay={false}
        animation='slide'
        navButtonsAlwaysVisible={isBrowser}
        navButtonsAlwaysInvisible={!isBrowser}
        indicators
        indicatorContainerProps={{ style: { color: 'white' } }}
        activeIndicatorIconButtonProps={{ style: { color: 'orange' } }}
        navButtonsProps={{ style: { backgroundColor: '#272727', margin: 'unset' } }}
        swipe
    >
        {props.photos.map((item) => (
            <img className='card-details-photos' src={item} alt='restaurant' key={item} />
        ))}
    </Carousel>
);
export default PhotoCarousel;
