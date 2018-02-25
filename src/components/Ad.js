import React from 'react';
import PropTypes from 'prop-types';
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
  space,
}) => (
  <li className="ad">
    <a className="ad__link" href={`#/advertisement/${id}`}>
      <button className="ad__type" disabled="disabled">{purpose}</button>
      <img className="ad__img" alt="" src={imgUrl} />
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

Ad.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
  purpose: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  postalCode: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rooms: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
  space: PropTypes.number.isRequired,
};

export default Ad;
