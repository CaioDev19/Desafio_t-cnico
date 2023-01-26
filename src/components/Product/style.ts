import styled from "styled-components"
import { Text } from "../../global/styles/Typography"

export const Card = styled.div`
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 218px;

  padding-top: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.85rem;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    width: 251px;

    transition: none;
    &:hover {
      transform: none;
    }
  }
`
export const CardImage = styled.img`
  height: 138px;
  width: 180px;

  border-radius: 8px 8px 0px 0px;
`
export const CardText = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${Text} {
    max-width: 25ch;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    ${Text} {
      max-width: 30ch;
    }
  }
`
export const UpperCardText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${Text} {
    max-width: 45%;
  }
`
export const PriceTag = styled.div`
  padding: 0.4rem 0.65rem;
  background-color: ${({ theme }) => theme.COLORS.black_100};
  border-radius: 5px;
`
export const BuyButton = styled.button`
  all: unset;
  box-sizing: border-box;

  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.85rem;

  background-color: ${({ theme }) => theme.COLORS.blue};
  border-radius: 0px 0px 8px 8px;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    transition: none;
    &:hover {
      opacity: 1;
    }
  }
`

export const SecondaryCard = styled.div`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.25rem 0.8rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;

  position: relative;
`
export const SecondaryCardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  width: 45%;
`
export const ImageSecondary = styled.img`
  height: 50px;
  width: 50px;
`
export const SecondaryCardRight = styled(SecondaryCardLeft)`
  width: 50%;

  & > ${Text} {
    flex-grow: 1;
  }
`
export const SecondaryCloseButton = styled.button`
  all: unset;
  box-sizing: border-box;

  cursor: pointer;

  position: absolute;
  top: -8px;
  right: -4px;

  background-color: ${({ theme }) => theme.COLORS.black};
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.rgl};
  font-size: ${({ theme }) => theme.FONT_SIZE.sml};
  line-height: 15px;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;

  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

export const CounterContainer = styled.div`
  position: relative;
  & > ${Text} {
    position: absolute;
    top: -1.25rem;
  }
`
export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.white};
  border: 0.3px solid ${({ theme }) => theme.COLORS.gray_100};
  border-radius: 4px;
  padding: 0 0.3rem;

  button {
    all: unset;
    box-sizing: border-box;

    cursor: pointer;
  }
`
export const CounterText = styled.span`
  border-left: solid 0.5px ${({ theme }) => theme.COLORS.gray_100};
  border-right: solid 0.5px ${({ theme }) => theme.COLORS.gray_100};
  text-align: center;
  width: 1.5rem;
`
