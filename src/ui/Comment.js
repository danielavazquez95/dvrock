import React from 'react'
import moment from 'moment';



export const Comment = ({name, date, body}) => {


    const commentDate = moment(date);

    return (
        <div className="media">
            <img src={'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png'} alt="user" />
            <div className="media-body">
                <p className="user"> {name}  <span>{commentDate.format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                <p className="comment">{body}</p>
            </div>
            
        </div>
    )
}
