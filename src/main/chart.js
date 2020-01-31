import React from 'react';
//import {curveCatmullRom} from 'd3-shape';
import '../../node_modules/react-vis/dist/style.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  MarkSeries
} from 'react-vis';

export default props => {
  const { series1, series2 } = props;
  const Line = LineSeries;

  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <ChartLabel 
        text="Day Index"
        className="alt-x-label"
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
        />

      <ChartLabel 
        text="Number of cumulative cases"
        className="alt-y-label"
        includeMargin={false}
        xPercent={0.06}
        yPercent={0.06}
        style={{
          transform: 'rotate(-90)',
          textAnchor: 'end'
        }}
        />
      <MarkSeries
        lineStyle={null}
        data={series1}
        size={2}
      />
      <Line
        className="third-series"
        curve={'curveMonotoneX'}
        style={{
          // note that this can not be translated to the canvas version
          strokeDasharray: '2 2'
        }}
        data={series2}

      />
      {/*<Line
        className="third-series"
        curve={'curveMonotoneX'}
        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
        strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
      />
      <Line
        className="fourth-series"
        curve={curveCatmullRom.alpha(0.5)}
        style={{
          // note that this can not be translated to the canvas version
          strokeDasharray: '2 2'
        }}
        data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
      />*/}
    </XYPlot>
  );
  
}