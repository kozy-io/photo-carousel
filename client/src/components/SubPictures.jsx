import React from 'react';

const minWidth = (window.innerWidth / 4);
const minHeight = (window.innerHeight / 4);

class SubPictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: (window.innerHeight / 4),
      width: (window.innerWidth / 4),
    };
  }

  render() {
    const { height, width } = this.state;
    const { photos } = this.props;
    return (
      <div className="subPictureColumn">
        <div className="img-hover-zoom">
          <div className="entryOne">
            <img
              src={photos[0]}
              id="subPictures"
              className="subPicture"
              alt="http://lorempixel.com/1440/960/city/"
              style={{ top: 0, minWidth, minHeight }}
              height={height}
              width={width}
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
              style={{ top: 0, minWidth, minHeight }}
              height={height}
              width={width}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SubPictures;
