import React from 'react';


import WHOData from '../data/who';
import Countries from '../data/country';

import {formatDate, formatWhoData, addDays, initDate } from './utils';
import { WrapMapWithDayNav } from './table-day'

import '../index.css';

const TableAllDays = props => {
  const { data } = props;
  const fData = formatWhoData(data);

  return <table className="table table-bordered table-responsive">
    <thead>
      <tr>
        <th>Country</th>
        {data.map((d, i) => <th key={i}>{d.dayIndex} <small>{formatDate(addDays(initDate, d.dayIndex))}</small></th>)}
      </tr>
    </thead>
    <tbody>
      {Object.keys(fData).map((iso2, j) => {
        const cases = fData[iso2];

        return <tr key={j}>
         <td>{Countries[iso2]} <small>{iso2}</small></td>
          {data.map((d, i) => <td key={i} style={{textAlign: 'right'}}>{cases[d.dayIndex]}</td>)}
        </tr>
      })}
    </tbody>
  </table>
}

const rData = WHOData.reverse();

export default props => {
  
  return <>
    <h1>WHO Data</h1>
    <p>WHO data displayed dynamically</p>
    <WrapMapWithDayNav data={rData} />
    
    <TableAllDays data={rData}/>
    {/*<Nav data={WHOData}/>
<GeoMap data={d}/>*/}
    </>
}