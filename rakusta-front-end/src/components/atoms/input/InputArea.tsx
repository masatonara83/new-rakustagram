import { Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: () => any;
}

export const InputArea: VFC<Props> = memo((props) => {
  const { placeholder, value, onChange } = props;
  return(
    <Input placeholder={placeholder} value={value} onChange={onChange}></Input>
  )
})