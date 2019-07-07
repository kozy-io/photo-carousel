/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import axios from 'axios';


class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrl: '',
      height: (window.innerHeight / 2),
      width: (window.innerWidth / 2),
      hover: false,
    };

    this.getProfilePicture = this.getProfilePicture.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  componentDidMount() {
    this.getProfilePicture();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getProfilePicture() {
    axios.get('/api/listings/photos/1')
      .then((response) => {
        this.setState({
          photoUrl: response.data[0].photoUrl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateDimensions() {
    this.setState({
      width: (window.innerWidth / 2),
      height: (window.innerHeight / 2),
    });
  }

  hoverHandler() {
    const { hover } = this.state;
    const { hoverHandler } = this.props;
    if (!hover) {
      hoverHandler('profile');
    } else {
      hoverHandler('clear');
    }
    this.setState({ hover: !hover });
  }


  render() {
    const { photoUrl, height, width } = this.state;
    const { totalHeight, totalWidth, opacity } = this.props;
    return (
      <div className="profileContainer">
        <div className="img-hover-zoom">
          <img src={photoUrl} id="profilePicture" className="picture" alt="http://lorempixel.com/1440/960/city/"
            style={{
              top: 0, minWidth: (totalWidth / 2) + 1, minHeight: (totalHeight / 2) + 1, opacity,
            }}
            height={(height + 1)} width={(width + 1)} onMouseEnter={this.hoverHandler}
            onMouseLeave={this.hoverHandler}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
