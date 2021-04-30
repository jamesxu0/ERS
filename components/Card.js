import React from "react";
import { View } from "react-native";
import AceH from "./../assets/card-images/AH.svg";
import AceD from "./../assets/card-images/AD.svg";
import AceC from "./../assets/card-images/AC.svg";
import AceS from "./../assets/card-images/AS.svg";
import TwoH from "./../assets/card-images/2H.svg";
import TwoD from "./../assets/card-images/2D.svg";
import TwoC from "./../assets/card-images/2C.svg";
import TwoS from "./../assets/card-images/2S.svg";
import ThreeH from "./../assets/card-images/3H.svg";
import ThreeD from "./../assets/card-images/3D.svg";
import ThreeC from "./../assets/card-images/3C.svg";
import ThreeS from "./../assets/card-images/3S.svg";
import FourH from "./../assets/card-images/4H.svg";
import FourD from "./../assets/card-images/4D.svg";
import FourC from "./../assets/card-images/4C.svg";
import FourS from "./../assets/card-images/4S.svg";
import FiveH from "./../assets/card-images/5H.svg";
import FiveD from "./../assets/card-images/5D.svg";
import FiveC from "./../assets/card-images/5C.svg";
import FiveS from "./../assets/card-images/5S.svg";
import SixH from "./../assets/card-images/6H.svg";
import SixD from "./../assets/card-images/6D.svg";
import SixC from "./../assets/card-images/6C.svg";
import SixS from "./../assets/card-images/6S.svg";
import SevenH from "./../assets/card-images/7H.svg";
import SevenD from "./../assets/card-images/7D.svg";
import SevenC from "./../assets/card-images/7C.svg";
import SevenS from "./../assets/card-images/7S.svg";
import EightH from "./../assets/card-images/8H.svg";
import EightD from "./../assets/card-images/8D.svg";
import EightC from "./../assets/card-images/8C.svg";
import EightS from "./../assets/card-images/8S.svg";
import NineD from "./../assets/card-images/9D.svg";
import NineH from "./../assets/card-images/9H.svg";
import NineC from "./../assets/card-images/9C.svg";
import NineS from "./../assets/card-images/9S.svg";
import TenD from "./../assets/card-images/10D.svg";
import TenH from "./../assets/card-images/10H.svg";
import TenC from "./../assets/card-images/10C.svg";
import TenS from "./../assets/card-images/10S.svg";
import JackD from "./../assets/card-images/JD.svg";
import JackH from "./../assets/card-images/JH.svg";
import JackC from "./../assets/card-images/JC.svg";
import JackS from "./../assets/card-images/JS.svg";
import QueenD from "./../assets/card-images/QD.svg";
import QueenH from "./../assets/card-images/QH.svg";
import QueenC from "./../assets/card-images/QC.svg";
import QueenS from "./../assets/card-images/QS.svg";
import KingD from "./../assets/card-images/KD.svg";
import KingH from "./../assets/card-images/KH.svg";
import KingC from "./../assets/card-images/KC.svg";
import KingS from "./../assets/card-images/KS.svg";
import BlueB from "./../assets/card-images/BB.svg";
import RedB from "./../assets/card-images/RB.svg";
import GreenB from "./../assets/card-images/GB.svg";

const typeToCard = {
  AceH: AceH,
  AceD: AceD,
  AceC: AceC,
  AceS: AceS,
  TwoH: TwoH,
  TwoD: TwoD,
  TwoC: TwoC,
  TwoS: TwoS,
  ThreeH: ThreeH,
  ThreeD: ThreeD,
  ThreeC: ThreeC,
  ThreeS: ThreeS,
  FourH: FourH,
  FourD: FourD,
  FourC: FourC,
  FourS: FourS,
  FiveH: FiveH,
  FiveD: FiveD,
  FiveC: FiveC,
  FiveS: FiveS,
  SixH: SixH,
  SixD: SixD,
  SixC: SixC,
  SixS: SixS,
  SevenH: SevenH,
  SevenD: SevenD,
  SevenC: SevenC,
  SevenS: SevenS,
  EightH: EightH,
  EightD: EightD,
  EightC: EightC,
  EightS: EightS,
  NineH: NineH,
  NineD: NineD,
  NineC: NineC,
  NineS: NineS,
  TenH: TenH,
  TenD: TenD,
  TenC: TenC,
  TenS: TenS,
  JackH: JackH,
  JackD: JackD,
  JackC: JackC,
  JackS: JackS,
  QueenH: QueenH,
  QueenD: QueenD,
  QueenC: QueenC,
  QueenS: QueenS,
  KingH: KingH,
  KingD: KingD,
  KingC: KingC,
  KingS: KingS,
  BlueB: BlueB,
  RedB: RedB,
  GreenB: GreenB,
};

export default function Card({ type, scale, style, rotate }) {
  const CardSvg = typeToCard[type];
  return (
    <View style={style} pointerEvents={"none"}>
      <CardSvg
        style={{ transform: [{ rotate: rotate ? rotate + "deg" : "0deg" }] }}
        height={scale}
        preserveAspectRatio="xMinYMin"
      />
    </View>
  );
}
