import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import * as Sc from "./style"
import { Product } from "../../components/Product"
import { SideBar } from "../../components/SideBar"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/config/store"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../store/features/product/productSlice"
import { useEffect } from "react"
import { ProductSkeleton } from "../../components/Product/Skeleton"
import { Error } from "../../components/Error"

export function Home() {
  const { isError, isLoading, products } = useSelector(
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
          {isError ? (
            <Error message="Algo deu errado ao carregar os produtos" />
          ) : isLoading ? (
            <Sc.LoadingContainer>
              <ProductSkeleton amount={8} />
            </Sc.LoadingContainer>
          ) : (
            <Sc.Cards>
              {products.map((product) => {
                return (
                  <Product
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
          )}
        </Sc.MainContent>
        <Footer />
      </Sc.MainContainer>
      <SideBar />
    </>
  )
}
