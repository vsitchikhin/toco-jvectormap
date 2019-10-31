import React, { useRef, useEffect } from 'react';
// @ts-ignore
import { VectorMap as ReactJVectorMap } from 'react-jvectormap';
import 'jvectormap-next/jquery-jvectormap.css';

type PropsType = {
  map?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type Map = {
  $mapObject: any;
};

const VectorMap = ({ map = 'world_mill', className = 'map', style = {}, ...props }: PropsType) => {
  const mapRef = useRef<Map | undefined>(undefined);

  useEffect(() => {
    const $mapObject = mapRef.current && mapRef.current.$mapObject;
    console.log($mapObject);
  }, []);

  return (
    <ReactJVectorMap
      map={map}
      backgroundColor="transparent"
      ref={mapRef}
      containerStyle={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      containerClassName={className}
    />
  );
};

export default VectorMap;
