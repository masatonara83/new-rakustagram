import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  children: string;
  onClick: () => void;
}

export const PagingButton: VFC<Props> = memo((props) => {
  const {children, onClick} = props;
  return (
    <Button 
      bg="blue.200" 
      color="gray.50" 
      w="300px"
      _hover={{opacity: 0.8}} 
      onClick={onClick}
      fontSize="xl"
      >
        {children}
    </Button>
  )
})