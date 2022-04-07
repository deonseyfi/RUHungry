import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CardDetails from '../components/CardDetails';
import { Restaurant, RestaurantDetails } from './types';

// TODO: Food cards will go here.

/**
 * Takes in url string and splits it into individual categories.
 *
 * @param {string} list Single string of the pulled category url.
 * @param {number} index Index of the split list array.
 * @param catList
 * @returns {string} Category name at specific index.
 */
const getCategory = (catList: string): string => {
    const categorySize = catList.includes('&') ? 2 : 1;
    const cat1 =
        categorySize > 1
            ? catList.substring(catList.indexOf('=') + 1, catList.indexOf('&'))
            : catList.substring(catList.indexOf('=') + 1);
    if (categorySize > 1) {
        const cat2 = catList.substring(catList.lastIndexOf('=') + 1);
        return `${cat1} and ${cat2}`;
    }
    return `${cat1}`;
};

/**
 * Restaurants results page with card stack and chosen categories.
 *
 * @returns {React.ReactElement} Restaurants page component.
 */
const Restaurants = (): React.ReactElement => {
    // TODO: Terrible spaghetti, research a better way to split url output. (For testing only)
    const { categories } = useParams();
    const catList = categories !== undefined ? categories : 'null';
    const categoryText = getCategory(catList);

    const [open, setOpen] = React.useState(false);
    /**
     * Function to open or close the Dialog.
     */
    const handleOpenClose = () => {
        setOpen(!open);
    };
    const restaurant: Restaurant = {
        // Pull info from API, this is for testing purposes only.
        // https://api.yelp.com/v3/businesses/search?{params}
        // eslint-disable-next-line spellcheck/spell-checker
        id: 'krs94qCUqsxEey1rFXyAhg',
        name: "Dave's Hot Chicken",
        price: 2,
        rating: 4,
        reviewCount: 320,
        categories: [
            { alias: 'chickenshop' },
            { alias: 'american' },
        ],
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/d08yu8NH0qiIUG5PkGPdHA/o.jpg',
    };
    const restaurantDetail: RestaurantDetails = {
        // Pull info from API, this is for testing purposes only.
        // https://api.yelp.com/v3/businesses/{id}
        displayAddress: '1350 E Colorado St, Glendale, CA 91205',
        displayPhone: '(818) 937-9488',
        isOpenNow: true,
        // eslint-disable-next-line spellcheck/spell-checker
        // eslint-disable-next-line max-len
        url: 'https://www.yelp.com/biz/daves-hot-chicken-glendale-3?adjust_creative=Rit42U9ivRMCkc_nRd-X1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=Rit42U9ivRMCkc_nRd-X1A',
        photos: [
            'https://s3-media3.fl.yelpcdn.com/bphoto/d08yu8NH0qiIUG5PkGPdHA/o.jpg',
            'https://s3-media2.fl.yelpcdn.com/bphoto/AwXNZ9owcpwvDYwamslGTg/o.jpg',
            'https://s3-media1.fl.yelpcdn.com/bphoto/YFKwJTfpfmkYkzYcn5mwrg/o.jpg',
        ],
    };

    /**
     * Function to return a formatted map link of the restaurant.
     *
     * @param {string} name The name of the restaurant.
     * @param {string} address The full address of the restaurant.
     * @returns {string} Map link of the selected restaurant.
     */
    const getLink = (name: string, address: string): string =>
        `https://maps.apple.com/?address=${encodeURIComponent(address)}&q=${encodeURIComponent(name)}`;

    /**
     * Returns the location of the appropriate rating image (Using this method to avoid importing all images).
     *
     * @param {number} rating The restaurant's rating.
     * @returns {string} The location of the appropriate rating image.
     */
    const getRating = (rating: number): string => `${process.env.PUBLIC_URL}/yelp-stars/${rating}.png`;
    return (
        <div>
            <Button
                variant='outlined'
                color='inherit'
                component={Link}
                to={{ pathname: '/home' }}
            >
                New Search
            </Button>
            <h1>(DEV) You have selected {categoryText}</h1>
            <Button variant='outlined' color='inherit' onClick={handleOpenClose}>
                Click To Open details of {restaurant.name}
            </Button>
            <CardDetails
                open={open}
                onClose={handleOpenClose}
                restaurantTitle={restaurant.name}
                mapLink={getLink(restaurant.name, restaurantDetail.displayAddress)}
                address={restaurantDetail.displayAddress}
                phoneNumber={restaurantDetail.displayPhone}
                photos={restaurantDetail.photos[0]}
                yelpUrl={restaurantDetail.url}
                ratingImage={getRating(restaurant.rating)}
                reviewCount={restaurant.reviewCount}
            />
        </div>
    );
};
export default Restaurants;

/*
    This works the same as above, just takes 2 separate slugs instead of parsing one.
    Pro is easier to read, con is there needs to be an extra route for only one category in App.
    Can also just remove the first=x and second=y in the path to avoid too much splitting.
    Ex: restaurants/x&y
    <Route path='/restaurants/:cat1&:cat2' element={<Restaurants />} />
    <Route path='/restaurants/:cat1' element={<Restaurants />} />
*/

/*
const Restaurants = (): React.ReactElement => {
    const { cat1, cat2 } = useParams();
    const one = cat1?.split('&')[0].split('=')[1];
    const two = cat2?.split('&')[0].split('=')[1];
    return (
        <div>
            {cat2 !== undefined && (<h1>{one} and {two}</h1>)}
            {cat2 === undefined && (<h1>{one}</h1>)}
        </div>
    );
};
export default Restaurants;
*/
