/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';


class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: (window.innerHeight / 2),
      width: (window.innerWidth / 2),
      widthPercent: '50%',
      hover: false,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onClickHandler() {
    const { clickHandler } = this.props;
    clickHandler('profile');
  }

  updateDimensions() {
    const { threshold, lastThreshold, currWidth } = this.props;
    if (currWidth < lastThreshold) {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerHeight * 0.6),
        widthPercent: '100%',
      });
    } else if (currWidth < threshold && currWidth > lastThreshold) {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerHeight * 0.6),
        widthPercent: '75%',
      });
    } else {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerHeight * 0.6),
        widthPercent: '50%',
      });
    }
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
    const { height, width, widthPercent } = this.state;
    const {
      totalHeight, totalWidth, opacity, photo, currWidth, threshold, lastThreshold, clickHandler,
    } = this.props;
    return (
      <div className="profileContainer">
        <div className="img-hover-zoom">
          <img src={photo} id="profilePicture" className="picture" alt="http://lorempixel.com/1440/960/city/"
            style={{
              top: 0, minHeight: (totalHeight * 0.5), maxHeight: '60%', opacity,
            }}
            height="60%" width={widthPercent} onMouseEnter={this.hoverHandler}
            onMouseLeave={this.hoverHandler} onClick={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
