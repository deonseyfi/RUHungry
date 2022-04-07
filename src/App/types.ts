/**
 * List of food categories.
 */
export type FoodCategoryList = {
    /**
     * The key value passed to the API.
     */
    key: string;
    /**
     * The name of the category.
     */
    label: string;
    /**
     * The Emoji symbol of the category.
     */
    symbol: string;
}[];
/**
 * Restaurant type.
 */
export type Restaurant = {
    /**
     * Yelp ID of the restaurant.
     */
    id: string;
    /**
     * Name of the restaurant.
     */
    name: string;
    /**
     * Price.
     */
    price: 1 | 2 | 3 | 4;
    /**
     * Distance from the user to the restaurant (in meters).
     */
    distance?: number;
    /**
     * The restaurant category.
     */
    categories: {
        /**
         * The alias (key) of the category.
         */
        alias: string;
    }[];
    /**
     * Main image URL of the restaurant.
     */
    imageUrl: string;
    /**
     * Rating of the restaurant.
     */
    rating?: number;
    /**
     * Amount of reviews for the restaurant.
     */
    reviewCount?: number;
};
/**
 * List of multiple Restaurants.
 */
export type RestaurantList = {
    /**
     * Restaurant type.
     */
    restaurant: Restaurant;
}[];
/**
 * Restaurant Details.
 */
export type RestaurantDetails = {
    /**
     * Address of the restaurant.
     */
    displayAddress: string;
    /**
     * Phone number of the restaurant.
     */
    displayPhone: string;
    /**
     * List of photos of the restaurant.
     */
    photos: string[];
    /**
     * Is the restaurant currently open.
     */
    isOpenNow?: boolean;
    /**
     * Main Yelp URL of the restaurant.
     */
     url: string;
}
