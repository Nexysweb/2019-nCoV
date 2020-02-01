
import React from 'react';
import {formatDate, addDays, initDate} from './utils';
import GeoMap from './geo-map';

const Table = props => {
  const { data } = props;

  return <table className="table table-striped table-responsive">
    <thead>
      <tr>
        <th>Country</th>
        <th>Cases</th>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => <tr key={i}><td>{d.country}</td><td>{d.n}</td></tr>)}
    </tbody>
  </table>
}

export const Nav = props => {
  const { data, onClick, dayIndex } = props;
  
  const days = data.map(x => {
    return {dayIndex: x.dayIndex, date: addDays(initDate, x.dayIndex)}
  })

  const n = days.length;

  return <>
    <input type="range" value={-dayIndex} min={-days[0].dayIndex} max={-days[n-1].dayIndex} step={1} onChange={(e) => onClick(-Number(e.target.value))}/>
    <ul className="nav nav-pills">
    {days.map((d, i) => <li key={i} style={{cursor: 'pointer'}} className="nav-item" onClick={() => onClick(d.dayIndex)}>
      Day {d.dayIndex}. <small>
        <span  className={`nav-link ${d.dayIndex === dayIndex ? 'active' : ''}`}>{formatDate(d.date)}</span>
      </small>
    </li>)}
  </ul>
  </>
}

export const WrapTableWithDayNav = props => {
  const { data } = props;
  const [ dayIndex, setDayIndex ] = React.useState(0);

  // find the correct line in the array based on the `dayIndex` selected
  // if none was found, the table is not displayed
  const lineData = data.find(x => x.dayIndex === dayIndex);

  return <>
    <Nav data={data} onClick={setDayIndex}/>
    {lineData && <Table data={lineData.data}/>}
  </>
}

export const WrapMapWithDayNav = props => {
  const { data } = props;
  const [ dayIndex, setDayIndex ] = React.useState(data.length);

  // find the correct line in the array based on the `dayIndex` selected
  // if none was found, the table is not displayed
  const lineData = data.find(x => x.dayIndex === dayIndex);

  return <>
    <Nav data={data} dayIndex={dayIndex} onClick={setDayIndex}/>
    {lineData && <GeoMap data={lineData.data}/>}
  </>
}