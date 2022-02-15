import { Table, Tbody, Text, Th, Tr } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UseChangePage } from "../../../hooks/useChangePage";



export const UserEditSideBar: VFC = memo(() => {

  const {onClickEdit, onClickImageChange, onClickPasswordChange} = UseChangePage();
  return (
    <Table>
      <Tbody>
        <Tr>
          <Th textAlign="center" p={5} _hover={{cursor: "pointer", opacity: "0.7"}} onClick={onClickEdit}>
            <Text fontSize="20px" >プロフィールを編集</Text>
          </Th>
        </Tr>
        <Tr>
          <Th textAlign="center" p={5} _hover={{cursor: "pointer", opacity: "0.7"}} onClick={onClickImageChange}>
            <Text fontSize="20px">プロフィール写真を変更</Text>
          </Th>
        </Tr>
        <Tr>
          <Th textAlign="center" p={5} _hover={{cursor: "pointer", opacity: "0.7"}} onClick={onClickPasswordChange}>
            <Text fontSize="20px">パスワードを変更</Text>
          </Th>
        </Tr>
      </Tbody>
    </Table>
  )
})