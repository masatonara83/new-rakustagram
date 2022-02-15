import { Box, Container, FormControl, FormLabel, Grid, GridItem, Heading, Input, InputGroup, InputLeftAddon,  Stack, Textarea, } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { UseChangePage } from "../../hooks/useChangePage";
import { UsePutUserProfile } from "../../hooks/usePutUserProfile";
import { UseUserProfile } from "../../hooks/useUserProfile";
import { PrimaryButton } from "../atoms/botton/PrimarButton";
import { InputBox } from "../molecules/InputBox";
import { UserEditSideBar } from "../organisms/user/EditSideBar";

export const UserEdit:VFC = memo(() => {

  const {loading, putUserProfile} = UsePutUserProfile()
  const {getUser, selectUser} = UseUserProfile()
  const {onClickEdit, onClickImageChange, onClickPasswordChange} = UseChangePage()
  
  const [userId, setUserId] = useState<number>(0)
  const [userName, setUserName] = useState('');
  const [userMailAddress, setUserMailAddress] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userOverview, setUserOverview] = useState('');

  useEffect(() => getUser(5),[getUser])

  useEffect(() => {
    setUserId(selectUser?.userId ?? 0)
    setUserName(selectUser?.userName ?? '')
    setUserFullName(selectUser?.userFullName ?? '')
    setUserMailAddress(selectUser?.userMailAddress ?? '')
    setUserOverview(selectUser?.userOverview ?? '')
  }, [selectUser])

  const onChangeUserName = (e : ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeUserFullName = (e : ChangeEvent<HTMLInputElement>) => setUserFullName(e.target.value)
  const onChangeUserMailAddress = (e : ChangeEvent<HTMLInputElement>) => setUserMailAddress(e.target.value)
  const onChangeUserOverview = (e: ChangeEvent<HTMLTextAreaElement>) => setUserOverview(e.target.value)

  const onClickProfileUpdate = useCallback(() => {
    const user = {
      userId: userId,
      userName: userName,
      userFullName: userFullName,
      userMailAddress: userMailAddress,
      userOverview: userOverview
    }
    putUserProfile(user)
  },[userId,userName, userFullName,userMailAddress,userOverview])

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
          <Stack p={10} spacing={8}>
            <Heading as="h3">{userName}</Heading>
            <InputBox addonText="名前" value={userFullName} placeholder="名前" width="160px" onChange={onChangeUserFullName}/>
            <InputBox addonText="ユーザーネーム" value={userName} placeholder="ユーザーネーム" width="160px" onChange={onChangeUserName}/>
            <InputBox addonText="メールアドレス" value={userMailAddress} placeholder="メールアドレス" width="160px" onChange={onChangeUserMailAddress}/>
            <FormControl>
            <Box bg="gray.100" w="160px" h="45px" borderRadius="md" py={2} px={4} textAlign="center">
              <FormLabel fontWeight="bold" fontSize="20px" >自己紹介:</FormLabel>
            </Box>
              <Textarea rows={5} value={userOverview} onChange={onChangeUserOverview} />
            </FormControl>
            <PrimaryButton  loading={loading} disabled={
              userFullName === selectUser?.userFullName &&
              userName === selectUser?.userName &&
              userMailAddress === selectUser?.userMailAddress &&
              userOverview === selectUser?.userOverview
              } onClick={onClickProfileUpdate} >更新</PrimaryButton>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})