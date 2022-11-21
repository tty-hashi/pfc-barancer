import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CardMyPage from "../oganisms/CardMyPage";
import { fetchMenus, filterAndCalculateMenus } from "../../hooks/useMenuFomat";
import { useRecoilState, useRecoilValue } from "recoil";
import { menusState, userIdState } from "../recoil/states";

type Props = {
  cercleOrangeButtonLeft: React.ReactNode;
  cercleOrangeButtonRight: React.ReactNode;
};

const CardGridMyPage: React.FC<Props> = (props) => {
  const { cercleOrangeButtonLeft, cercleOrangeButtonRight } = props;
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
  const newMenus = filterAndCalculateMenus(menus, uid);
  console.log(newMenus);

  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={{ base: 2, md: 6 }}>
      <GridItem>
        <CardMyPage cercleOrangeButtonLeft={cercleOrangeButtonLeft} cercleOrangeButtonRight={cercleOrangeButtonRight} />
      </GridItem>
    </Grid>
  );
};

export default CardGridMyPage;
