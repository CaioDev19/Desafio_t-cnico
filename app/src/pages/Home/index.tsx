import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import * as Sc from "./style"
import { Card } from "../../components/Card"
import { SideBar } from "../../components/SideBar"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../config/store"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../features/product/productSlice"
import { useEffect } from "react"

export function Home() {
  const { isLoading, products } = useSelector(
    (state: RootState) => state.products
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Sc.MainContainer>
        <Header />
        <Sc.MainContent>
          <Sc.Cards>
            {!isLoading &&
              products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    name={product.name}
                    description={product.description}
                    photo={product.photo}
                  />
                )
              })}
          </Sc.Cards>
        </Sc.MainContent>
        <Footer />
      </Sc.MainContainer>
      <SideBar />
    </>
  )
}
