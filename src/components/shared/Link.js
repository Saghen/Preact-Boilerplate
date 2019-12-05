import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'raviger';
import { colors } from 'Constants';
import isExternal from 'is-url-external';

const Anchor = props => {
  return isExternal(props.to) ? (
    <a target="_blank" rel="noopener noreferrer" href={props.to} {...props} />
  ) : (
    <Link {...props} />
  );
};

export default styled(Anchor)`
  position: relative;
  color: ${props => props.color || colors.accent};
  text-decoration: none;
  cursor: pointer;

  ::after {
    ${props => props.underline && "content: '';"}
    background-color: ${props => props.color || colors.accent};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 0;
    transition: 0.2s width;
  }

  :hover::after {
    width: 100%;
  }
`;
