export function transformToReal(value: number): string {
  return value.toLocaleString("pt-br", {
    currency: "BRL",
  })
}
