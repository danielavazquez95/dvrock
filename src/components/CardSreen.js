import React from 'react';
import { useParams } from 'react-router-dom';
import { CharlyScreen } from '../NotesScreen/CharlyScreen';
import { DavidScreen} from '../NotesScreen/DavidScreen'
import { GreenDayScreen } from '../NotesScreen/GreenDayScreen';
import { LadyGagaScreen } from '../NotesScreen/LadyGagaScreen';
import { MickScreen } from '../NotesScreen/MickScreen';
import { PaulScreen } from '../NotesScreen/PaulScreen';
import { PedroScreen } from '../NotesScreen/PedroScreen';
import { RogerScreen } from '../NotesScreen/RogerScreen';



export const CardSreen = () => {

    const {title} = useParams();
    

    
    switch (title) {
        case 'Charly Garcia cumple 69 años':
            return (<CharlyScreen/>);
        case 'David Lebon':
            return (<DavidScreen/>);
        case 'Pedro Aznar':
            return (<PedroScreen/>);
        case 'Mick Jagger':
            return (<MickScreen/>);
        case 'Paul McCartney':
            return (<PaulScreen/>);
        case 'Roger Waters':
            return (<RogerScreen/>);
        case 'Lady Gaga':
            return (<LadyGagaScreen/>);
        case 'Green Day':
            return(<GreenDayScreen/>)
        default:
            return;
    
    }

}
