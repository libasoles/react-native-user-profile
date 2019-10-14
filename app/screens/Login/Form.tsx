import React, { useCallback, useState } from "react";
import styled from "styled-components/native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextFragment from "../../components/TextFragment";
import TransparentButton from "../components/TransparentButton";

type Props = {
  onSubmit: (any) => void;
};

const innerMargin = {
  marginTop: 6,
  marginBottom: 6
};

function useForm(onSubmit) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const submit = useCallback(() => {
    onSubmit({ username, password });
  }, [username, password]);

  return {
    username,
    password,
    submit,
    setUser: useCallback(({ target }) => {
      setUser(target.value);
    }, []),
    setPassword: useCallback(({ target }) => {
      setPassword((target as HTMLInputElement).value);
    }, [])
  };
}

export default function Form({ onSubmit }: Props) {
  const { username, password, setUser, setPassword, submit } = useForm(
    onSubmit
  );

  return (
    <Container>
      <FacebookButton>{texts.login.withFacebook.toUpperCase()}</FacebookButton>

      <FormDivider />

      <Input
        onChange={setUser}
        placeholder={texts.login.form.user}
        value={username}
        style={{ ...innerMargin }}
      />

      <Input
        onChange={setPassword}
        placeholder={texts.login.form.password}
        value={password}
        style={{ ...innerMargin }}
      />

      <SubmitButton style={{ ...innerMargin }} testID="submit" onPress={submit}>
        {texts.login.form.button.toUpperCase()}
      </SubmitButton>

      <TransparentButton>{texts.login.form.forgot}</TransparentButton>
    </Container>
  );
}

function FormDivider() {
  return (
    <Divider>
      <DividerLine />
      <DividerText> o </DividerText>
      <DividerLine />
    </Divider>
  );
}

const Container = styled.View`
  margin: 0 25px;
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
