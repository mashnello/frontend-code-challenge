import React from 'react'
import ads from './ads.json';
import Ad from './Ad';

const CORS_PROXY = 'http://cors-anywhere.herokuapp.com';
const API_URL = '/api.mcmakler.de/v1/advertisements';


class AdsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: []
    };
  }

  componentDidMount() {
    // const ads = fetch(`${CORS_PROXY}${API_URL}`)
    //   .then(res => res.json())
    //   .then(res => this.setState({ ads: res.data.slice(0, 10) }))
    //   .catch(e => console.log(e));
    this.setState({ ads });
  }

  getTitlePictureUrl(ad) {
    return Object.values(ad.advertisementAssets)
      .filter(asset => asset.titlePicture)[0]
      .advertisementThumbnails
      .inventory_m
      .url;
  }

  getPurpose(ad) {
    return ad.purpose ? 'Kaufen' : 'Mieten';
  }

  getPrice(ad) {
    return ad.purpose
      ? ad.advertisementPrice.baseRent
      : ad.advertisementPrice.sellPrice;
  }

  render() {
    const { ads } = this.state;
    if (!ads.length) {
      return '...';
    }

    return (
      <ul>
        {ads.map(ad => {
          const { additionalId, title, realestateSummary } = ad;
          const { address, numberOfRooms, space } = realestateSummary;
          return (<Ad
            key={additionalId}
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
        })}
      </ul>
    );
  }
}

export default AdsList;