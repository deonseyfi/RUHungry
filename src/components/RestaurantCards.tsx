/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './RestaurantCards.css';

const db = [
    {
        name: 'Richard Hendricks',
        url: 'https://picsum.photos/200',
    },
    {
        name: 'Erlich Bachman',
        url: 'https://picsum.photos/200',
    },
    {
        name: 'Monica Hall',
        url: 'https://picsum.photos/200',
    },
    {
        name: 'Jared Dunn',
        url: 'https://picsum.photos/200',
    },
    {
        name: 'Dinesh Chugtai',
        url: 'https://picsum.photos/200',
    },
];
/**
 *
 */
const RestaurantCards = () => {
    const characters = db;
    const [lastDirection, setLastDirection] = useState();

    /**
     * @param direction
     * @param nameToDelete
     */
    const swiped = (direction: any, nameToDelete: string) => {
        console.log(`removing: ${nameToDelete}`);
        setLastDirection(direction);
    };

    /**
     * @param name
     */
    const outOfFrame = (name: string) => {
        console.log(`${name} left the screen!`);
    };
    return (
        <div className='cardContainer'>

            {characters.map((character) => (
                <TinderCard
                    className='swipe'
                    key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name)}
                    onCardLeftScreen={() => outOfFrame(character.name)}
                    preventSwipe={['down', 'up']}
                    swipeThreshold={1000}
                >
                    <div style={{ backgroundImage: `url(${character.url})` }} className='card'>
                        <h3>{character.name}</h3>
                    </div>
                </TinderCard>
            ),
            )}
        </div>
    );
};
export default RestaurantCards;
