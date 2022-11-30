import React from "react";
import { AlertDialog, Box, Text, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";
import ButtonCercleOrange from "../atoms/buttons/ButtonCercleOrange";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseSettings/firebase";
import { useSetRecoilState } from "recoil";
import { menusState } from "../recoil/states";
import ButtonCercleOrangeEditting from "../atoms/buttons/ButtonCercleOrangeEditting";
import { fetchMenus } from "../../api/fetch";

type Props = {
  menuName: string;
  protein: number;
  fat: number;
  carbo: number;
  calorie: number;
  titles: string[];
  id: string;
  goodsDetailId: string[];
};

const CardMyPage: React.FC<Props> = (props) => {
  const { menuName, protein, fat, carbo, calorie, titles, id, goodsDetailId } = props;
  const setMenus = useSetRecoilState(menusState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  /**
   * firebase からデータを削除して、再fetch
   * @param {string} id ドキュメントid
   */
  const goodsDeleteInMyMenu = async (id: string) => {
    // if (!confirm(`${menuName}を削除しますがよろしいですか？`)) return;
    await deleteDoc(doc(db, "menus", id))
      .then(() => {
        fetchMenus()
          .then((resolve) => {
            setMenus(resolve);
          })
          .catch((e) => {
            alert("データの取得に失敗しました。時間を置いてアクセスしてください。");
            console.log(`fetchMenus : ${e}`);
          });
      })
      .catch((e) => {
        console.log(e);
      });
    onClose();
  };
  // urlのパスを取得して、削除ボタンの DOM の出し分けに使用
  const urlPathName = location.pathname;

  return (
    <Box bg="#eee" py={{ base: 2, md: 4 }} px={2} h="100%">
      <CardHead goodsCalorie={calorie.toString()} goodsTitle={menuName} />
      <Box h="264px" overflowY="scroll" mb={{ base: 4, md: 6 }}>
        {titles.map((title, index) => (
          <Box mx="4" key={`${title}${index}`}>
            <Text fontSize="md" mb="4" overflow="hidden" sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "2" }}>
              {title}
            </Text>
          </Box>
        ))}
      </Box>
      <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content" display="flex">
        {urlPathName === "/my-page" && (
          <Box mr={4}>
            <ButtonCercleOrange onClick={onOpen} icon={faTrash} />
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {menuName}を削除しますがよろしいですか？
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        goodsDeleteInMyMenu(id);
                      }}
                      ml={3}
                    >
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Box>
        )}
        <ButtonCercleOrangeEditting goodsDetailId={goodsDetailId} menuName={menuName} />
      </Box>
      <Box>
        <CardFooter goodsProtein={protein} goodsFat={fat} goodsCarbo={carbo} />
      </Box>
    </Box>
  );
};

export default CardMyPage;
