import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const IconWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 7px;
  pointer-events: none;
  svg {
    stroke: ${COLORS.gray700};
    width: 16px;
    height: 16px;
  }

  pointer-events: none;
`

const SelectComponent = styled.select`
  all: unset;
  appearance: none;
  -webkit-appearance: none;
  font-family: 'Roboto', 'Poppins', sans-serif;
  padding: 8px 24px 8px 16px;
  background-color: ${COLORS.gray50};
  border-radius: 8px;
  color: ${COLORS.gray500};
  font-size: 0.75rem;
  width: 120px;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log('Displayed value: ', displayedValue);

  return (
    <Wrapper>
      <SelectComponent value={value} onChange={onChange}>
        {children}
      </SelectComponent>
      <IconWrapper>
        <Icon strokeWidth={2} id="chevron-down" />
      </IconWrapper>
    </Wrapper>



  );
};

export default Select;
