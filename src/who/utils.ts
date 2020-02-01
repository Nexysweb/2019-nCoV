export const formatDate = (date:Date):string => date.toLocaleDateString();
export const addDays = (date:Date, nDays:number):Date => new Date(+date + nDays *60*60*24000);

interface HashMap{
  [key1:string]:{[key2:string]:number}
};

export const formatWhoData = (data:[{dayIndex: number, data: [{iso2:string, n:number}]}]):HashMap => {
  const fData:HashMap = {};
  data.map(d => {
    const { dayIndex } = d;

    d.data.map(c => {
      const { iso2, n} = c;

      if (!fData[iso2]) {
        fData[iso2] = {};
      }

      fData[iso2][dayIndex] = n;

      return true;
    })

    return true;
  });

  return fData;
};

export const initDate = new Date('2020-01-20');

interface rgbColor{
  r: number,
  g: number,
  b: number
}

export const fRGB = (start: rgbColor, end: rgbColor, nVal:number, range:number = 100):rgbColor => {
  const delta:rgbColor = {r: end.r - start.r, g: end.g - start.g, b: end.b - start.b};

  const incCoeff = nVal/range;
  const r = start.r + incCoeff * delta.r;
  const g = start.g + incCoeff * delta.g;
  const b = start.b + incCoeff * delta.b;

  return {r, g, b};
}

export const rgbToStyle = (r:rgbColor):string => `rgb(${r.r},${r.g},${r.b})`;
