import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {

    return (
        robots.map(robot => {
            return (
                <Card name={robot.name} email={robot.email} key={robot.id} id={robot.id} />


            )
        }

    ))
}
export default CardList;