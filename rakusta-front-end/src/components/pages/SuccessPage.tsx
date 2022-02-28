import { Box, Container, Grid, GridItem, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { PagingButton } from "../atoms/botton/PagingButton";

export const SuccessPage: VFC = memo(() => {

  const history = useHistory()

  const onClickGoButton = useCallback(()=> {
    history.push("/rakustagram/imageSet")
  },[])

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
        <GridItem >
          <Stack spacing={1} mt="8">
            <Heading color="gray.600" fontSize="70px" fontFamily="cursive">Welcome To rakustagram</Heading>
            <Box>
              <Img mx="auto" boxSize="550px" src={`${process.env.PUBLIC_URL}/undraw_social_networking_re_i1ex.svg`}></Img>
            </Box>
            <Box>
              <PagingButton onClick={onClickGoButton} >はじめる</PagingButton>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})