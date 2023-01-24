import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../config/store"
import { toogle } from "../../features/sideBar/sideBarSlice"
import { Card } from "../Card"
export function SideBar() {
  const {
    sideBar: { isOpen },
    cart: { products, totalPrice },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  if (!isOpen) return null

  return (
    <Sc.Container>
      <Sc.SideBarContent>
        <Sc.SideBarUpperContent>
          <Text
            type="title"
            as="h2"
            size="exl"
            color="white"
            weight="sstr"
            position="left"
          >
            Carrinho <br /> de Compras
          </Text>
          <Sc.CloseButton onClick={() => dispatch(toogle())}>
            X
          </Sc.CloseButton>
          <Sc.CardContainer>
            {products.map((product) => (
              <Card key={product.id} {...product} secondary />
            ))}
          </Sc.CardContainer>
        </Sc.SideBarUpperContent>
        <Sc.SideBarLowerContent>
          <Sc.TotalContainer>
            <Text
              type="title"
              as="h3"
              color="white"
              size="exl"
              weight="sstr"
            >
              Total:
            </Text>
            <Text
              type="title"
              as="h3"
              color="white"
              size="exl"
              weight="sstr"
            >
              R$ {totalPrice.toFixed(2)}
            </Text>
          </Sc.TotalContainer>
        </Sc.SideBarLowerContent>
      </Sc.SideBarContent>
      <Sc.EndButton>
        <Text
          type="span"
          as="span"
          color="white"
          size="exl"
          weight="sstr"
        >
          Finalizar Compra
        </Text>
      </Sc.EndButton>
    </Sc.Container>
  )
}
