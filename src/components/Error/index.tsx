import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { BsEmojiFrownFill } from "react-icons/bs"
import { FontSize } from "../../global/styles/theme"

interface Props {
  size?: FontSize
  message: string
}
export function Error({ size = "exl", message }: Props) {
  return (
    <Sc.ErrorContainer>
      <Text
        type="title"
        as="h2"
        color="black"
        weight="str"
        size={size}
      >
        {message}
      </Text>
      <BsEmojiFrownFill size={50} color="red" />
    </Sc.ErrorContainer>
  )
}
