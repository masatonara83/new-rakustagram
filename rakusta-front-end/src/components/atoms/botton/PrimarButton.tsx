import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  children: string;
  disabled: boolean;
  loading? : boolean;
  onClick: () => void;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const {children, disabled = false, loading = false ,onClick} = props;
  return (
    <Button 
      bg="teal.200" 
      color="white" 
      _hover={{opacity: 0.8}} 
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
      >
        {children}
    </Button>
  )
})