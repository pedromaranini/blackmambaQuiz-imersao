import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #DDC611;
  color: #0C0355;
  border-radius: 4px;
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-family: JetBrains Mono;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;