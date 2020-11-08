import React from 'react'
import { notas } from '../notas'
import { NoteCard } from './NoteCard'
import { NoteCard1 } from './NoteCard1';




export const HomeScreen = () => {
    
    const standardNotes = notas.slice(1);


    return (

    <div className="container">
           <div className="row">
               <div className="col">
                   <div className="d-flex flex-wrap justify-content-center">
                        <NoteCard1/>
                   </div>
               </div>

           </div>
            <div className="row">
                    <div className="col">
                        <div className=" d-flex flex-wrap justify-content-center">
                            {standardNotes.map(nota =>
                                <NoteCard key={nota.title} image={nota.image} title={nota.title} subtitle={nota.subtitle} date={nota.date}/>)}
                        </div>
                    </div>
            </div>
            
        
    </div>
           
    )
}
