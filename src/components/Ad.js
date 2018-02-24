import React from 'react';

const Ad = ({
  purpose,
  title,
  imgUrl,
  postalCode,
  street,
  city,
  price,
  rooms,
  space
}) => {
  return (
    <div>
      <button disabled="disabled">{purpose}</button>
      <img src={imgUrl} />
      <h4>{title}</h4>
      <p>
        <span>{postalCode}</span>
        {' '}
        <span>{street}</span>
        {' / '}
        <span>{city}</span>
      </p>
      <p>{`${price} €`}</p>
      <p>{`${rooms} Zimmer`}</p>
      <p>{`ab ${space} m\u00B2`}</p>
    </div>
  );
};

export default Ad;