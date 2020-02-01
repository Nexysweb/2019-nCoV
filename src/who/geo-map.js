import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

import * as Utils from './utils';

// url to a valid topojson file
const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const color = {
  start: {r: 255, g: 204, b: 102},
  end: {r: 128, g: 0, b: 0},
}

export default props => {
  const { data } = props;
  const isos = data.map(_ => _.iso2);

  const getFill = (iso2) => {
    const idx = isos.indexOf(iso2);

    if(idx > -1) {
      const {n} = data[idx];
      
      return Utils.rgbToStyle(Utils.fRGB(color.start, color.end, Math.log(n), Math.log(50000)));
    }

    return 'grey';
  }

  return (<ComposableMap>
    <Geographies geography={geoUrl}>
    {({geographies}) => geographies.map(geo => {
      const fill = getFill(geo.properties.ISO_A2);

      return <Geography key={geo.rsmKey} geography={geo} fill={fill} />
    })}
    </Geographies>
  </ComposableMap>);
}