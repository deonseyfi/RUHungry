import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DirectionsIcon from '@material-ui/icons/Directions';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import PhotoCarousel from './PhotoCarousel';
import '../App/App.css';
import YelpLogo from '../assets/yelpLogo.svg';
/**
 * Card Details props.
 */
interface CardDetailsProps {
    /**
     * If true, the Dialog is open.
     */
    open: boolean;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose: (event: object, reason: string) => void;
    /**
     * Title of the selected restaurant.
     */
    restaurantTitle: string;
    /**
     * Map URL of the restaurant.
     */
    mapLink: string;
    /**
     * The phone number of the restaurant.
     */
    phoneNumber: string;
    /**
     * Image URL(s) of the restaurant.
     */
    photos: string[];
    /**
     * Main Yelp URL of the restaurant.
     */
    yelpUrl: string;
    /**
     * Rating image of the restaurant.
     */
    ratingImage: string;
    /**
     * Review count of the restaurant.
     */
    reviewCount: number;
}
/**
 * Card details component providing detailed information about the selected restaurant.
 *
 * @param {CardDetailsProps} props Card detail props.
 * @returns {React.ReactElement} Card Details component.
 */
const CardDetails = (props: CardDetailsProps): React.ReactElement<CardDetailsProps> => (
    <Dialog
        className='Card-Details'
        open={props.open}
        onClose={props.onClose}
        maxWidth='md'
    >
        <div className='card-details-header'>
            <DialogTitle
                style={{ alignSelf: 'center', paddingBottom: '10px' }}
            >{props.restaurantTitle}
            </DialogTitle>
        </div>
        <DialogContent>
            <PhotoCarousel photos={props.photos} />
            <div className='card-details-buttons'>
                <Button
                    variant='outlined'
                    color='inherit'
                    href={props.mapLink}
                    target='_blank'
                    size='small'
                    startIcon={<DirectionsIcon />}
                >
                    Directions
                </Button>
                <Button
                    variant='outlined'
                    color='inherit'
                    href={`tel:${props.phoneNumber}`}
                    size='small'
                    startIcon={<PhoneIcon />}
                    style={{ marginLeft: '16px' }}
                >
                    {props.phoneNumber}
                </Button>
            </div>
        </DialogContent>
        <div className='yelp-contents'>
            <div className='yelp-ratings'>
                <IconButton style={{ paddingBottom: '8px' }} onClick={() => window.open(props.yelpUrl, '_blank')}>
                    <img src={props.ratingImage} alt='rating' />
                </IconButton>
                <div className='yelp-review-count'>{props.reviewCount}</div>
            </div>
            <div className='yelp-logo'>
                <IconButton onClick={() => window.open(props.yelpUrl, '_blank')}>
                    <img src={YelpLogo} alt='Yelp Logo' />
                </IconButton>
            </div>
        </div>
        <div className='yelp-logo-text'> Read Reviews </div>
    </Dialog>
);
export default CardDetails;
