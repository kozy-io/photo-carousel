/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styles from './style/SubPictures.css';

class SubPictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '50%',
      width: Math.ceil((window.innerWidth / 4)),
      hoverTwo: false,
      hoverThree: false,
      position: '50%',
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.progressiveLoading = this.progressiveLoading.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.progressiveLoading();
    this.updateDimensions();
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
    const { threshold, totalWidth } = this.props;
    if (window.innerWidth < threshold || totalWidth <= 1128) {
      this.setState({
        width: Math.ceil((window.innerWidth / 4)),
        height: Math.ceil((window.innerHeight / 4)),
        position: '75%',
      });
    } else {
      this.setState({
        width: Math.ceil((window.innerWidth / 4)),
        height: Math.ceil((window.innerHeight / 4)),
        position: '50%',
      });
    }
  }

  hoverHandler({ target }) {
    const { hoverTwo, hoverThree } = this.state;
    const { hoverHandler } = this.props;
    const { name } = target;

    if (name === 'two') {
      if (!hoverTwo) {
        hoverHandler('two');
      } else {
        hoverHandler('clear');
      }
      this.setState({ hoverTwo: !hoverTwo });
    }

    if (name === 'three') {
      if (!hoverThree) {
        hoverHandler('three');
      } else {
        hoverHandler('clear');
      }
      this.setState({ hoverThree: !hoverThree });
    }
  }

  render() {
    const { height, width, position } = this.state;
    const {
      photos, totalHeight, totalWidth, opacityTwo, opacityThree, tinyPhotos
    } = this.props;
    return (
      <div className={styles.subPictureColumn} style={{ left: position, height: totalHeight * 0.6, minHeight: totalHeight * 0.6 }}>
        <div className={styles.imgHoverZoom}>
          <div className={styles.entryOne}>
            <img
              src={tinyPhotos[0]}
              data-src={photos[0]}
              id="subPictures"
              className={[styles.subPicture, styles.blur].join(' ')}
              alt=""
              style={{
                top: 0, minHeight: Math.ceil((totalHeight * 0.3)), opacity: opacityTwo, background: `url(${tinyPhotos[0]})`,
              }}
              height={Math.ceil(totalHeight * 0.6 * 0.5)}
              width={width}
              name="two"
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
                top: 0, minHeight: Math.ceil((totalHeight * 0.3)), opacity: opacityThree, background: `url(${tinyPhotos[1]})`,
              }}
              height={Math.ceil(totalHeight * 0.6 * 0.5)}
              width={width}
              name="three"
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

export default SubPictures;
