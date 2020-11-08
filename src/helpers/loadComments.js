import { db } from "../firebase/firebase-config"

export const loadComments = async () => {

   const commentsSnap = await db.collection('comentarios').get();
   const comments = []

    commentsSnap.forEach(snapHijo => {
        comments.unshift({
            ...snapHijo.data()
        })
    });

    
   return comments;
}