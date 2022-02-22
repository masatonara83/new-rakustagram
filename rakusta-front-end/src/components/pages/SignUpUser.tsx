import { Box, Divider, Img, Input, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { UseRegister } from "../../hooks/useRegister";
import { FaceBookButton } from "../atoms/botton/FaceBookButton";
import { PrimaryButton } from "../atoms/botton/PrimarButton";


export const SignUpUser: VFC = memo(() => {
  const {loading, userRegister} = UseRegister()

  const [mailAddress, setMailAddress] = useState("")
  const [userName, setUserName] = useState("")
  const [userFullName, setUserFullName] = useState("")
  const [password, setPassword] = useState("")
  


  const onChangeUserMailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value)
  }
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const onChangeUserFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserFullName(e.target.value)
  }
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onClickRegister = () => {
    const form = {
      userMailAddress: mailAddress,
      userFullName: userFullName,
      userName: userName,
      password: password
    }
    userRegister(form)
  }

  return (
    <Wrap p={{base: 4, md: 10}} justify="center" spacing={20}>
      <WrapItem>
        <Stack spacing={4}>
        <Box mt="20" bg="white" w="400px" h="680px" borderRadius="md" shadow="md">
          <Stack textAlign="center" spacing="7" p={4}>
            <Img 
              src={`${process.env.PUBLIC_URL}/logo.png`}
              w="300px"
              mx="auto"
              my={4}
            />
            <Text fontSize="xl" fontWeight="bold" color="gray.500" >登録して新たな世界を始めよう</Text>
            <Input  placeholder="メールアドレス" value={mailAddress} onChange={onChangeUserMailAddress}/>
            <Input  placeholder="フルネーム" value={userFullName} onChange={onChangeUserFullName}/>
            <Input  placeholder="ユーザーネーム" value={userName} onChange={onChangeUserName}/>
            <Input  placeholder="パスワード" value={password} onChange={onChangeUserPassword}/>
            <PrimaryButton disabled={mailAddress === "" || password === ""} loading={loading} onClick={onClickRegister}>登録</PrimaryButton>
            <Divider />
            <FaceBookButton />
          </Stack>
        </Box>
        <Box my={8} h="100px" w="400px" bg="white" borderRadius="md" shadow="md" pt={8} justify="center" >
          <Box mx="auto" my="auto">
            アカウントはお持ちの方は
            <Link href="/" color="teal.300" fontWeight="bold">ログイン</Link>
            </Box>
        </Box>
        </Stack>
      </WrapItem>
    </Wrap>
  )
})