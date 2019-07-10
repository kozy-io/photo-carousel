/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';


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
    const { photos, totalHeight, totalWidth, opacityFour, opacityFive, currWidth } = this.props;
    return (
      <div className="subPictureColumn" style={{ left: '50%', height: '60%', minHeight: '60%' }}>
        <div className="img-hover-zoom">
          <div className="entryOne">
            <img
              src={photos[0]}
              id="subPictures"
              className="subPicture"
              alt="http://lorempixel.com/1440/960/city/"
              style={{
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityFour,
              }}
              height={height}
              width={width}
              name="four"
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
                top: 0, minHeight: (totalHeight * 0.3), opacity: opacityFive,
              }}
              height={height}
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
