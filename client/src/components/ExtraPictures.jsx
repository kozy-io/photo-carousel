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
      width: Math.ceil((window.innerWidth / 4)),
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.progressiveLoading = this.progressiveLoading.bind(this);
    this.checkHover = this.checkHover.bind(this);
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
    const { clickHandler, hoverHandler } = this.props;
    hoverHandler('clear');
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
      width: Math.ceil((window.innerWidth / 4)),
      height: Math.ceil((window.innerHeight / 4)),
    });
  }

  hoverHandler({ target }) {
    const { hoverFour, hoverFive } = this.state;
    const { hoverHandler } = this.props;
    const { name } = target;

    if (name === 'four') {
      hoverHandler('four');
      this.setState({ hoverFour: true });
    }

    if (name === 'five') {
      hoverHandler('five');
      this.setState({ hoverFive: true });
    }
  }

  checkHover({ target }) {
    const { hoverFour, hoverFive } = this.state;
    const { hoverHandler } = this.props;
    const { name } = target;

    if (name === 'four') {
      if (hoverFour) {
        this.setState({ hoverFour: false });
      }
    }

    if (name === 'five') {
      if (hoverFive) {
        this.setState({ hoverFive: false });
      }
    }
    hoverHandler('clear');
  }

  render() {
    const { height, width } = this.state;
    const { photos, totalHeight, totalWidth, opacityFour, opacityFive, currWidth, tinyPhotos } = this.props;
    return (
      <div className={styles.subPictureColumn} style={{ left: '50%', height: totalHeight * 0.6, minHeight: totalHeight * 0.6 }}>
        <div className={styles.imgHoverZoom}>
          <div className={styles.entryOne}>
            <img
              src={tinyPhotos[0]}
              data-src={photos[0]}
              id="subPictures"
              className={[styles.subPicture, styles.blur].join(' ')}
              alt=""
              style={{
                top: 0, minHeight: Math.ceil((totalHeight * 0.3)), opacity: opacityFour, background: `url(${tinyPhotos[0]})`,
              }}
              height={Math.ceil((totalHeight * 0.6 * 0.5))}
              width={width - 4}
              name="four"
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.checkHover}
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
                top: 0, minHeight: Math.ceil((totalHeight * 0.3)), opacity: opacityFive, background: `url(${tinyPhotos[0]})`,
              }}
              height={Math.ceil((totalHeight * 0.6 * 0.5))}
              width={width - 4}
              name="five"
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.checkHover}
              onClick={this.onClickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraPictures;
