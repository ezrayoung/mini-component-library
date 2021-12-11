/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const heightLookup = {
  small: 8,
  medium: 12,
  large: 24,
};
const radiusLookup = {
  small: 4,
  medium: 4,
  large: 8,
}

/**
 * 
 * @param {Object} props
 * @param {number} props.value
 * @param {"small"|"medium"|"large"} props.size
 */
const ProgressBar = ({ value, size }) => {
  const height = heightLookup[size];
  const radius = radiusLookup[size];
  const padding = size === "large" ? 4 : 0;

  return (
    <Wrapper height={height} radius={radius} padding={padding} role="progressbar" aria-valuenow={value} >
      <FillWrapper>
        <Fill value={value} />
      </FillWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${COLORS.transparentGray15};
  width: 100%;
  max-width: 370px;
  height: ${props => props.height}px;
  border-radius: ${props => props.radius}px;
  padding: ${props => props.padding}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const FillWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const Fill = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${props => props.value}%;
`;

export default ProgressBar;
