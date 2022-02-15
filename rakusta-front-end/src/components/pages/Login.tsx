import { Box, Button, Divider, Img, Input, Link, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { UseAuth } from "../../hooks/useAuth";
import { FaceBookButton } from "../atoms/botton/FaceBookButton";
import { PrimaryButton } from "../atoms/botton/PrimarButton";
import { InputArea } from "../atoms/input/InputArea";

export const Login: VFC = memo(() => {
  const {login, loading} = UseAuth();

  const [mailAddress, setMailAddress] = useState("")
  const [password, setPassword] = useState("")

  const onChangeUserMailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value)
  }
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onClickLogin = () => {
    const loginForm = {
      userMailAddress: mailAddress,
      password: password
    }
    login(loginForm)
  }

  return (
    <Wrap p={{base: 4, md: 10}} justify="center" spacing={20}>
      <WrapItem >
        <Box w="sm" mt="8" mx="auto" display={{base: "none", md: "flex"}}>
          <Img src={`${process.env.PUBLIC_URL}/iphone-160307.png`} alt="iphone"/>
        </Box>
      </WrapItem>
      <WrapItem>
        <Stack spacing={4}>
        <Box mt="20" bg="white" w="400px" h="580px" borderRadius="md" shadow="md">
          <Stack textAlign="center" spacing="7" p={4}>
            <Img 
              src={`${process.env.PUBLIC_URL}/logo.png`}
              w="300px"
              mx="auto"
              my={8}
            />
            <Input  placeholder="メールアドレス" value={mailAddress} onChange={onChangeUserMailAddress}/>
            <Input  placeholder="パスワード" value={password} onChange={onChangeUserPassword}/>
            <PrimaryButton disabled={mailAddress === "" || password === ""} loading={loading} onClick={onClickLogin}>ログイン</PrimaryButton>
            <Divider />
            <FaceBookButton />
            <Link  _hover={{textDecoration: "none", color: "gray.500"}}>パスワードを忘れた方はこちら</Link>
          </Stack>
        </Box>
        <Box my={8} h="100px" w="400px" bg="white" borderRadius="md" shadow="md" pt={8} justify="center" >
          <Box mx="auto" my="auto">
            アカウントはお持ちですか？
            <Link color="teal.300" fontWeight="bold">登録する</Link>
            </Box>
        </Box>
        </Stack>
      </WrapItem>
    </Wrap>
  )
})