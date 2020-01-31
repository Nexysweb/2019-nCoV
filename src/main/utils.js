import { linest, estimatedY} from '../lib/math/index';

export const linReg = series => {
  const seriesLin = series
    // remove zeroes
    .filter(z => z.y > 0)
    // take the log
    .map(z => {
      return {
        x: z.x,
        y: Math.log(z.y),
      }
    })

  const l = linest(seriesLin);

  const xs = seriesLin.map(_ => _.x);

  const seriesLinEst = estimatedY(xs, l);

  const seriesEst = seriesLinEst.map(z => {
    return {x: z.x, y: Math.exp(z.y)}
  })

  return {linest: l, seriesLin, seriesLinEst, seriesEst};
}