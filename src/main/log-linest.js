import React from 'react';
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

const Chart = props => {
  const Line = LineSeries;
  const { series1, series2 } = props;

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
        text="Number of cumulative cases [log of]"
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
      <Line className="second-series" data={null} />
      <Line
        className="third-series"
        curve={'curveMonotoneX'}
        data={series2}

      />
      {/*<Line
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

export default Chart;

/*{
  const { series } = props;

  const series1 = series
    // remove zeroes
    .filter(z => z.y > 0)
    // take the log
    .map(z => {
      return {
        x: z.x,
        y: Math.log(z.y),
      }
    })

  const l = linest(series1);
  console.log(l)

  const xs = series1.map(_ => _.x);

  const series2 = estimatedY(xs, l);

  return <Chart series1={series1} series2={series2}/>
}*/