/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Image, Stack, Text, Spacer, Wrap, WrapItem, Link  } from "@chakra-ui/react";
import { ChangeEvent, memo, MouseEvent, MouseEventHandler, useCallback, VFC } from "react";
import { ImagePath } from "../../../types/api/imagePath";
import Slider from "react-slick";
import {AiFillTag} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Tag } from "../../../types/api/tag";
import { UseChangePage } from "../../../hooks/useChangePage";

type Props = {
  articleId: number;
  userId: number;
  content: string;
  userImage: string;
  articleUserName: string;
  imageList: Array<ImagePath>;
  tagList: Array<Tag>;
  onClickTag: (e: MouseEvent<HTMLAnchorElement>) => void
}

export const UserCard: VFC<Props> = memo((props) => {

  const settings = {
    arrows: true,
    dots: true,
  }

  const {articleId, userId, content, userImage ,imageList, articleUserName, tagList, onClickTag} = props;
  const {onClickTagSearch} = UseChangePage();


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
          <Wrap>
            <WrapItem>
              <Box mr="5">
                {<BsFillPencilFill  size="25" color="gray" />}
              </Box>
              <Text fontSize="lg" fontWeight="bold" color="black">{content}</Text>
            </WrapItem>
          </Wrap>
        </Box>
        <Box p={4} align="start">
          <Wrap>
            <WrapItem >
              <Box  mr="5">
                {<AiFillTag size="25" color="gray"/>}
              </Box>
              {tagList.map((tag) => (
                <Link mr="5" fontSize="lg" fontWeight="bold" _hover={{cursor: "pointer"}} onClick={(e: MouseEvent<HTMLAnchorElement>) => onClickTag(e)}>{tag.tagName}</Link>
              ))}
              </WrapItem>
         </Wrap>
        </Box>
      </Stack>

    </Box>
  )
})