import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Input = styled.input`
  ${({ size }) => css`
      position: relative;
      all: unset;
      width: 100%;
      padding: 8px 4px 4px 24px;
      font-size: 0.75rem;
      &:focus-visible {
        outline: 2px solid ${COLORS.primary};
        outline-offset: 5px;
      }
      &::placeholder {
        color: ${COLORS.gray300}
      }
  `}
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  /* width: 250px; */
  width: ${props => props.width + 'px'};
  border-bottom: 1px solid;
  border-radius: 2px;
`
const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 16px;
  margin-top: auto;
  margin-bottom: auto;
  pointer-events: none;
  svg {
    stroke: ${COLORS.gray700};
    width: ${props => props.size === 'large' ? '24px' : '16px'};
    height: ${props => props.size === 'large' ? '24px' : '16px'};
  }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Wrapper size={size} width={width}>
        <Input id="searchInput" size={size} placeholder={placeholder} defaultValue={label} />
        <IconWrapper size={size}>
          <Icon strokeWidth={2} id={icon} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default IconInput;
