/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import styles from './style/ProfilePicture.css';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: (window.innerHeight / 2),
      width: (window.innerWidth / 2),
      widthPercent: (this.props.totalWidth * 0.5),
      hover: false,
    };

    this.progressiveLoading = this.progressiveLoading.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.progressiveLoading();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onClickHandler() {
    const { clickHandler } = this.props;
    clickHandler('profile');
  }

  progressiveLoading() {
    const imagesToLoad = document.querySelectorAll('img[data-src]');
    const loadImages = function (image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.onload = function () {
        console.log(image.classList);
        image.removeAttribute('data-src');
        image.classList.remove(image.classList[1]);
      };
    };
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  updateDimensions() {
    const {
      threshold, lastThreshold, currWidth, totalWidth,
    } = this.props;
    if (currWidth < lastThreshold) {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerWidth / 2),
        widthPercent: totalWidth,
      });
    } else if (currWidth < threshold && currWidth > lastThreshold) {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerWidth / 2),
        widthPercent: (totalWidth * 0.75),
      });
    } else {
      this.setState({
        width: (window.innerWidth / 2),
        height: (window.innerWidth / 2),
        widthPercent: (totalWidth * 0.5),
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
      totalHeight, totalWidth, opacity, photo, currWidth, threshold, lastThreshold, clickHandler, tinyPhoto,
    } = this.props;
    return (
      <div className={styles.profileContainer}>
        <div className={styles.imgHoverZoom}>
          <img src={tinyPhoto} data-src={photo} id="profilePicture" className={[styles.picture, styles.blur].join(' ')} alt=""
            style={{
              top: 0, minHeight: totalHeight * 0.4, maxHeight: '60%', opacity, background: `url(${tinyPhoto})`,
            }}
            height={totalHeight * 0.6} width={widthPercent} onMouseEnter={this.hoverHandler}
            onMouseLeave={this.hoverHandler} onClick={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
