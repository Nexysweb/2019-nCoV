import Who from './who';
//import Main from './main/index';
//import Resources from './resources';

const menus = [
  {name: 'WHO Data', 'link': '/who', Component: Who},
  /*{name: 'Prediction', 'link': '/prediction', Component: Main},
  {name: 'Resources', 'link': '/resources', Component: Resources},*/
];

export const defaultPage = Who;

export default menus;