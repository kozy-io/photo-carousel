/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

class SubPictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '50%',
      width: (window.innerWidth / 4),
      hoverTwo: false,
      hoverThree: false,
      position: '50%',
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

  onClickHandler({ target }) {
    const { name } = target;
    const { clickHandler } = this.props;
    clickHandler(name);
  }

  updateDimensions() {
    const { threshold } = this.props;
    if (window.innerWidth < threshold) {
      this.setState({
        width: (window.innerWidth / 4),
        height: (window.innerHeight / 4),
        position: '75%',
      });
    } else {
      this.setState({
        width: (window.innerWidth / 4),
        height: (window.innerHeight / 4),
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
      photos, totalHeight, totalWidth, opacityTwo, opacityThree,
    } = this.props;
    return (
      <div className="subPictureColumn" style={{ left: position, height: '60%', minHeight: '60%' }}>
        <div className="img-hover-zoom">
          <div className="entryOne">
            <img
              src={photos[0]}
              id="subPictures"
              className="subPicture"
              alt="http://lorempixel.com/1440/960/city/"
              style={{
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityTwo,
              }}
              height={height}
              width={width}
              name="two"
              onMouseEnter={this.hoverHandler}
              onMouseLeave={this.hoverHandler}
              onClick={this.onClickHandler}
            />
          </div>
        </div>
        <div className="img-hover-zoom">
          <div className="entryTwo">
            <img
              src={photos[1]}
              id="subPictures"
              className="subPicture"
              alt="http://lorempixel.com/1440/960/city/"
              style={{
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityThree,
              }}
              height={height}
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
