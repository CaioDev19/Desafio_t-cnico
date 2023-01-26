import cartReducer, {
  addProduct,
  removeProduct,
  removeAllProductsById,
  clearCart,
} from "../../store/features/cart/cartSlice"

export const mock = [
  {
    id: 1,
    name: "Iphone 11 128 GB",
    description:
      "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
    price: "5000.00",
  },
  {
    id: 2,
    name: "AirPods",
    description:
      "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
    price: "1200.00",
  },
  {
    id: 3,
    name: "Macbook Air",
    description:
      "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
    price: "8200.00",
  },
]

describe("carSlice", () => {
  describe("addProduct", () => {
    it("should add product to the cart if it doens't exist", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 0,
        totalPrice: 0,
        products: [],
      }

      const state = cartReducer(initialState, addProduct(product))

      expect(state.products).toHaveLength(1)
      expect(state.products[0].id).toBe(product.id)
      expect(state.totalAmount).toBe(1)
      expect(state.totalPrice).toBe(Number(product.price))
      expect(state.products[0].amount).toBe(1)
    })
    it("should increase product amount if it already exists", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 1,
        totalPrice: Number(product.price),
        products: [
          {
            ...product,
            amount: 1,
          },
        ],
      }

      const state = cartReducer(initialState, addProduct(product))

      expect(state.products).toHaveLength(1)
      expect(state.products[0].id).toBe(product.id)
      expect(state.totalAmount).toBe(2)
      expect(state.totalPrice).toBe(Number(product.price) * 2)
      expect(state.products[0].amount).toBe(2)
    })
    it("should increase the total amount and total price", () => {
      const initialProduct = mock[0]
      const initialState = {
        totalAmount: 1,
        totalPrice: Number(initialProduct.price),
        products: [
          {
            ...initialProduct,
            amount: 1,
          },
        ],
      }
      const product = mock[1]

      const state = cartReducer(initialState, addProduct(product))

      expect(state.products).toHaveLength(2)
      expect(state.products[1].id).toBe(product.id)
      expect(state.totalAmount).toBe(2)
    })
  })
  describe("removeProduct", () => {
    it("should return the same state if the product doesn't exist", () => {
      const initialState = {
        totalAmount: 0,
        totalPrice: 0,
        products: [],
      }

      const state = cartReducer(initialState, removeProduct(1))

      expect(state).toEqual(initialState)
    })
    it("should remove product from cart if product amount equals one", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 1,
        totalPrice: Number(product.price),
        products: [
          {
            ...product,
            amount: 1,
          },
        ],
      }

      const state = cartReducer(
        initialState,
        removeProduct(product.id)
      )

      expect(state.products).toHaveLength(0)
      expect(state.totalAmount).toBe(0)
      expect(state.totalPrice).toBe(0)
    })
    it("should decrease product amount if it has more than one", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 2,
        totalPrice: Number(product.price) * 2,
        products: [
          {
            ...product,
            amount: 2,
          },
        ],
      }

      const state = cartReducer(
        initialState,
        removeProduct(product.id)
      )

      expect(state.products).toHaveLength(1)
      expect(state.totalAmount).toBe(1)
      expect(state.totalPrice).toBe(Number(product.price))
      expect(state.products[0].amount).toBe(1)
    })
  })
  describe("removeAllProductsById", () => {
    it("should return the same state if the product doesn't exist", () => {
      const initialState = {
        totalAmount: 0,
        totalPrice: 0,
        products: [],
      }

      const state = cartReducer(
        initialState,
        removeAllProductsById(1)
      )

      expect(state).toEqual(initialState)
    })
    it("should remove all products from the cart", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 4,
        totalPrice:
          Number(product.price) * 2 + Number(mock[1].price) * 2,
        products: [
          {
            ...product,
            amount: 2,
          },
          {
            ...mock[1],
            amount: 2,
          },
        ],
      }

      const state = cartReducer(
        initialState,
        removeAllProductsById(product.id)
      )

      expect(state.products).toHaveLength(1)
      expect(state.totalAmount).toBe(2)
      expect(state.totalPrice).toBe(Number(mock[1].price) * 2)
    })
  })
  describe("clearCart", () => {
    it("should clear the cart", () => {
      const product = mock[0]
      const initialState = {
        totalAmount: 2,
        totalPrice: Number(product.price) * 2,
        products: [
          {
            ...product,
            amount: 2,
          },
        ],
      }

      const state = cartReducer(initialState, clearCart())

      expect(state.products).toHaveLength(0)
      expect(state.totalAmount).toBe(0)
      expect(state.totalPrice).toBe(0)
    })
  })
})
