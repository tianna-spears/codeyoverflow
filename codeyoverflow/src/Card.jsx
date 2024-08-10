/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

function Card (props) {
    return (
        <>
        <Header 
        profileImg={props.commentObject.profileImg}
        username={props.commentObject.username}
        />
        <Body comment={props.commentObject.comment}/>
        </>
    )
}

export default Card;