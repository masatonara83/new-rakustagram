import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaFacebook } from 'react-icons/fa';

export const FaceBookButton: VFC = memo(() => {
  return (
    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
      facebook
    </Button>
  )
})
