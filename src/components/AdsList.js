/* global fetch */

import React from 'react';

import adsJson from './ads.json';
import Ad from './Ad';
import Preloader from './Preloader';

import './AdsList.less';

const CORS_PROXY = 'http://cors-anywhere.herokuapp.com';
const API_URL = '/api.mcmakler.de/v1/advertisements';


class AdsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
    };
  }

  componentDidMount() {
    fetch(`${CORS_PROXY}${API_URL}`)
      .then(res => res.json())
      .then(res => this.setState({ ads: res.data.slice(0, 10) }))
      .catch(() => this.setState({ ads: adsJson }));
  }

  getTitlePictureUrl(ad) {
    const titlePicture = Object.values(ad.advertisementAssets)
      .filter(asset => asset.titlePicture)[0];
    return titlePicture
      .advertisementThumbnails
      .inventory_m
      .url;
  }

  getPurpose(ad) {
    return ad.purpose ? 'Kaufen' : 'Mieten';
  }

  getPrice(ad) {
    const price = ad.purpose
      ? ad.advertisementPrice.sellPrice
      : ad.advertisementPrice.baseRent;
    return price
      ? price.toLocaleString('de-DE')
      : 'N/A';
  }

  renderAd(ad) {
    const { additionalId, title, realestateSummary } = ad;
    const { address, numberOfRooms, space } = realestateSummary;
    return (<Ad
      key={additionalId}
      id={additionalId}
      purpose={this.getPurpose(ad)}
      title={title}
      imgUrl={this.getTitlePictureUrl(ad)}
      postalCode={address.postalCode}
      street={address.street}
      city={address.city}
      price={this.getPrice(ad)}
      rooms={numberOfRooms}
      space={Math.round(space)}
    />);
  }

  render() {
    const { ads } = this.state;

    if (!ads.length) {
      return (
        <Preloader
          message="Please wait, data is loading..."
        />
      );
    }

    return (
      <ul className="adsList">
        {ads.map(ad => this.renderAd(ad))}
      </ul>
    );
  }
}

export default AdsList;
