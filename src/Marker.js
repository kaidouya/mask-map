import React, { PureComponent } from 'react';
import AnyReactComponent from './AnyReactComponent';
import PropTypes from 'prop-types';

export default class Marker extends PureComponent {
  static porpTypes = {
    dataList: PropTypes.array
  };

  static defaultProps = {
    dataList: []
  };
  render() {
    const newList = [this.props.dataList[0], this.props.dataList[1]];
    
    return (
      <>
        {/* {newList.map(({ properties, geometry }) => {
          return (
            <AnyReactComponent
              lat={geometry.coordinates[0]}
              lng={geometry.coordinates[1]}
              key={properties.id}
              {...properties}
            ></AnyReactComponent>
          );
        })} */}
      </>
    );
  }
}
