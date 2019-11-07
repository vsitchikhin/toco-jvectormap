import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import addVectorMap from 'jvectormap-next';
import 'jvectormap-next/jquery-jvectormap.css';

addVectorMap($);

function VectorMap({ style: containerStyle, className, ...props }) {
  /**
   * update props ref
   */
  const propsRef = useRef(props);

  useEffect(
    () => {
      propsRef.current = props;
    },
    [props]
  );

  /**
   * generate the map
   */
  const nodeRef = useRef(null);
  const mapObjectRef = useRef(null);

  useEffect(() => {
    const $node = $(nodeRef.current);

    $node.vectorMap({ ...propsRef.current });
    mapObjectRef.current = $node.vectorMap('get', 'mapObject');
  }, []);

  /**
   * render
   */
  const style = useMemo(
    () => ({
      width: '100%',
      height: '100%',
      // append inline style if exists
      ...containerStyle,
    }),
    [containerStyle]
  );

  return <div ref={nodeRef} style={style} className={className} />;
}

VectorMap.propTypes = {
  /* div props */
  style: PropTypes.object,
  className: PropTypes.string,
  /* map props */
  map: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  zoomOnScroll: PropTypes.bool,
  zoomOnScrollSpeed: PropTypes.bool,
  panOnDrag: PropTypes.bool,
  zoomMax: PropTypes.number,
  zoomMin: PropTypes.number,
  zoomStep: PropTypes.number,
  zoomAnimate: PropTypes.bool,
  regionsSelectable: PropTypes.bool,
  regionsSelectableOne: PropTypes.bool,
  markersSelectable: PropTypes.bool,
  markersSelectableOne: PropTypes.bool,
  regionStyle: PropTypes.object,
  regionMargin: PropTypes.number,
  regionLabelStyle: PropTypes.object,
  markerStyle: PropTypes.object,
  markerLabelStyle: PropTypes.object,
  markers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  series: PropTypes.object,
  focusOn: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labels: PropTypes.object,
  selectedRegions: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  selectedMarkers: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  onRegionTipShow: PropTypes.func,
  onRegionOver: PropTypes.func,
  onRegionOut: PropTypes.func,
  onRegionClick: PropTypes.func,
  onRegionSelected: PropTypes.func,
  onMarkerTipShow: PropTypes.func,
  onMarkerOver: PropTypes.func,
  onMarkerOut: PropTypes.func,
  onMarkerClick: PropTypes.func,
  onMarkerSelected: PropTypes.func,
  onViewportChange: PropTypes.func,
  zoomButtons: PropTypes.bool,
};

VectorMap.defaultProps = {
  /* div props */
  style: {},
  /* map props */
  backgroundColor: 'transparent',
  regionStyle: {
    initial: {
      fill: '#777',
    },
  },
};

export default React.memo(VectorMap);
