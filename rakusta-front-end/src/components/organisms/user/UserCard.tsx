/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Image, Stack, Text, Spacer  } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ImagePath } from "../../../types/api/imagePath";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

type Props = {
  articleId: number;
  userId: number;
  content: string;
  userImage: string;
  articleUserName: string;
  imageList: Array<ImagePath>
}

export const UserCard: VFC<Props> = memo((props) => {

  const settings = {
    arrows: true,
    dots: true,
  }


  const {articleId, userId, content, userImage ,imageList, articleUserName} = props;
  return (
    <Box
      w="700px"
      h="850px"
      bg="white"
      borderRadius="8px"
      shadow="md"
      _hover={{cursor: "pointer", opacity: 0.8}}
    >　
      <Stack>
        <Box h="60px" pl={5} py="auto">
          <Flex flexGrow={2}>
            <Image src={userImage} boxSize="50px" borderRadius="full" border="2px"/>
            <Text my="auto" ml="5" fontSize="lg" fontWeight="bold">{articleUserName}</Text>
          </Flex>
        </Box>
        <Slider {...settings}>
          {imageList.map((image) => (
            <Image
              boxSize="600px"
              src={image.imagePath}
            />
          ))}
        </Slider>
        <Spacer />
        <Box p={4} align="start">
          <Text fontSize="lg" fontWeight="bold" color="black">{content}</Text>
        </Box>
      </Stack>

    </Box>
  )
})