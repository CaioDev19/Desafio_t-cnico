import { Placeholder } from "react-bootstrap"
import styled from "styled-components"

export const Container = styled(Placeholder)`
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 218px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;
`
