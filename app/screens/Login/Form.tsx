import React from "react";
import styled from "styled-components/native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextButton from "../../components/TextButton";
import TextFragment from "../../components/TextFragment";

const elementMargin = {
  marginTop: 5,
  marginBottom: 5
};

function FormDivider() {
  return (
    <Divider>
      <DividerLine />
      <DividerText> o </DividerText>
      <DividerLine />
    </Divider>
  );
}

export default function Form() {
  return (
    <FormContainer>
      <FacebookButton>{texts.login.withFacebook.toUpperCase()}</FacebookButton>

      <FormDivider />

      <Input
        onChange={() => {}}
        placeholder={texts.login.form.user}
        value=""
        style={{ ...elementMargin }}
      />

      <Input
        onChange={() => {}}
        placeholder={texts.login.form.password}
        value=""
        style={{ ...elementMargin }}
      />

      <SubmitButton style={{ ...elementMargin }}>
        {texts.login.form.button.toUpperCase()}
      </SubmitButton>

      <TextButton>{texts.login.form.forgot}</TextButton>
    </FormContainer>
  );
}

const FacebookButton = styled(Button)`
  background-color: #3b5998;
  color: ${colors.text.lighter};
`;

const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

const Divider = styled.View`
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

const DividerLine = styled.View`
  border: 1.2px solid ${colors.text.secondary};
  width: 100%;
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
