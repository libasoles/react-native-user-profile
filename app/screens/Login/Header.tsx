import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import TextFragment from "../../components/TextFragment";

export default function Header() {
  return (
    <Background
      source={require("../../../assets/bg-header-icons-white.png")}
      resizeMode="contain"
    >
      <Logo source={require("../../../assets/logoWhite.png")} />
      <SubTitle>{texts.login.title.toUpperCase()}</SubTitle>
    </Background>
  );
}

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get("window").width * 2};
`;

const Logo = styled.Image`
  margin: 28px;
`;

const SubTitle = styled(TextFragment)`
  color: ${colors.text.lighter};
  font-size: 18px;
  font-weight: bold;
`;
