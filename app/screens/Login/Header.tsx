import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import TextFragment from "../../components/TextFragment";

export default function Header() {
  return (
    <Container>
      <Background
        source={require("../../../assets/bg-header-icons-white.png")}
        resizeMode="cover"
      >
        <Logo source={require("../../../assets/logoWhite.png")} />
        <SubTitle>{texts.login.title.toUpperCase()}</SubTitle>
      </Background>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  min-height: 250px;
  max-height: 400px;
  width: ${Dimensions.get("window").width};
  align-items: center;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get("window").width * 1.7};
`;

const Logo = styled.Image`
  margin: 28px;
`;

const SubTitle = styled(TextFragment)`
  color: ${colors.text.lighter};
  font-size: 18px;
  font-weight: bold;
`;
