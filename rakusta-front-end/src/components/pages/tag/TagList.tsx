import { Box, Image, Slider, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useParams } from "react-router-dom";

interface RouterParams {
  tagName: string
}

export const TagList: VFC = memo(() => {

  const {tagName} = useParams<RouterParams>()

  console.log(tagName)
  return (
    <Wrap spacing='30px' p={{base: 4, md: 10}} justify="center" >
      {/* {selectUser?.articleList.map((article) => (
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
      ))} */}
    </Wrap>
  )
})