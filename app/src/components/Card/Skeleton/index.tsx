import { Fragment } from "react"
import { Col, Placeholder } from "react-bootstrap"
import * as Sc from "./style"

export function ProductSkeleton({ amount }: { amount: number }) {
  const loadings = []

  for (let i = 0; i < amount; i++) {
    loadings.push(
      <Sc.Container animation="glow">
        <Col
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Placeholder style={{ height: "200px", width: "100%" }} />
        </Col>
        <Col
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Col
            xs={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row",
              gap: "1rem",
              width: "100%",
            }}
          >
            <Placeholder xs={6} /> <Placeholder xs={5} />{" "}
          </Col>
          <Placeholder style={{ width: "180px" }} />{" "}
          <Placeholder style={{ width: "180px" }} />{" "}
        </Col>
        <Col xs={12}>
          <Placeholder
            style={{
              width: "100%",
              height: "40px",
            }}
          />
        </Col>
      </Sc.Container>
    )
  }
  return (
    <>
      {loadings.map((l, index: number) => (
        <Fragment key={index}>{l}</Fragment>
      ))}
    </>
  )
}
