import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store/config/store"
import { toogle } from "../../store/features/sideBar/sideBarSlice"
import { Product } from "../Product"
import { useWindow } from "../../hooks/useWindow"
import { MobileProduct } from "../Product/Mobile"
import { useTheme } from "styled-components"
import { clearCart } from "../../store/features/cart/cartSlice"

export function SideBar() {
  const {
    sideBar: { isOpen },
    cart: { products, totalPrice },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const { width } = useWindow()
  const theme = useTheme()

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
            {width! < theme.BREAKPOINTS.tablet
              ? products.map((product) => (
                  <MobileProduct key={product.id} {...product} />
                ))
              : products.map((product) => (
                  <Product key={product.id} {...product} secondary />
                ))}
          </Sc.CardContainer>
        </Sc.SideBarUpperContent>
      </Sc.SideBarContent>
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
        <Sc.EndButton
          onClick={() => {
            if (products.length === 0) return
            dispatch(clearCart())
          }}
        >
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
      </Sc.SideBarLowerContent>
    </Sc.Container>
  )
}
