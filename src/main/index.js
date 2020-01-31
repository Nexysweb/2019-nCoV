import React from 'react';

import Data from '../data';

import Table from './table';
import Chart from './chart';
import LogLinest from './log-linest';
import Predict from './predict';
import { linReg } from './utils';

export default () => {
  const series1 = Data.map(z => {
    return {x: z.dayIndex, y: z.nCum};
  });

  const { seriesEst, seriesLinEst, seriesLin, linest} = linReg(series1)

  return <>
    <h2>Rate of infection</h2>

    <div className="row">
      <div className="col-md-6">
        <h3>Cumulative cases</h3>
        <Chart series1={series1} series2={seriesEst}/>
      </div>

      <div className="col-md-6">
        <h3>Log linear regression</h3>
        <LogLinest series1={seriesLin} series2={seriesLinEst}/>
      </div>
    </div>
    
    <Table data={Data}/>
    <Predict linest={linest}/>
  </>
}