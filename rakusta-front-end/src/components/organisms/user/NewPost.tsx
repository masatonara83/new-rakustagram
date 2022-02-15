import { Box, FormControl, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Textarea, Spacer } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback, useState, VFC } from "react";
import {AiFillTag} from 'react-icons/ai'
import { UseArticlePost } from "../../../hooks/useArticlePost";
import { PrimaryButton } from "../../atoms/botton/PrimarButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const NewPost: VFC<Props> = memo((props) => {
  const {isOpen, onClose} = props;
  const {loading, articlePost} = UseArticlePost();

  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState('')

  const FormData = require('form-data')


  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => setTag(e.target.value)
  


  const getImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const img: File = e.target.files[0]
    setImage(img)
    setPreview(window.URL.createObjectURL(img))
  }, [])

  const onClickPost = useCallback(() => {
    const data = new FormData()
    data.append('file', image);

    const form = {
      userId: 5,
      content: content,
      tag: tag,
    }
    data.append('form', new Blob([JSON.stringify(form)],{type : 'application/json'}))

    articlePost({data, onClose})
    onClickCloseNewPost()
  }, [image,content,tag])

  const onClickCloseNewPost = useCallback(() => {
    setPreview('')
    setContent('')
    setTag('')
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom" size="xl" isCentered>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader align="center">新規投稿</ModalHeader>
        <ModalCloseButton onClick={onClickCloseNewPost}/>
        <ModalBody >
          <Stack spacing={4}>
            <Box h="300px"  align="center">
              <FormControl  >
                {preview == '' ? (
                  <Box mt="20">
                    <input type="file" accept="image/*,.png,.jpg,.jpeg" onChange={(e: ChangeEvent<HTMLInputElement>) => getImage(e)} />
                  </Box>
                ) : (
                  <Image src={preview} h="300px" />
                )}
              </FormControl>
            </Box>
              <FormControl>
                  <Textarea value={content} placeholder="概要を入力" onChange={onChangeContent} />
              </FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none"
                children={<AiFillTag color="gray"/>} />
                <Input placeholder="タグ入力" value={tag} onChange={onChangeTag}></Input>
              </InputGroup>
              <PrimaryButton disabled={image === null} loading={loading} onClick={onClickPost}>投稿</PrimaryButton>
              <Spacer />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})