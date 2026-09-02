import { FoodDrinkFeature, FoodDrinkInfo, FoodMenuGroup } from '../interfaces/food-drink';

export const FOOD_MENU_GROUPS: FoodMenuGroup[] = [
    {
        icon: 'fas fa-burger',
        title: 'Hot Favourites',
        items: [
            'Hamburgers',
            'Hot Dogs',
            'Cheese Dogs',
            'Clubhouse on a Bun',
            'Chili',
            'Soups'
        ]
    },
    {
        icon: 'fas fa-bowl-food',
        title: 'Sides & Snacks',
        items: [
            'Fries',
            'Poutine',
            'Fresh Popcorn',
            'Homemade Cookies',
            'Chocolate Bars'
        ]
    },
    {
        icon: 'fas fa-mug-hot',
        title: 'Breakfast & Drinks',
        items: [
            'Breakfast Muffins',
            'Assorted Drinks'
        ]
    }
];

export const FOOD_DRINK_INFO: FoodDrinkInfo[] = [
    {
        icon: 'fas fa-utensils',
        label: 'Breakfast & Lunch',
        value: 'The canteen serves breakfast and lunch during ski-area operations.'
    },
    {
        icon: 'fas fa-mountain-sun',
        label: 'Right in the Chalet',
        value: 'Grab something to eat without leaving the base of the mountain.'
    },
    {
        icon: 'fas fa-heart',
        label: 'Support Your Hill',
        value: 'Canteen purchases help support Mount Dufour and its operating costs.'
    }
];

export const FOOD_DRINK_FEATURE: FoodDrinkFeature = {
    description: 'Warm up, refuel and get back on the slopes. The Mount Dufour canteen offers familiar favourites, snacks and drinks right inside the chalet.',
    kicker: 'Warm Up & Refuel',
    title: 'Good Food. Right at the Hill.'
};
