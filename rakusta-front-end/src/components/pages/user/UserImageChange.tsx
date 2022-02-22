import { Box, Container, FormControl, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { UsePutUserProfile } from "../../../hooks/usePutUserProfile";
import { UseUserProfile } from "../../../hooks/useUserProfile";
import { PrimaryButton } from "../../atoms/botton/PrimarButton";
import { UserEditSideBar } from "../../organisms/user/EditSideBar";

export const UserImageChange:VFC = memo(() => {

  const {loginUser} = useLoginUser()
  const {loading, putUserImage} = UsePutUserProfile()
  const {getUser, selectUser} = UseUserProfile()
  const FormData = require('form-data')

  const [userId, setUserId] = useState<number>(0);
  const [imagePath, setImagePath] = useState<File | string>('');
  const [preview, setPreview] = useState('');

  const onClickImagePost = useCallback(() => {
    const data = new FormData();
    data.append('image', imagePath);
    data.append('userId', new Blob([JSON.stringify(loginUser?.userId)],{type : 'application/json'}))
    putUserImage(data);
  },[imagePath])

  const getImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const img: File = e.target.files[0]
    setImagePath(img) 
    setPreview(window.URL.createObjectURL(img))
  },[preview,imagePath])

  useEffect(() => getUser(loginUser?.userId as number),[getUser])

  useEffect(() => {
    setPreview(selectUser?.image.imagePath ?? '')
  }, [selectUser])



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
        <GridItem colSpan={2} border="1px" borderColor="gray.300" justify="center">
          <Stack p={10} spacing={8} >
            <Heading as="h3">{loginUser?.userName}</Heading>
            <Box >
              <Image boxSize="400px" borderRadius="full" mx="auto" src={preview  ? preview : (`${process.env.PUBLIC_URL}/no_image.png`)}/>
            </Box>
            <FormControl>
              <input type="file" accept="image/*,.png,.jpg,.jpeg" onChange={(e: ChangeEvent<HTMLInputElement>) => getImage(e)}  />
            </FormControl>
            <PrimaryButton  loading={loading} disabled={imagePath === ''}
               onClick={onClickImagePost} >更新</PrimaryButton>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})