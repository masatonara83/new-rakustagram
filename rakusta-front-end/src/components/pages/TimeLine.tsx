import { Box, Button, Center, Image, Spacer, Spinner, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, MouseEvent, MouseEventHandler, useCallback, useEffect, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { UseAnotherUserList } from "../../hooks/useAnotherUserList";
import { UseChangePage } from "../../hooks/useChangePage";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UseTimeLine } from "../../hooks/useTimeLine";
import { NotFollowList } from "../organisms/follow/NotFollowList";
import { UserCard } from "../organisms/user/UserCard";

export const TimeLine: VFC = memo(() => {

  const history = useHistory()

  const {loginUser} = useLoginUser()
  const {onClickTagSearch} = UseChangePage()
  const {getFollowArticles, articleList, loading} = UseTimeLine()
  const {getNotFollowList, notFollowUserList} = UseAnotherUserList()

  const [userId, setUserId] = useState<number>(0);


  useEffect(() => { 
    getFollowArticles(5)
    getNotFollowList(5)
  }
  ,[getFollowArticles,getNotFollowList,loginUser,userId])

  useEffect(() => {
    setUserId(loginUser?.userId ?? 0)
  },[loginUser,userId])

  const onClickUser = useCallback((userId: number) => {
    history.push('rakustagram/user/' + userId)
  },[])

  const onClickTag = useCallback((e: MouseEvent<HTMLAnchorElement>)=> {
    console.log(e)
  },[])

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner 
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Center>
    ) : (
    <Wrap p={{base: 4, md: 10}} justify="center" mt="7" spacing={7}>
      <Stack spacing={10}>
        {articleList?.map((article, index) => (
          <WrapItem  key={article.articleId}>
              <UserCard 
              key={index}
              articleId={article.articleId} 
              userId={article.userId} 
              content={article.content}
              articleUserName={article.user.userName}
              userImage={
                article.user.image.imagePath === null ? `${process.env.PUBLIC_URL}/no_image.png`
                 :
                 article.user.image.imagePath}
              imageList={article.imageList}
              tagList={article.tagList}
              onClickTag={onClickTag}
              />
          </WrapItem >
        ))}
      </Stack>
      <WrapItem p={4}>
        <Stack>
          <Wrap>
            <Image src={loginUser?.image.imagePath} alt="loginUserImage" boxSize="100px" borderRadius="full" />
            <Stack>
              <Box ml={5} my="auto" w="200px">
                <Text fontWeight="bold" fontSize="lg">{loginUser?.userName}</Text>
                <Text color="gray.500">{loginUser?.userFullName}</Text>
              </Box>
            </Stack>
          </Wrap>
          <Spacer />
          <Wrap pr={7}>
            <Text color="gray.500" fontWeight="bold">おすすめ</Text>
            <Spacer />
            <Text fontWeight="bold" mr="3">すべて見る</Text>
          </Wrap>
          {notFollowUserList?.map((notFollowUser) => (
            <NotFollowList 
              id={notFollowUser.userId} 
              userName={notFollowUser.userName} 
              imagePath={notFollowUser.image.imagePath ? 
                notFollowUser.image.imagePath :
                `${process.env.PUBLIC_URL}/no_image.png`
              }
              onClick={onClickUser}
              />
          ))}
        </Stack>
      </WrapItem>
    </Wrap>
    )}
  </>
  )
})