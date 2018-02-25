import React from 'react';
import './Ad.less';

const Ad = ({
  id,
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
    <li className="ad">
      <a className="ad__link" href={`#/advertisement/${id}`}>
        <button className="ad__type" disabled="disabled">{purpose}</button>
        <img className="ad__img" src={imgUrl} />
        <div className="ad__summary">
          <div>
            <h4 className="ad__title">{title}</h4>
            <p className="ad__address">
              <span>{postalCode}</span>
              {' '}
              <span>{street}</span>
              {' / '}
              <span>{city}</span>
            </p>
          </div>
          <p className="ad__indicators">
            <span className="ad__price">
              <strong>
                {`${price} €`}
              </strong>
            </span>
            <span className="ad__area">
              <span className="ad__rooms">{`${rooms} Zimmer`}</span>
              <span className="ad__separator" />
              <span className="ad__space">{`ab ${space} m\u00B2`}</span>
            </span>
          </p>
        </div>
      </a>
    </li>
  );
};

export default Ad;