import React from 'react';

const Table = props => {
  const { data } = props;

  return <table className="table table-responsive">

    <tbody>
      <tr >
        <th>Day Index</th>
        {data.map((r, i) => <td key={i}>{r.dayIndex}</td>)}
      </tr>
      {/*<tr>
      <th>China</th>
        {data.map((r, i) => <td key={i}>{r.nCum}</td>)}
      </tr>*/}
      <tr>
      <th>Number of cases</th>
        {data.map((r, i) => <td key={i}>{r.nCum}</td>)}
      </tr>
    </tbody>
  </table>
}

export default (props) => {
  const [show, setShow] = React.useState(true);
  const label = (show ? 'Hide' : 'Show') + ' table'
  return <>
    {show && <Table {...props}/>}
    <button type="button" className="btn btn-info btn-sm" onClick={() => setShow(!show)}>{label}</button>
    <br/>
  </>
};