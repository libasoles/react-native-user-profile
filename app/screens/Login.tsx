import React from "react";
import styled from "styled-components/native";

import colors from "../config/colors";
import Header from "./Login/Header";
import Form from "./Login/Form";
import Footer from "./Login/Footer";

type Props = {
  onSubmit: (any) => void;
};

export default function Login({ onSubmit }: Props) {
  return (
    <Container behavior="position" enabled>
      <Header />
      <Form onSubmit={onSubmit} />
      <Footer />
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.bg.dark};
  justify-content: space-between;
  align-items: center;
`;
