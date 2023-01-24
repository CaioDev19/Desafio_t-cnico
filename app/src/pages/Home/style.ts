import styled from "styled-components"
import { Text } from "../../global/styles/Typography"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.tablet}px) {
    gap: 2.5rem;
  }
`
export const MainContent = styled.main`
  width: 100%;
  max-width: 1440px;
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
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
`
export const SideBar = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.blue};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  width: 486px;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.8rem;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`
export const SideBarContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  & > ${Text} {
    line-height: 2rem;
  }
`
export const SideBarUpperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
`
export const SideBarLowerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`
export const CloseButton = styled.button`
  all: unset;
  box-sizing: border-box;

  cursor: pointer;

  position: absolute;
  top: 39px;
  right: 22px;

  background-color: ${({ theme }) => theme.COLORS.black};
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.rgl};
  font-size: ${({ theme }) => theme.FONT_SIZE.rgl};
  line-height: 15px;
  padding: 0.5rem 0.75rem;
  border-radius: 50%;

  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const SideBarCard = styled.div`
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
export const SideBarCardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  img {
    height: 50px;
    width: 50px;
  }
`
export const SideBarCardRight = styled(SideBarCardLeft)`
  gap: 3rem;
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
export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const EndButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black};
  padding: 1.8rem 0;
`
