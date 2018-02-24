import React from 'react'
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
    const ads = fetch(`${CORS_PROXY}${API_URL}`)
      .then(res => res.json())
      .then(res => this.setState({ ads: res.data.slice(0, 10) }))
      .catch(e => console.log(e));
  }

  render() {
    const { ads } = this.state;
    if (!ads.length) {
      return '...';
    }

    return (
      <ul>
        DATA
      </ul>
    );
  }
}

export default AdsList;