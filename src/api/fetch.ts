import { useSetRecoilState } from "recoil";
import { goodsList } from "../components/recoil/states";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebaseSettings/firebase";

export const goodsFetch = () => {
  const setgoodsListState = useSetRecoilState(goodsList);
  const fetchTodo = async () => {
    const goods = query(collection(db, "goods"));
    const querySnapshot = await getDocs(goods);
    let goodsList = [];
    querySnapshot.forEach((doc) => {
      goodsList.push({
        id: doc.id,
        goodsTitle: doc.data().goodsTitle,
        goodsValue: doc.data().goodsValue,
        goodsCalorie: doc.data().goodsCalorie,
        goodsProtein: doc.data().goodsProtein,
        goodsFat: doc.data().goodsFat,
        goodsCarbo: doc.data().goodsCarbo,
        goodsUrl: doc.data().goodsUrl,
      });
    });
    setgoodsListState(goodsList);
  };
  fetchTodo();
};
