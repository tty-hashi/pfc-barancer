import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import CardMyPage from "../oganisms/CardMyPage";
import { fetchMenus, filterAndCalculateMenus, MyMenus } from "../../hooks/useMenuFomat";
import { useRecoilState, useRecoilValue } from "recoil";
import { menusState, userIdState } from "../recoil/states";

const CardGridMyPage: React.FC = () => {
  const uid = useRecoilValue(userIdState);
  const [menus, setMenus] = useRecoilState(menusState);

  useEffect(() => {
    fetchMenus()
      .then((resolve) => {
        setMenus(resolve);
      })
      .catch((e) => {
        alert("データの取得に失敗しました。時間を置いてアクセスしてください。");
        console.log(`fetchMenus : ${e}`);
      });
  }, []);
  const myMenus: MyMenus[] = filterAndCalculateMenus(menus, uid);

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      {myMenus.map((myMenu) => (
        <GridItem key={myMenu.id}>
          <CardMyPage menuName={myMenu.menuName} titles={myMenu.goodsDatailName} protein={myMenu.protein} fat={myMenu.fat} carbo={myMenu.carbo} calorie={myMenu.calorie} id={myMenu.id} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardGridMyPage;
