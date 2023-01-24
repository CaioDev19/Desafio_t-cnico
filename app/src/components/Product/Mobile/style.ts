import styled from "styled-components"
import { Card, Counter, CounterText } from "../style"

export const MobileCard = styled(Card)`
  width: 100%;
  position: relative;
  padding: 1.4rem 0;
`
export const LowerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MobileCounter = styled(Counter)`
  width: 50%;
  gap: 1.4rem;
  padding: 0.3rem 0;

  button {
    font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  }
`
export const MobileCounterText = styled(CounterText)`
  padding: 0 0.75rem;
`
export const CloseButton = styled.button`
  all: unset;
  box-sizing: border-box;

  cursor: pointer;

  position: absolute;
  top: 0.3rem;
  right: 0.5rem;

  color: ${({ theme }) => theme.COLORS.black};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.str};
  font-size: ${({ theme }) => theme.FONT_SIZE.exl};

  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`
