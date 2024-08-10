/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Header (props) {
    return (
    <>
        <img src={props.profileImg} />
        <h1> {props.username} </h1>
    </>
    );
}

export default Header;