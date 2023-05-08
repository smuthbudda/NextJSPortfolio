import {Actor, Engine} from 'excalibur';
import React from 'react';

export default function Game(){
    const actor = new Actor();
    const game = new Engine({
        width:800,
        height:600,
    })

    game.start();

    return(
        <div>

        </div>
    );
}


