import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { ChevronDown } from 'react-feather';

const Select = ({ label, value, onChange, children, disabled }) => {
  const selectRef = useRef(null);
  const displayedValue = getDisplayedValue(value, children);
  const handleClick = useCallback(() => {
    selectRef.current.click();
  }, []);

  return (
    <Wrapper>
      <NativeSelect disabled={disabled} ref={selectRef} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit aria-hidden onClick={handleClick}>
        {displayedValue}
        <ChevronDown />
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  width: fit-content;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  margin: 2px;

  & > :last-child {
    margin-top: -9px;
    margin-bottom: -9px;
    margin-left: 24px;
  }

  ${NativeSelect}:hover:not(:disabled) + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    margin: 0px;
    border: 2px solid #4374CB;
  }
`;


export default Select;
