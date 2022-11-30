import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import CardMyPage from "../oganisms/CardMyPage";
import { MyMenus, useMenuFomat } from "../../hooks/useMenuFomat";
import { useRecoilState } from "recoil";
import { menusState } from "../recoil/states";
import { fetchMenus } from "../../api/fetch";

type Props = {
  uid?: string;
};

const CardGridMyPage: React.FC<Props> = (props) => {
  const { uid } = props;
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
  const myMenus: MyMenus[] = useMenuFomat(menus, uid);

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }} py={{ base: "8", md: "12" }}>
      {myMenus.map((myMenu) => (
        <GridItem key={myMenu.id}>
          <CardMyPage menuName={myMenu.menuName} titles={myMenu.goodsDetailName} protein={myMenu.protein} fat={myMenu.fat} carbo={myMenu.carbo} calorie={myMenu.calorie} id={myMenu.id} goodsDetailId={myMenu.goodsDetailId} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CardGridMyPage;
