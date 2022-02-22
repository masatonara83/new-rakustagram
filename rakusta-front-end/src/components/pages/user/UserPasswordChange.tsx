import { Container, Grid, GridItem, Heading, Input, InputGroup, InputLeftAddon, Stack, Table, Text, Th, Tr } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { UsePutUserProfile } from "../../../hooks/usePutUserProfile";
import { UseUserProfile } from "../../../hooks/useUserProfile";
import { PrimaryButton } from "../../atoms/botton/PrimarButton";
import { InputBox } from "../../molecules/InputBox";
import { UserEditSideBar } from "../../organisms/user/EditSideBar";

export const UserPasswordChange:VFC = memo(() => {

  const {putUserPassword, loading} = UsePutUserProfile()
  const {selectUser, getUser} = UseUserProfile()

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  useEffect(() => getUser(5),[getUser])

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)
  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => setCheckPassword(e.target.value)

  const onClickChangePassword = useCallback(() => {
    const passwordForm = {
      userId: selectUser?.userId,
      password: password,
      newPassword: newPassword
    }
    putUserPassword(passwordForm)
  },[password, newPassword])

  return (
    <Container maxW='container.lg'>
      <Grid h='800px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(3, 1fr)'
      bg="gray.50"
      shadow="md"
      mt={10}
      justify="center"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      >
        <GridItem >
          <UserEditSideBar />
        </GridItem>
        <GridItem colSpan={2} border="1px" borderColor="gray.300">
        <Stack p={10} spacing={10}>
            <Heading as="h3">パスワード変更</Heading>
            <InputBox 
            value={password} 
            addonText="現在のパスワード" 
            onChange={onChangePassword} 
            placeholder="現在のパスワードを入れてください" 
            width="170px"
            />
            <InputBox value={newPassword} addonText="新しいパスワード" onChange={onChangeNewPassword} width="170px" placeholder="新しいパスワードを入れてください" />
            <InputBox value={checkPassword} addonText="確認用パスワード" onChange={onChangeCheckPassword} width="170px" placeholder="再度新しいパスワードを入れてください" />
            <PrimaryButton  loading={loading} disabled={
              password === '' ||
              newPassword === '' ||
              checkPassword === '' ||
              password === newPassword ||
              newPassword !== checkPassword
              }
              onClick={onClickChangePassword} >更新</PrimaryButton>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})