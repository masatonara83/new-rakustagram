import { Box, Button, Image, Spacer, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { UseTimeLine } from "../../hooks/useTimeLine";
import { UserCard } from "../organisms/user/UserCard";

export const TimeLine: VFC = memo(() => {

  const {getFollowArticles, articleList} = UseTimeLine()

  useEffect(() => getFollowArticles(5),[getFollowArticles])

  return (
    <Wrap p={{base: 4, md: 10}} justify="center" mt="7" spacing={7}>
      <Stack spacing={10}>
        {articleList?.map((article) => (
          <WrapItem  key={article.id}>
              <UserCard articleId={article.id} userId={article.userId} content={article.content} 
              userImage={
                article.user.userImagePath? article.user.userImagePath
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
  )
})