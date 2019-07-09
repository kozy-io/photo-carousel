/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currIndex: this.props.modalFocus,
      translationAmount: -34,
    };

    this.nextPictureHandler = this.nextPictureHandler.bind(this);
    this.prevPictureHandler = this.prevPictureHandler.bind(this);
    this.logKey = this.logKey.bind(this);
  }

  componentDidMount() {
    const { currIndex, translationAmount } = this.state;
    let tmp = translationAmount;

    window.addEventListener('keydown', this.logKey);

    switch (currIndex) {
      case 0:
        tmp = 8;
        break;
      case 1:
        tmp = 8;
        break;
      case 2:
        tmp = -34;
        break;
      default:
        tmp -= ((currIndex - 2) * 80);
        break;
    }

    if (tmp !== translationAmount) {
      this.setState({
        translationAmount: tmp,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.logKey);
  }

  logKey({ code }) {
    if (code === 'ArrowRight') {
      this.nextPictureHandler();
    } else if (code === 'ArrowLeft') {
      this.prevPictureHandler();
    }
  }

  nextPictureHandler() {
    const { currIndex, translationAmount } = this.state;
    const { photos } = this.props;
    const tmp = currIndex + 1;
    let amt = translationAmount - 80;

    if (currIndex === 0 || currIndex === 1 || currIndex === photos.length - 1) {
      amt = 8;
    }

    if (currIndex === 2) {
      amt = -34;
    }

    if (currIndex !== photos.length - 1) {
      this.setState({
        currIndex: tmp,
        translationAmount: amt,
      });
    } else {
      this.setState({
        currIndex: 0,
        translationAmount: amt,
      });
    }
  }

  prevPictureHandler() {
    const { currIndex, translationAmount } = this.state;
    const { photos } = this.props;
    const tmp = currIndex - 1;
    let amt = translationAmount + 80;

    if (currIndex === 0) {
      amt = -34 - (photos.length - 4) * 80;
    }

    if (currIndex === 1 || currIndex === 2 || currIndex === 3) {
      amt = 8;
    }

    if (currIndex !== 0) {
      this.setState({
        currIndex: tmp,
        translationAmount: amt,
      });
    } else {
      this.setState({
        currIndex: photos.length - 1,
        translationAmount: amt,
      });
    }
  }

  render() {
    const { exitModal, modalFocus, photos } = this.props;
    const { currIndex, translationAmount } = this.state;
    return (
      <div>
        <div>
          <div dir="ltr">
            <div role="dialog" className="modal" style={{ zIndex: 2000 }}>
              <div data-veloute="slideshow-modal" className="slideshowModal">
                <div className="slideshowElements">
                  <div className="slideshowContainer">
                    <div>
                      <div>
                        <div className="exitButton">
                          <button type="button" className="hiddenButton" aria-busy="false" style={{ padding: 32, margin: -32 }} onClick={exitModal}>
                            <svg
                              viewBox="0 0 24 24"
                              role="img"
                              aria-label="Close"
                              focusable="false"
                              style={{
                                height: 24, width: 24, display: 'block', fill: 'rgb(72, 72, 72)',
                              }}
                            >
                              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="full">
                      <div className="photoContainer">
                        <div className="photoDisplay">
                          <div>
                            <button type="button" name="Previous" className="leftButton" onClick={this.prevPictureHandler}>
                              <svg viewBox="0 0 18 18" name="Previous" role="presentation" aria-hidden="true" focusable="false" style={{ height: 24, width: 24, fill: 'rgb(72, 72, 72)' }}>
                                <path name="Previous" d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
                              </svg>
                            </button>
                            <button type="button" name="Next" className="rightButton" onClick={this.nextPictureHandler}>
                              <svg viewBox="0 0 18 18" name="Next" role="presentation" aria-hidden="true" focusable="false" style={{ height: 24, width: 24, fill: 'rgb(72, 72, 72)' }}>
                                <path name="Next" d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          <img className="hiddenPicture" aria-hidden="true" src={photos[currIndex].photoUrl} alt="" />
                          <span>
                            <div>
                              <img
                                src={photos[currIndex].photoUrl}
                                alt=""
                                onClick={this.nextPictureHandler}
                                data-veloute="slideshow-image"
                                style={{
                                  maxHeight: '55vh', objectFit: 'cover', cursor: 'pointer', zIndex: 2, borderRadius: 16, position: 'absolute', maxWidth: '85%', margin: '0px auto', top: 0, left: 0, right: 0, bottom: 0,
                                }}
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="miniCarouselContainer">
                        <div className="miniCarouselPad">
                          <div className="miniCarouselBottom">
                            <div className="miniCarouselOuter">
                              <div className="miniCarouselInner">
                                <div />
                                <div className="rightEdge" />
                                <div className="imageCenterer">
                                  <div className="_zf7q4">
                                    <ul className="_conlnu" style={{ transform: `translateX(${(translationAmount)}px)` }}>
                                      {photos.map(element => (
                                        element.priority === currIndex
                                          ? (
                                            <li className="_1y6wdia" key={element.priority}>
                                              <button data-photo-index="0" className="_1umg7png" aria-label={`1/${photos.length}: ${photos[0].caption}`}>
                                                <img alt="" src={photos[0].photoUrl} className="_u6tx3c" />
                                              </button>
                                            </li>
                                          )
                                          : (
                                            <li className="_12n0r6ug" key={element.priority}>
                                              <button data-photo-index={element.priority} className="_hwcst" aria-label={`${element.priority}/${photos.length}: ${photos[element.priority].caption}`}>
                                                <img alt="" src={photos[element.priority].photoUrl} className="_u6tx3c" />
                                              </button>
                                            </li>
                                          )
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_yoviva">
                          <div style={{ marginBottom: '16px' }}>
                            <div className="_1p3joamp">
                              {currIndex + 1}/{photos.length}
                            </div>
                          </div>
                          <div className="_1dcp06s">
                            <div className="_czm8crp">
                              {photos[currIndex].caption}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
