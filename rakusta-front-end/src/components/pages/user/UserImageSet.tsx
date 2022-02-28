import { Box, Container, FormControl, Grid, GridItem, Heading, Image, Link, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { UsePutUserProfile } from "../../../hooks/usePutUserProfile";
import { UseUserProfile } from "../../../hooks/useUserProfile";
import { PrimaryButton } from "../../atoms/botton/PrimarButton";

export const UserImageSet: VFC = memo(() => {
  const {loginUser} = useLoginUser()
  const {loading, putUserImage} = UsePutUserProfile()
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


  return (
    <Container maxW='container.lg'>
      <Grid h='800px'
      bg="gray.50"
      shadow="md"
      mt={10}
      justify="center"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      >
        <GridItem colSpan={2} border="1px" borderColor="gray.300" justify="center">
          <Stack p={10} spacing={10} >
            <Heading as="h3">{loginUser?.userName}</Heading>
            <Box >
              <Image boxSize="400px" borderRadius="full" mx="auto" src={preview  ? preview : (`${process.env.PUBLIC_URL}/no_image.png`)}/>
            </Box>
            <FormControl>
              <input type="file" accept="image/*,.png,.jpg,.jpeg" onChange={(e: ChangeEvent<HTMLInputElement>) => getImage(e)}  />
            </FormControl>
            <Box>
              <PrimaryButton  loading={loading} disabled={imagePath === ''}
               onClick={onClickImagePost} >変更
              </PrimaryButton>
            </Box>
            <Link href="/rakustagram/first-follow" fontSize="25px" color="teal.300" fontWeight="bold">後で設定する</Link>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})