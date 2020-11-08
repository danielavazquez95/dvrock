import React from 'react';
import { useSelector } from 'react-redux';
import {Comment} from './Comment';

export const Commets = ({id}) => {

    const {comments} = useSelector(state => state.comments)
    const noteId= comments.filter(comment => comment.id === id);

    
    
    return (
        <div className="animate__animated animate__fadeIn">
            {
                noteId.map((comment, index) => (
                    <Comment
                        key={index}
                        {...comment}
                    
                    />
                ))
            }

        </div>
    )
}
