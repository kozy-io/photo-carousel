/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './style/ExtraPictures.css';

class ExtraPictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '50%',
      width: (window.innerWidth / 4),
      hoverFour: false,
      hoverFive: false,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.progressiveLoading = this.progressiveLoading.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.progressiveLoading();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onClickHandler({ target }) {
    const { name } = target;
    const { clickHandler } = this.props;
    clickHandler(name);
  }

  progressiveLoading() {
    const imagesToLoad = document.querySelectorAll('img[data-src]');
    const loadImages = function (image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.onload = function () {
        image.removeAttribute('data-src');
        image.classList.remove('blur');
      };
    };
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  updateDimensions() {
    this.setState({
      width: (window.innerWidth / 4),
      height: (window.innerHeight / 4),
    });
  }

  hoverHandler({ target }) {
    const { hoverFour, hoverFive } = this.state;
    const { hoverHandler } = this.props;
    const { name } = target;

    if (name === 'four') {
      if (!hoverFour) {
        hoverHandler('four');
      } else {
        hoverHandler('clear');
      }
      this.setState({ hoverFour: !hoverFour });
    }

    if (name === 'five') {
      if (!hoverFive) {
        hoverHandler('five');
      } else {
        hoverHandler('clear');
      }
      this.setState({ hoverFive: !hoverFive });
    }
  }

  render() {
    const { height, width } = this.state;
    const { photos, totalHeight, totalWidth, opacityFour, opacityFive, currWidth, tinyPhotos } = this.props;
    return (
      <div className={styles.subPictureColumn} style={{ left: '50%', height: totalHeight * 0.6, minHeight: '60%' }}>
        <div className={styles.imgHoverZoom}>
          <div className={styles.entryOne}>
            <img
              src={tinyPhotos[0]}
              data-src={photos[0]}
              id="subPictures"
              className={[styles.subPicture, styles.blur].join(' ')}
              alt=""
              style={{
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityFour, background: `url(${tinyPhotos[0]})`,
              }}
              height={totalHeight * 0.6 * 0.5}
              width={width}
              name="four"
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.hoverHandler}
              onClick={this.onClickHandler}
            />
          </div>
        </div>
        <div className={styles.imgHoverZoom}>
          <div className={styles.entryTwo}>
            <img
              src={tinyPhotos[1]}
              data-src={photos[1]}
              id="subPictures"
              className={[styles.subPicture, styles.blur].join(' ')}
              alt=""
              style={{
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityFive, background: `url(${tinyPhotos[0]})`,
              }}
              height={totalHeight * 0.6 * 0.5}
              width={width}
              name="five"
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.hoverHandler}
              onClick={this.onClickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraPictures;
