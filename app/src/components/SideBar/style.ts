import styled from "styled-components"
import { Text } from "../../global/styles/Typography"

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.blue};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  width: 35%;
  max-width: 486px;
  min-width: 338px;
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
`
export const SideBarUpperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;

  & > ${Text} {
    line-height: 2rem;
  }
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
export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const EndButton = styled.button`
  all: unset;
  box-sizing: border-box;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.black};
  padding: 1.8rem 0;
`
