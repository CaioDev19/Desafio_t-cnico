import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { FiShoppingBag } from "react-icons/fi"

interface Props {
  image: string
  title: string
  price: string
  description: string
}

export function Card({ image, title, price, description }: Props) {
  return (
    <Sc.Card>
      <Sc.CardImage src={image} />
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
            {title}
          </Text>
          <Sc.PriceTag>
            <Text
              type="span"
              as="span"
              weight="sstr"
              size="rgl"
              color="white"
            >
              {price}
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
      <Sc.BuyButton>
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
