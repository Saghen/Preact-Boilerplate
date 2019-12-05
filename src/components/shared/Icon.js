import React from 'react';
import styled from 'styled-components';
import { colors } from 'Constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function getSize(size) {
  if (size === '4x') return '96px';
  if (size === '2x') return '48px';
  return '36px';
}

function getFontSize(size) {
  if (size === '4x') return '2em';
  if (size === '2x') return '1.5em';
  return '1em';
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.background ? props.background : colors.accent)};
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  color: ${props => (props.color ? props.color : colors.textOnAccent)};
  align-self: center !important;
  font-size: ${props => getFontSize(props.size)};
`;

export default ({ children, icon, size, background, color }) => (
  <Icon color={color} background={background} size={size} isIcon={!!icon}>
    {icon ? <FontAwesomeIcon icon={icon} size={size} /> : children}
  </Icon>
);
