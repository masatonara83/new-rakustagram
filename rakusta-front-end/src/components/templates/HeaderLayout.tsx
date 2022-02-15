import { Container } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const {children} = props
  return (
    <>
      <Header />
      <Container maxW='container.xl'>
        {children}
      </Container>
    </>
  )
})