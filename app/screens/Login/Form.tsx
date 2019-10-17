import React, { useCallback, useState } from "react";
import styled from "styled-components/native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextFragment from "../../components/TextFragment";
import TransparentButton from "../components/TransparentButton";
import { Keyboard } from "react-native";

type Props = {
  onSubmit: (any) => void;
  isAuthenticating?: boolean;
  errorMessage?: string;
};

const innerMargin = {
  marginTop: 6,
  marginBottom: 6
};

function useForm(onSubmit) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = useCallback(() => {
    Keyboard.dismiss();
    onSubmit({ username, password });
  }, [username, password]);

  return {
    username,
    password,
    submit,
    setUsername: useCallback(value => {
      setUsername(value);
    }, []),
    setPassword: useCallback(value => {
      setPassword(value);
    }, [])
  };
}

export default function Form({
  onSubmit,
  isAuthenticating = false,
  errorMessage = ""
}: Props) {
  const { username, password, setUsername, setPassword, submit } = useForm(
    onSubmit
  );

  return (
    <Container>
      <FacebookButton>{texts.login.withFacebook.toUpperCase()}</FacebookButton>

      <FormDivider active={isAuthenticating} />

      <Input
        onChange={setUsername}
        placeholder={texts.login.form.user}
        value={username}
        style={{ ...innerMargin }}
      />

      <Input
        onChange={setPassword}
        placeholder={texts.login.form.password}
        value={password}
        type="password"
        style={{ ...innerMargin }}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <SubmitButton style={{ ...innerMargin }} testID="submit" onPress={submit}>
        {texts.login.form.button.toUpperCase()}
      </SubmitButton>

      <TransparentButton>{texts.login.form.forgot}</TransparentButton>
    </Container>
  );
}

function FormDivider({ active }) {
  const divider = active ? (
    <Loading size="small" color={colors.text.secondary} />
  ) : (
    <DividerText> o </DividerText>
  );

  return (
    <Divider>
      <DividerLine />
      {divider}
      <DividerLine />
    </Divider>
  );
}

const Container = styled.View`
  margin: 0 25px;
  flex: 1;
`;

const FacebookButton = styled(Button)`
  width: 100%;
  background-color: #3b5998;
  color: ${colors.text.lighter};
`;

const Divider = styled.View`
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

const DividerLine = styled.View`
  flex: 1;
  border: 1.2px solid ${colors.text.secondary};
`;

const DividerText = styled(TextFragment)`
  color: ${colors.text.secondary};
  font-size: 24px;
  margin: 20px;
`;

const SubmitButton = styled(Button)`
  background-color: ${colors.bg.light};
  color: ${colors.text.lighter};
`;

const Loading = styled.ActivityIndicator`
  margin: 20px;
`;

const ErrorMessage = styled(TextFragment)`
  font-size: 18px;
  color: ${colors.text.error};
  padding-top: 10px;
  padding-bottom: 10px;
`;
