/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button,Divider, Grid, GridItem, Image, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useHistory, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { UseUserProfile } from "../../../hooks/useUserProfile";

interface RouterParams {
  id: string
}

export const UserShowPage: VFC = memo(() => {

  const {loginUser} = useLoginUser()
  const history = useHistory()
  const {selectUser, getUser, loading} = UseUserProfile()
  const {id} = useParams<RouterParams>()

  useEffect(() => getUser(Number(id)),[getUser])

  const onClickEdit = useCallback(() => history.push("/rakustagram/account/edit"),[])

  return (
    <>
    <Grid h='300px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
    mt={10}>
      <GridItem rowSpan={2} colSpan={2} pt={6}>
        <Image src={selectUser?.image.imagePath !== '' ? selectUser?.image.imagePath : `${process.env.PUBLIC_URL}/no_image.png`} alt="loginUserImage" boxSize="250px" borderRadius="full" mx="auto" shadow="md" />
      </GridItem>
      <GridItem colSpan={1} align="center" p={9}>
        <Text fontSize="40px" fontWeight="bold">{selectUser?.userName}</Text>
      </GridItem>
      <GridItem colSpan={2} pt={10} px={5}>
        {Number(id) === loginUser?.userId ? (<Button w="80%" h="50px" shadow="md" fontSize="20px" onClick={onClickEdit}>プロフィールを編集</Button>) 
        : (
          <Button w="80%" h="50px" shadow="md" fontSize="20px" onClick={onClickEdit}>フォローする</Button>)
        }
      </GridItem>
      <GridItem colSpan={3} ml={10}>
        <Wrap justify="center" mt={8}>
          <WrapItem>
            <Text fontSize="20px" fontWeight="bold">投稿{selectUser?.articleCount}件</Text>
          </WrapItem>
          <Spacer />
          <WrapItem>
            <Text fontSize="20px" fontWeight="bold">フォロワー{selectUser?.followerCount}件</Text>
          </WrapItem>
          <Spacer />
          <WrapItem>
            <Text fontSize="20px" fontWeight="bold">フォロー中{selectUser?.followingCount}件</Text>
          </WrapItem>
          <Spacer />
        </Wrap>
      </GridItem>
    </Grid>
    <Divider orientation='horizontal' bg="black" />
      <Wrap spacing='30px' p={{base: 4, md: 10}} justify="center" >
      {selectUser?.articleList.map((article) => (
        <WrapItem key={article.articleId}>
          <Slider>
            <Box
              w="350px"
              h="350px"
              bg="white"
              borderRadius="8px"
              shadow="md"
              _hover={{cursor: "pointer", opacity: 0.8}}
            >
              {article.imageList.map((image) => (
                  <Image src={image.imagePath} boxSize="350px" border="2px" />
              ))}
            </Box>
          </Slider>
        </WrapItem>
      ))}
    </Wrap>
    </>
  )
})