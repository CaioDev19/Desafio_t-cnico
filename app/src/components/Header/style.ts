import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.blue};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    position: sticky;
    top: 0;
  }
`
export const HeaderContent = styled.div`
  width: 90%;

  padding: 1.8rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const Cart = styled.div`
  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 0.8rem 1.25em;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
