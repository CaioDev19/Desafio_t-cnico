import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import * as Sc from "./style"
import { Card } from "../../components/Card"
import { Text } from "../../global/styles/Typography"

const products = [
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
  {
    image: "https://via.placeholder.com/500",
    title: "Apple Watch Series 4 GPS",
    price: "R$399",
    description: "Redesigned from scratch and completely revised.",
  },
]

export function Home() {
  return (
    <Sc.MainContainer>
      <Header />
      <Sc.MainContent>
        <Sc.Cards>
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                image={product.image}
                price={product.price}
                title={product.title}
                description={product.description}
              />
            )
          })}
        </Sc.Cards>
      </Sc.MainContent>
      <Footer />
      <Sc.SideBar>
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
            <Sc.CloseButton>X</Sc.CloseButton>

            <Sc.CardContainer>
              <Sc.SideBarCard>
                <Sc.SideBarCardLeft>
                  <img
                    src="https://via.placeholder.com/500"
                    alt="dasd"
                  />
                  <Text
                    type="span"
                    as="span"
                    color="black_200"
                    size="sml"
                    weight="rgl"
                  >
                    Apple Watch <br />
                    Series 4 GPS
                  </Text>
                </Sc.SideBarCardLeft>
                <Sc.SideBarCardRight>
                  <Sc.CounterContainer>
                    <Text
                      type="span"
                      as="span"
                      size="exml"
                      weight="rgl"
                    >
                      Qtd:
                    </Text>
                    <Sc.Counter>
                      <button>-</button>
                      <span>
                        <Text type="span" as="span" color="gray_100">
                          |
                        </Text>{" "}
                        1{" "}
                        <Text type="span" as="span" color="gray_100">
                          |
                        </Text>
                      </span>
                      <button>+</button>
                    </Sc.Counter>
                  </Sc.CounterContainer>
                  <Text
                    type="span"
                    as="span"
                    color="black_200"
                    size="sml"
                    weight="sstr"
                  >
                    R$ 399
                  </Text>
                </Sc.SideBarCardRight>
              </Sc.SideBarCard>

              <Sc.SideBarCard>
                <Sc.SideBarCardLeft>
                  <img
                    src="https://via.placeholder.com/500"
                    alt="dasd"
                  />
                  <Text
                    type="span"
                    as="span"
                    color="black_200"
                    size="sml"
                    weight="rgl"
                  >
                    Apple Watch <br />
                    Series 4 GPS
                  </Text>
                </Sc.SideBarCardLeft>
                <Sc.SideBarCardRight>
                  <Sc.CounterContainer>
                    <Text
                      type="span"
                      as="span"
                      size="exml"
                      weight="rgl"
                    >
                      Qtd:
                    </Text>
                    <Sc.Counter>
                      <button>-</button>
                      <span>
                        <Text type="span" as="span" color="gray_100">
                          |
                        </Text>{" "}
                        1{" "}
                        <Text type="span" as="span" color="gray_100">
                          |
                        </Text>
                      </span>
                      <button>+</button>
                    </Sc.Counter>
                  </Sc.CounterContainer>
                  <Text
                    type="span"
                    as="span"
                    color="black_200"
                    size="sml"
                    weight="sstr"
                  >
                    R$ 399
                  </Text>
                </Sc.SideBarCardRight>
              </Sc.SideBarCard>
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
                R$ 798
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
      </Sc.SideBar>
    </Sc.MainContainer>
  )
}
