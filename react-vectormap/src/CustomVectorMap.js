import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import VectorMap from './VectorMap';

function CustomVectorMap({ mapContent, ...props }) {
  /**
   * load required map
   */
  useLayoutEffect(
    () => {
      $.fn.vectorMap('addMap', props.map, mapContent);
    },
    [props.map, mapContent]
  );

  return <VectorMap {...props} />;
}

CustomVectorMap.propTypes = {
  map: PropTypes.string,
  mapContent: PropTypes.exact({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    paths: PropTypes.objectOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

CustomVectorMap.defaultProps = {
  map: 'custom',
};

export default React.memo(CustomVectorMap);
