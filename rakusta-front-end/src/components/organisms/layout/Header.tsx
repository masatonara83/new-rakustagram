import { Box, Flex, flexbox, Img, Input, Link, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { IconContext } from "react-icons";
import { HiHome, HiOutlineUserCircle } from 'react-icons/hi';
import {BsBookmarkPlus, BsFillFilePostFill, BsHeart} from 'react-icons/bs';
import { RiArticleLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { NewPost } from "../user/NewPost";



export const Header: VFC = memo(() => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Flex  as="nav" bg="white" color="white" align="center" justify="space-between" padding={{base:2, md: 4}} shadow="md" >
        <Spacer />
        <Flex align="center" as="a"  _hover={{cursor: "pointer"}} ml="5">
          <Img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"  h="60px" />
        </Flex>
        <Spacer />
        <Box>
          <Input placeholder="検索" width="300px" display={{base: "none", md: "flex"}}/>
        </Box>
        <Spacer />
        <Flex  color="black" fontSize="lg" flexGrow={1} display={{base: "none", md: "flex"}}>
          <IconContext.Provider value={{color: "black", size: "32px"}} >
            <Box pr="5">
              <Link >{<HiHome />}</Link>
            </Box>
            <Box pr="5">
              <Link>{<BsBookmarkPlus />}</Link>
            </Box>
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}} onClick={onOpen}>
              {<BsFillFilePostFill />}
            </Box>
            <Box pr="5">
              <Link>{<RiArticleLine />}</Link>
            </Box>
            <Box pr="5">
              <Link>{<BsHeart />}</Link>
            </Box>
            <Box pr="5">
              <Link>{<BiUserCircle />}</Link>
            </Box>
          </IconContext.Provider>
        </Flex>
      </Flex>
      <NewPost isOpen={isOpen} onClose={onClose}/>
    </>
  )
})