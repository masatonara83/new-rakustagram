import { Box, Button, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  imagePath: string;
  userName: string;
  id: number;
  onClick: (id: number) => void
}


export const NotFollowList: VFC<Props> = memo((props) => {

  const {imagePath, userName, id, onClick} = props;
  return (
    <Wrap spacing={6}>
      <Image src={imagePath} alt="anotherUserImage" boxSize="50px" borderRadius="full" 
      _hover={{cursor: "pointer", opacity: 0.8}}
      onClick={() => onClick(id)}/>
      <Stack>
        <Box my="auto" w="150px">
          <Text 
            fontWeight="bold" 
            fontSize="lg"
            _hover={{cursor: "pointer", opacity: 0.8}}
            onClick={() => onClick(id)}
            >
            {userName}</Text>
          <Text 
            fontSize="sm" 
            color="gray.500" 
            fontWeight="bold"
            >
              人気ユーザー</Text>
        </Box>
      </Stack>
      <Button  color="teal" w="150px" variant='ghost' _hover={{opacity: 0.8}} >フォローする</Button>
    </Wrap>
  )
})