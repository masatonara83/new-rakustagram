import { Box, Button, Flex, flexbox, Img, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { IconContext } from "react-icons";
import { HiHome } from 'react-icons/hi';
import {BsBookmarkPlus, BsFillFilePostFill, BsHeart} from 'react-icons/bs';
import { RiArticleLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { NewPost } from "../user/NewPost";
import { UseUserProfile } from "../../../hooks/useUserProfile";
import { useHistory } from "react-router-dom";



export const Header: VFC = memo(() => {

  const history = useHistory()
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {getUser} = UseUserProfile()

  const onClickProfile = useCallback(() => {
    const userId = 5;
    history.push('rakustagram/user/' + userId)
  }, [])

  const onClickTimeline = useCallback(() => {history.push('/rakustagram')},[])


  return (
    <>
      <Flex as="nav" bg="white" color="white" align="center" justify="space-between" padding={{base:2, md: 4}} shadow="md">
        <Spacer />
        <Flex align="center" as="a"  _hover={{cursor: "pointer"}} ml="5" onClick={onClickTimeline}>
          <Img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"  h="60px" />
        </Flex>
        <Spacer />
        <Box>
          <Input placeholder="検索" width="300px" display={{base: "none", md: "flex"}}/>
        </Box>
        <Spacer />
        <Flex  color="black" fontSize="lg" flexGrow={1} display={{base: "none", md: "flex"}}>
          <IconContext.Provider value={{color: "black", size: "32px"}} >
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}} onClick={onClickTimeline}>
              <Link >{<HiHome />}</Link>
            </Box>
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}}>
              <Link>{<BsBookmarkPlus />}</Link>
            </Box>
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}} onClick={onOpen}>
              {<BsFillFilePostFill />}
            </Box>
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}}>
              <Link>{<RiArticleLine />}</Link>
            </Box>
            <Box pr="5" _hover={{cursor: "pointer", opacity: 0.5}}>
              <Link>{<BsHeart />}</Link>
            </Box>
            <Box pr="5">
              <Menu>
                <MenuButton>
                  {<BiUserCircle />}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={onClickProfile}>プロフィール</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </IconContext.Provider>
        </Flex>
      </Flex>
      <NewPost isOpen={isOpen} onClose={onClose}/>
    </>
  )
})