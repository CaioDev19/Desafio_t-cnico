import styled from "styled-components"

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  gap: 1.5rem;
  min-height: 50vh;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    flex-direction: column;
  }
`
