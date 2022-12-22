/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BarContainer = styled.progress`
  ${({ size }) => css`
      &:not([value]) {
      /* Styling here */
      }

      &[value] {
        -webkit-appearance: none;
        appearance: none;
        ${size === "small" && css`
          width: 100px;
          height: 15px;
        `}

        ${size === "medium" && css`
          width: 150px;
          height: 18px;
        `}

        ${size === "large" && css`
          width: 250px;
          height: 20px;
        `}
       
      }

      &[value]::-webkit-progress-bar {
        background-color: #eee;
        padding: 4px;
        border-radius: 8px;
        box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
      }

      &[value]::-webkit-progress-value {
        background: ${COLORS.primary};
        border-radius: 8px 0 0 8px; 
      }
      
      overflow: hidden;
      /* &[value="100"]::-webkit-progress-value {
        border-radius: 8px; 
      } */

  `}
 
`

const ProgressBar = ({ value, size }) => {
  return <>
    <BarContainer id="loadinglabel" max="100" value={value} size={size} />
    <VisuallyHidden>ProgressBar</VisuallyHidden>
  </>;
};

export default ProgressBar;
