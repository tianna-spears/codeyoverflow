/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App () {
  return (
    comments.map(comment => 
        <Card commentObject= {comment} />))
}

export default App;