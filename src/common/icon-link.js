import React from 'react';

export default props => {
  const { name, href } = props;
  return <a aria-label={name} href={href}>
    <i className={`fa fa-${name}`} aria-hidden="true"/>
  </a>;
};
