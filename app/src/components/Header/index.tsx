import * as Sc from "./style"
import { FaShoppingCart } from "react-icons/fa"
import { Text } from "../../global/styles/Typography"
import { useDispatch, useSelector } from "react-redux"
import { toogle } from "../../features/sideBar/sideBarSlice"
import { RootState } from "../../config/store"

export function Header() {
  const { totalAmount } = useSelector(
    (state: RootState) => state.cart
  )
  const dispatch = useDispatch()

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
        <Sc.Cart onClick={() => dispatch(toogle())}>
          <FaShoppingCart size={20} />
          <Text type="span" as="span" weight="sstr" size="mdm">
            {totalAmount}
          </Text>
        </Sc.Cart>
      </Sc.HeaderContent>
    </Sc.Container>
  )
}
