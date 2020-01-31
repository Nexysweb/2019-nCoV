import React from 'react';

export default props => {
  const { linest } = props;
  const [nInfections, setNinfections ] = React.useState(null);
  const [nDays, setNdays ] = React.useState(null);

  const handleChange = e => {
    const y = Number(e.target.value);

    if (!y || y < 5) {
      setNinfections(null)
      return;
    }

    const {a, b} = linest;

    const ly = Math.log(y);
    const x = (ly - b)/a;

    setNinfections(x);
  }

  const handleChange2 = e => {
    const x = Number(e.target.value);

    if (!x || x < 1) {
      setNdays(null)
      return;
    }

    const {a, b} = linest;
    const ly = a*x + b;

    setNdays(Math.exp(ly));
  }

  return <>
    <h4>Predict</h4>
    <p>Based on the exponential growth model, we can attempt to predict the number of infections at a certain date</p>

    <form>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">Number of infections:</label>
        <div className="col-sm-3">
        <input className="form-control form-control-sm" type="number" onChange={handleChange}/>
        </div>
        <div className="col-sm-3">{nInfections !== null ? (nInfections).toFixed(0) + ' days' : null}</div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">Number of days:</label>
        <div className="col-sm-3">
        <input className="form-control form-control-sm" type="number" onChange={handleChange2}/>
        </div>
        <div className="col-sm-3">{nDays !== null ? (nDays).toFixed(0).toLocaleString() + ' infections' : null}</div>
      </div>
    </form>
  </>
}