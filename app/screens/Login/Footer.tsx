import React from "react";
import styled from "styled-components/native";

import texts from "../../config/texts";
import colors from "../../config/colors";
import TextFragment from "../../components/TextFragment";
import TextButton from "../../components/TextButton";

export default function Footer() {
  return (
    <Register>
      <Label>{texts.login.form.noAccount}</Label>
      <Link>{texts.login.form.register}</Link>
    </Register>
  );
}

const Register = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  max-height: 55px;
`;

const Label = styled(TextFragment)`
  color: ${colors.text.lighter};
  font-size: 16px;
`;

const Link = styled(TextButton)`
  margin-left: 5px;
  font-size: 16px;
  color: ${colors.text.light};
`;
