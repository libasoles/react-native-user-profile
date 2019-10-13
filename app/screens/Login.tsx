import React from "react";
import styled from "styled-components/native";

import colors from "../config/colors";
import texts from "../config/texts";
import TextFragment from "../components/TextFragment";
import TextButton from "../components/TextButton";
import Header from "./Login/Header";
import Form from "./Login/Form";

function Footer() {
  return (
    <Register>
      <TextFragment style={{ color: colors.text.lighter, fontSize: 14 }}>
        {texts.login.form.noAccount}
      </TextFragment>
      <TextButton style={{ fontSize: 14 }}>
        {texts.login.form.register}
      </TextButton>
    </Register>
  );
}

export default function Login() {
  return (
    <Container>
      <Header />
      <Form />
      <Footer />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg.dark};
  justify-content: space-between;
  align-items: center;
`;

const Register = styled.View`
  flex-direction: row;
  justify-content: center;
`;
