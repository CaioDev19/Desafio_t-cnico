import styled from "styled-components"
import { Text } from "../../global/styles/Typography"

export const Card = styled.div`
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  max-width: 286px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: 145px;
  object-fit: cover;
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
