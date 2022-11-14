import React, { useEffect, useState } from "react";
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { GoodsList, goodsList, goodsListSource, silderValueFat, silderValueCarbo, silderValueProtein } from "../recoil/states";

type Props = {
  renderValueTextValue33: string;
  renderValueTextValue66: string;
  renderValueTextValue100: string;
  orMoreText: string;
  // goodsListFilter?: (pram: number) => any;
  sliderValue: number;
  setSliderValue: (pram: number) => void;
};

const SlideBar: React.FC<Props> = (props) => {
  const { renderValueTextValue33, renderValueTextValue66, renderValueTextValue100, orMoreText, sliderValue, setSliderValue } = props;
  // const [sliderValue, setSliderValue] = useState(50);
  const setGoodsListState = useSetRecoilState(goodsList);
  const goodsListSourceState = useRecoilValue(goodsListSource);
  // 各スライダーの現在の値
  const silderValueProteinState = useRecoilValue(silderValueProtein);
  const silderValueaFatState = useRecoilValue(silderValueFat);
  const silderValueCarboState = useRecoilValue(silderValueCarbo);  

  /**
   * スライダーの値をgへ換算
   * slider の value を100分率して、整数にする
   * @param  {number} goodsSilderValue 各sliderの state の値
   * @param  {number}  renderMaxValu 各PFCの最大値
   * @return {number}
   */
  const sliderValueToNumber = (goodsSilderValue: number ,renderMaxValu:number) => ((renderMaxValu * goodsSilderValue) / 100);

  /**
   * goodsList をフィルターして、slider 操作時にその値と対象のPFCを比較して条件に合うgoodsを取得する
   * @param {number} スライダーの値をgへ換算したもの
   * @return {GoodsList[]}
   */
  const goodsListFilter = (silderValueProteinState: number, silderValueaFatState: number, silderValueCarboState: number)=> {
    const filteredGoods = goodsListSourceState.filter((goods) => {
      console.log(sliderValueToNumber(silderValueProteinState,30) + 'gタンパク質');
      console.log(sliderValueToNumber(silderValueaFatState,25) + 'g脂質');
      console.log(sliderValueToNumber(silderValueCarboState,150) + 'g炭水化物');
      
      return Number(goods.goodsProtein) > sliderValueToNumber(silderValueProteinState,30) && Number(goods.goodsFat) < sliderValueToNumber(silderValueaFatState,25)&& Number(goods.goodsCarbo) < sliderValueToNumber(silderValueCarboState,150) ;
    });
    return filteredGoods;
  };

  // slider に変更があったら setGoodsListState をフィルターしたリストで更新
  useEffect(() => {
    setGoodsListState(goodsListFilter(silderValueProteinState, silderValueaFatState, silderValueCarboState));
  }, [sliderValue]);

  const labelStyles = {
    mt: "2",
    ml: "-6",
    fontSize: "sm",
  };

  /**
   * chakra Slider の value とレンダリングされる数値のオブジェクトを配列にしたもの
   * renderValueTextValue は、props で渡される
   * @param {number} value Slider ポジションの%
   * @param {string} renderValueText 上記%時の数値
   */
  const SliderMarkValues: Array<{ value: number; renderValueText: string }> = [
    { value: 33, renderValueText: renderValueTextValue33 },
    { value: 66, renderValueText: renderValueTextValue66 },
    { value: 100, renderValueText: renderValueTextValue100 },
  ];

  return (
    <Box pt={6} pb={2}>
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)} step={3}>
        {SliderMarkValues.map((SliderMarkValue) => (
          <SliderMark key={SliderMarkValue.value} value={SliderMarkValue.value} {...labelStyles}>
            {SliderMarkValue.renderValueText}g
          </SliderMark>
        ))}
        <SliderMark value={42} textAlign="center" bg="brand.action" color="white" mt="-12" ml="-5" w="fit-content" minW="80px" p="3px">
          {Math.floor((Number(renderValueTextValue100) * sliderValue) / 100)}g
          <Text display="inline" fontSize="10px">
            {orMoreText}
          </Text>
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack background="brand.main" />
        </SliderTrack>
        <SliderThumb _focusVisible={{ boxShadow: "0 0 0 3px rgba(252, 192, 92, 0.3) " }} />
      </Slider>
    </Box>
  );
};

export default SlideBar;
