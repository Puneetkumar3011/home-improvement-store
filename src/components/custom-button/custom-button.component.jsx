import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isCancel, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isCancel ? 'cancel-btn' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
