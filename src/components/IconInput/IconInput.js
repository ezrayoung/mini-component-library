import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...inputProps }) => {
  const iconSize = size === "large" ? 24 : 16;
  const Input = size === "large" ? LargeTextInput : SmallTextInput;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input {...inputProps} style={{ '--width': width + 'px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const BaseTextInputStyles = css`
  font-weight: 700;
  color: inherit;
  border: none;
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const SmallTextInput = styled.input`
  ${BaseTextInputStyles};
  font-size: ${14 / 16}rem;
  padding: 4px;
  padding-left: 24px;
  border-bottom: 1px solid ${COLORS.black};
`;

const LargeTextInput = styled.input`
  ${BaseTextInputStyles};
  font-size: ${18 / 16}rem;
  padding: 7px;
  padding-left: 36px;
  border-bottom: 2px solid ${COLORS.black};
`;

export default IconInput;
