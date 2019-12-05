import styled, { css } from '@emotion/styled';
import { Anchor } from 'Components/shared';

import { colors } from 'Constants';

const Button = styled(Anchor).attrs(props => ({ underline: false }))`
  padding: ${props => (props.wide ? '12px 36px' : '12px 24px')};
  color: ${props => (props.secondary ? colors.accent : colors.textOnAccent)};
  background-color: ${props =>
    props.secondary ? 'transparent' : colors.accent};
  outline: none;
  border: 2px solid ${colors.accent};
  transition: 0.2s all;
  cursor: pointer;
  text-align: center;

  :hover {
    ${props => props.secondary && css(`background-color: ${colors.accent}`)}
    color: ${props => (props.secondary ? colors.text : colors.accent)};
  }
`;

export default Button;
