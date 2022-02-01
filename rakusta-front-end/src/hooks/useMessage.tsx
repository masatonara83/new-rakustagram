import { useToast } from "@chakra-ui/react"
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

export const UseMassage = () => {
  const toast = useToast();
  const showMessage = useCallback((props: Props) => {
    const {title, status} = props;
    toast({
      title,
      status,
      position: "top-right",
      duration: 5000,
      isClosable: true
    })
  }, [toast]);
  return {showMessage}
}