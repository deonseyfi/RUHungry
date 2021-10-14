// /**
//  * Single Category item type.
//  */
// export type Category = {
//     /**
//      * The name of the category.
//      */
//     value: string;
//     /**
//      * The Emoji symbol of the category.
//      */
//     symbol: string;
// };
// /**
//  * List of multiple Category types.
//  */
// export type CategoryList = { category: Category }[];

/**
 * List of food categories.
 */
export type FoodCategoryList = {
    /**
     * The name of the category.
     */
    value: string;
    /**
     * The Emoji symbol of the category.
     */
    symbol: string;
}[];
