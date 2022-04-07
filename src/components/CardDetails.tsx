import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';
// import { TransitionProps } from '@material-ui/core/transitions';
import DirectionsIcon from '@material-ui/icons/Directions';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import theme from '../App/theme';
import '../App/App.css';
// import { ReactComponent as YelpLogo } from '../App/yelpLogo.svg';
import YelpLogo from '../App/yelpLogo.svg';
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
     * The full address of the restaurant.
     */
    address: string;
    /**
     * The phone number of the restaurant.
     */
    phoneNumber: string;
    /**
     * Image URL(s) of the restaurant (String now until carousel implemented).
     */
    photos: string;
    /**
     * Main Yelp URL of the restaurant.
     */
     yelpUrl: string;
}
/**
 * Card details component providing detailed information about the selected restaurant.
 *
 * @param {CardDetailsProps} props Card detail props.
 * @returns {React.ReactElement} Card Details component.
 */
const CardDetails = (props: CardDetailsProps): React.ReactElement<CardDetailsProps> => (
    <ThemeProvider theme={theme}>
        <Dialog
            className='Card-Details'
            open={props.open}
            onClose={props.onClose}
            maxWidth='md'
        >
            <div className='card-details-header'>
                <div className='yelp-logo'>
                    <IconButton onClick={() => window.open(props.yelpUrl, '_blank')}>
                        <img src={YelpLogo} alt='Yelp Logo' />
                    </IconButton>
                    <div className='yelp-logo-text'> Read Reviews </div>
                </div>
                <DialogTitle
                    style={{ alignSelf: 'center', paddingTop: '0px', paddingBottom: '10px' }}
                >{props.restaurantTitle}
                </DialogTitle>
            </div>
            <DialogContent>
                <img className='card-details-photos' src={props.photos} alt='restaurant' />
                <DialogContentText component='span'>
                    <li className='Card-list'>
                        <DirectionsIcon fontSize='large' />
                        {props.address}
                    </li>
                </DialogContentText>
                <div className='card-details-buttons'>
                    <Button variant='outlined' color='inherit' href={props.mapLink} target='_blank' size='small'>
                        Get Directions
                    </Button>
                    <Button
                        variant='outlined'
                        color='inherit'
                        href={`tel:${props.phoneNumber}`}
                        size='small'
                        startIcon={<PhoneIcon />}
                    >
                        {props.phoneNumber}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    </ThemeProvider>
);
export default CardDetails;
