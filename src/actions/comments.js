
import { db } from "../firebase/firebase-config";
import { loadComments } from "../helpers/loadComments";
import { types } from '../types/types';


export const startLoadingComments = () => {

    return async (dispatch) => {

        const comments = await loadComments();
        dispatch(setComments(comments));
    }

}


export const startNewComment = (body, name, id) =>{

    return async (dispatch) => {

        
        const newComment = {
            body:body,
            date: new Date().getTime(),
            name: name,
            id:id
          
        }

        const doc = await db.collection(`comentarios`).add(newComment);
        dispatch(startLoadingComments())
    }
    
};


export const setComments = (comments) => ({
    type: types.commentsLoad,
    payload: comments
});

