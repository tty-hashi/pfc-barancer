import React from "react";
import { Box, Text } from "@chakra-ui/react";

import CardHead from "../molecules/CardHead";
import CardFooter from "../molecules/CardFooter";
import ButtonCercleOrange from "../atoms/buttons/ButtonCercleOrange";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseSettings/firebase";
import { fetchMenus } from "../../hooks/useMenuFomat";
import { useSetRecoilState } from "recoil";
import { menusState } from "../recoil/states";
import ButtonCercleOrangeEditting from "../atoms/buttons/ButtonCercleOrangeEditting";

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

  /**
   * firebase からデータを削除して、再fetch
   * @param {string} id ドキュメントid
   * @param {string} menuName reject時の処理に使用
   */
  const goodsDeleteInMyMenu = async (id: string, menuName: string) => {
    if (!confirm(`${menuName}を削除しますがよろしいですか？`)) return;
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
  };
  return (
    <Box bg="#eee" py={{ base: 2, md: 4 }} px={2}>
      <Box>
        <CardHead goodsCalorie={calorie.toString()} goodsTitle={menuName} />
        {titles.map((title, index) => (
          <Box mx="4" my={{ base: 4, md: 6 }} key={`${title}${index}`}>
            <Text fontSize="md" mb="4" overflow="hidden" sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "2" }}>
              {title}
            </Text>
          </Box>
        ))}
        <Box ml="auto" mr={0} mb={{ base: 4, md: 6 }} width="fit-content" display="flex">
          <Box mr={4}>
            <ButtonCercleOrange
              onClick={() => {
                goodsDeleteInMyMenu(id, menuName);
              }}
              icon={faTrash}
            />
          </Box>
          <ButtonCercleOrangeEditting goodsDetailId={goodsDetailId} menuName={menuName} />
        </Box>
      </Box>
      <Box>
        <CardFooter goodsProtein={protein} goodsFat={fat} goodsCarbo={carbo} />
      </Box>
    </Box>
  );
};

export default CardMyPage;
