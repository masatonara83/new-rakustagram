import { Box, Button, color, Divider, Flex, Image, Img, Stack, Text, Spacer  } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ImagePath } from "../../../types/api/imagePath";
import Slider from "react-slick";
import {BsHeart} from 'react-icons/bs';
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineMail, AiFillHeart} from 'react-icons/ai'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";



type Props = {
  articleId: number;
  userId: number;
  content: string;
  userImage: string;
  imageList: Array<ImagePath>
}

export const UserCard: VFC<Props> = memo((props) => {

  const settings = {
    arrows: true,
    dots: true,
    slickNext: {
      right: '-50px!important'
    },
    slickPrev: {
      left:"-30px!important"
    }
  }

  const onClickHeart = () => {alert("tikin")}

  const {articleId, userId, content, userImage ,imageList} = props;
  return (
    <Box
      w="600px"
      h="800px"
      bg="white"
      borderRadius="8px"
      shadow="md"
      _hover={{cursor: "pointer", opacity: 0.8}}
    >　
      <Stack>
        <Box h="60px" pl={5} py="auto">
          <Flex flexGrow={2}>
            <Image src={userImage} boxSize="50px" borderRadius="full" border="2px"/>
            <Text my="auto" ml="5" fontSize="lg" fontWeight="bold">ユーザー名</Text>
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