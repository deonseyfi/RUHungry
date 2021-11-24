import React from 'react';
import { useParams } from 'react-router-dom';

// TODO: Food cards will go here.

/**
 * Takes in url string and splits it into individual categories.
 *
 * @param {string} list Single string of the pulled category url.
 * @param {number} index Index of the split list array.
 * @returns {string} Category name at specific index.
 */
const getCategory = (list: string, index: number) => (
    list.split('&')[index].toString().split('=')[1]
);

/**
 * Restaurants results page with card stack and chosen categories.
 *
 * @returns {React.ReactElement} Restaurants page component.
 */
const Restaurants = (): React.ReactElement => {
    // TODO: Terrible spaghetti, research a better way to split url output.
    const { categories } = useParams();
    const catList = categories !== undefined ? categories : 'null';
    const categorySize = catList.split('&').length;
    const cat1 = getCategory(catList, 0);
    const cat2 = categorySize > 1 ? getCategory(catList, 1) : 'null';

    return (
        <div>
            <h1>(DEV) You have selected</h1>
            {categorySize > 1 && (<h1>{cat1} and {cat2}</h1>)}
            {categorySize < 2 && (<h1>{cat1}</h1>)}
        </div>
    );
};
export default Restaurants;
