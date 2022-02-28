import { Box, Container, FormControl, Grid, GridItem, Heading, Image, Link, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from "react";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { UsePutUserProfile } from "../../../hooks/usePutUserProfile";
import { UseUserProfile } from "../../../hooks/useUserProfile";
import { PrimaryButton } from "../../atoms/botton/PrimarButton";

export const UserFirstFollow: VFC = memo(() => {
  const {loginUser} = useLoginUser()
  
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
        <GridItem colSpan={2} border="1px" borderColor="gray.300" justify="center">
          <Stack p={10} spacing={10} >
            
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  )
})