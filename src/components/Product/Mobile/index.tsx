import { Text } from "../../../global/styles/Typography"
import { ReducedProduct } from "../../../global/types/product"
import * as DefaultSc from "../style"
import * as Sc from "./style"
import { useDispatch } from "react-redux"
import {
  addProduct,
  removeAllProductsById,
  removeProduct,
} from "../../../store/features/cart/cartSlice"

export function MobileProduct({
  id,
  name,
  photo,
  price,
  amount,
  description,
}: ReducedProduct & {
  amount?: number
  totalPrice?: number
}) {
  const dispatch = useDispatch()

  return (
    <Sc.MobileCard>
      <Sc.CloseButton
        onClick={() => dispatch(removeAllProductsById(id))}
      >
        X
      </Sc.CloseButton>
      <DefaultSc.CardImage src={photo} />
      <DefaultSc.CardText>
        <Text
          type="title"
          as="h2"
          size="rgl"
          weight="rgl"
          color="black_200"
          position="center"
        >
          {name}
        </Text>
        <Sc.LowerContent>
          <Sc.MobileCounter>
            <button onClick={() => dispatch(removeProduct(id))}>
              -
            </button>
            <Sc.MobileCounterText>
              <Text
                type="span"
                as="span"
                size="rgl"
                weight="sstr"
                color="black"
              >
                {amount}
              </Text>
            </Sc.MobileCounterText>
            <button
              onClick={() =>
                dispatch(
                  addProduct({
                    id,
                    name,
                    photo,
                    description,
                    price,
                  })
                )
              }
            >
              +
            </button>
          </Sc.MobileCounter>
          <DefaultSc.PriceTag>
            <Text
              type="span"
              as="span"
              weight="sstr"
              size="rgl"
              color="white"
            >
              R$ {Number(price).toFixed(0)}
            </Text>
          </DefaultSc.PriceTag>
        </Sc.LowerContent>
      </DefaultSc.CardText>
    </Sc.MobileCard>
  )
}
