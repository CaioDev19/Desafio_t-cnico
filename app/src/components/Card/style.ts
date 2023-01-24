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
`

export const SecondaryCard = styled.div`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.25rem 1.4rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`
export const SecondaryCardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  img {
    height: 50px;
    width: 50px;
  }
`
export const SecondaryCardRight = styled(SecondaryCardLeft)`
  gap: 3rem;
  min-width: 55%;
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
  padding: 0.1rem 0.5rem;

  button {
    all: unset;
    box-sizing: border-box;

    cursor: pointer;
  }
`
export const CounterText = styled.span`
  border-left: solid 0.5px ${({ theme }) => theme.COLORS.gray_100};
  border-right: solid 0.5px ${({ theme }) => theme.COLORS.gray_100};
  padding: 0 0.25rem;
`
