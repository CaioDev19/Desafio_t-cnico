import * as Sc from "./style"
import { FaShoppingCart } from "react-icons/fa"
import { Text } from "../../global/styles/Typography"

export function Header() {
  return (
    <Sc.Container>
      <Sc.HeaderContent>
        <Sc.Logo>
          <Text
            type="title"
            as="h1"
            size="xl"
            weight="str"
            color="white"
          >
            MKS
          </Text>
          <Text
            type="title"
            as="span"
            color="white"
            weight="wek"
            size="mdm"
          >
            Sistemas
          </Text>
        </Sc.Logo>
        <Sc.Cart>
          <FaShoppingCart size={20} />
          <Text type="span" as="span" weight="sstr" size="mdm">
            0
          </Text>
        </Sc.Cart>
      </Sc.HeaderContent>
    </Sc.Container>
  )
}
