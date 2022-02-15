import { Box, Button, Center, Image, Spacer, Spinner, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UseTimeLine } from "../../hooks/useTimeLine";
import { UserCard } from "../organisms/user/UserCard";

export const TimeLine: VFC = memo(() => {

  const {loginUser} = useLoginUser()
  const {getFollowArticles, articleList, loading} = UseTimeLine()

  const [userId, setUserId] = useState<number>(0);


  useEffect(() => { 
    console.log(userId)
    getFollowArticles(userId)
  }
  ,[getFollowArticles,loginUser,userId])

  useEffect(() => {
    setUserId(loginUser?.userId ?? 0)
  },[loginUser,userId])

  console.log(localStorage.getItem('KEY_LOGIN_USER'))

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
                article.user.image.imagePath? article.user.image.imagePath
                 :
                 `${process.env.PUBLIC_URL}/no_image.png`}
              imageList={article.imageList}/>
          </WrapItem >
        ))}
      </Stack>
      <WrapItem p={4}>
        <Stack>
          <Wrap>
            <Image src="https://source.unsplash.com/random" alt="loginUserImage" boxSize="100px" borderRadius="full" />
            <Stack>
              <Box ml={5} my="auto">
                <Text fontWeight="bold" fontSize="lg">ユーザー名</Text>
                <Text color="gray.500">ユーザーフルネーム</Text>
              </Box>
            </Stack>
          </Wrap>
          <Spacer />
          <Wrap pr={7}>
            <Text color="gray.500" fontWeight="bold">おすすめ</Text>
            <Spacer />
            <Text fontWeight="bold" mr="3">すべて見る</Text>
          </Wrap>
          <Wrap spacing={4}>
            <Image src="https://source.unsplash.com/random" alt="loginUserImage" boxSize="50px" borderRadius="full" />
            <Stack>
              <Box my="auto">
                <Text fontWeight="bold" fontSize="lg">ユーザー名</Text>
                <Text color="gray.500">ユーザーフルネーム</Text>
              </Box>
            </Stack>
            <Button  color="teal" w="150px" variant='ghost' _hover={{opacity: 0.8}} >フォローする</Button>
          </Wrap>
          <Wrap spacing={4}>
            <Image src="https://source.unsplash.com/random" alt="loginUserImage" boxSize="50px" borderRadius="full" />
            <Stack>
              <Box my="auto">
                <Text fontWeight="bold" fontSize="lg">ユーザー名</Text>
                <Text color="gray.500">ユーザーフルネーム</Text>
              </Box>
            </Stack>
            <Button color="teal" w="150px" variant='ghost' _hover={{opacity: 0.8, outline: 'none'}} >フォローする</Button>
          </Wrap>
        </Stack>
      </WrapItem>
    </Wrap>
    )}
  </>
  )
})