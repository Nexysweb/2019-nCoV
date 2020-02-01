import React from 'react';
import ReactTooltip from "react-tooltip";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

import * as Utils from './utils';

// url to a valid topojson file
const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorGradient = {
  start: {r: 255, g: 204, b: 102},
  end: {r: 128, g: 0, b: 0},
}

export const GeoMap = props => {
  const { data, setTooltipContent } = props;
  const isos = data.map(_ => _.iso2);

  const getProps = (geoProp) => {
    const iso2 = geoProp.ISO_A2
    const idx = isos.indexOf(iso2);

    if(idx > -1) {
      const {n} = data[idx];
      
      const fill = Utils.rgbToStyle(Utils.fRGB(colorGradient.start, colorGradient.end, Math.log(n), Math.log(50000)));
      const tooltip = `${geoProp.NAME}, ${n} cases`;
      return { fill, tooltip};
    }

    return {fill: 'grey', tooltip: null};
  }

  return (<ComposableMap data-tip="" projectionConfig={{ scale: 180 }}>
    <Geographies geography={geoUrl}>
    {({geographies}) => geographies.map(geo => {
      const {fill, tooltip} = getProps(geo.properties);

      return <Geography
        onMouseEnter={() => setTooltipContent(tooltip)}
        onMouseLeave={() => setTooltipContent('')}
        key={geo.rsmKey}
        geography={geo}
        fill={fill}
      />
    })}
    </Geographies>
  </ComposableMap>);
}

export const GeoMapWTooltip = props => {
  const [ content, setContent ] = React.useState('');
  const { data } = props;

  return <>
    <GeoMap data={data} setTooltipContent={setContent}/>
    <ReactTooltip>{content}</ReactTooltip>
  </>
}

export default GeoMapWTooltip;