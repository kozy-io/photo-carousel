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
    };

    this.nextPictureHandler = this.nextPictureHandler.bind(this);
    this.prevPictureHandler = this.prevPictureHandler.bind(this);
  }

  nextPictureHandler() {
    const { currIndex } = this.state;
    const { photos } = this.props;
    const tmp = currIndex + 1;

    if (currIndex !== photos.length - 1) {
      this.setState({
        currIndex: tmp,
      });
    } else {
      this.setState({
        currIndex: 0,
      });
    }
  }

  prevPictureHandler() {
    const { currIndex } = this.state;
    const { photos } = this.props;
    const tmp = currIndex - 1;

    if (currIndex !== 0) {
      this.setState({
        currIndex: tmp,
      });
    } else {
      this.setState({
        currIndex: photos.length - 1,
      });
    }
  }

  render() {
    const { exitModal, modalFocus, photos } = this.props;
    const { currIndex } = this.state;
    return (
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
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
