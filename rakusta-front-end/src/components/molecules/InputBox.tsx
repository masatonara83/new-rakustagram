import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ChangeEvent, memo, VFC } from "react";

type Props = {
  addonText: string;
  value: string;
  placeholder: string;
  width: string
  onChange: (e : ChangeEvent<HTMLInputElement>) => void
}

export const InputBox: VFC<Props> = memo((props) => {

  const {addonText, value, placeholder, width,onChange} = props;
  return (
    <InputGroup size="lg">
      <InputLeftAddon  fontWeight="bold" children={addonText} w={width} />
      <Input value={value} onChange={onChange} placeholder={placeholder}/>
    </InputGroup>
  )
})