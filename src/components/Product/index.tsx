import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { FiShoppingBag } from "react-icons/fi"
import { useDispatch } from "react-redux"
import {
  addProduct,
  removeAllProductsById,
  removeProduct,
} from "../../store/features/cart/cartSlice"
import { ReducedProduct } from "../../global/types/product"
import { transformToReal } from "../../util/currency"

export function Product({
  id,
  name,
  photo,
  description,
  price,
  secondary,
  amount,
}: ReducedProduct & {
  secondary?: boolean
  amount?: number
}) {
  const dispatch = useDispatch()

  if (secondary) {
    return (
      <Sc.SecondaryCard>
        <Sc.SecondaryCloseButton
          onClick={() => dispatch(removeAllProductsById(id))}
        >
          X
        </Sc.SecondaryCloseButton>
        <Sc.SecondaryCardLeft>
          <Sc.ImageSecondary src={photo} alt={name} />
          <Text
            type="span"
            as="span"
            color="black_200"
            size="sml"
            weight="rgl"
          >
            {name}
          </Text>
        </Sc.SecondaryCardLeft>
        <Sc.SecondaryCardRight>
          <Sc.CounterContainer>
            <Text type="span" as="span" size="exml" weight="rgl">
              Qtd:
            </Text>
            <Sc.Counter>
              <button onClick={() => dispatch(removeProduct(id))}>
                -
              </button>
              <Sc.CounterText>
                <Text
                  type="span"
                  as="span"
                  size="exml"
                  weight="sstr"
                  color="black"
                >
                  {amount}
                </Text>
              </Sc.CounterText>
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
            </Sc.Counter>
          </Sc.CounterContainer>
          <Text
            type="span"
            as="span"
            color="black_200"
            size="sml"
            weight="sstr"
          >
            R$ {transformToReal(Number(price))}
          </Text>
        </Sc.SecondaryCardRight>
      </Sc.SecondaryCard>
    )
  }

  return (
    <Sc.Card>
      <Sc.CardImage src={photo} />
      <Sc.CardText>
        <Sc.UpperCardText>
          <Text
            type="title"
            as="h2"
            size="rgl"
            weight="rgl"
            color="black_200"
            position="left"
          >
            {name}
          </Text>
          <Sc.PriceTag>
            <Text
              type="span"
              as="span"
              weight="sstr"
              size="rgl"
              color="white"
            >
              R$ {transformToReal(Number(price))}
            </Text>
          </Sc.PriceTag>
        </Sc.UpperCardText>
        <Text
          type="paragraph"
          as="p"
          size="exml"
          weight="wek"
          position="left"
        >
          {description}
        </Text>
      </Sc.CardText>
      <Sc.BuyButton
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
        <FiShoppingBag size={20} color="white" />
        <Text
          type="span"
          as="span"
          weight="str"
          size="rgl"
          color="white"
        >
          COMPRAR
        </Text>
      </Sc.BuyButton>
    </Sc.Card>
  )
}
