import * as U from './utils';

test('rgbToStyle', () => {
  expect(U.rgbToStyle({r: 100, g: 120, b: 140})).toEqual('rgb(100,120,140)');
});