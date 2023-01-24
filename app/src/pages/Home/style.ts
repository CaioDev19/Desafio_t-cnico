import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    gap: 2.5rem;
  }
`
export const MainContent = styled.main`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    width: 95%;
    max-width: 95%;
  }
`
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1.4rem;
  flex-wrap: wrap;
`
