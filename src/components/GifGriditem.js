import React from 'react';

export const GifGriditem = ({id, title, url}) => {

    // console.log(props);
  return (
  <div className='card animate__animated animate__bounce'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
  </div>
  );
};
