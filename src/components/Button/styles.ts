import Styled from "styled-components";

export interface styleInterface {
  text?: string;
  textColor?: string;
  buttonColor?: string;
  block?: boolean;
}

export const CustomButton = Styled.button`
    background-color: ${(props: styleInterface) =>
      props.buttonColor ? props.buttonColor : "#3333ff"};
    color: ${(props: styleInterface) =>
      props.textColor ? props.textColor : "#fff"};
    border: none;
    padding: 20px 40px;
    border-radius: 4px;
    display: ${(props: styleInterface) =>
      props.block ? "block" : "inline-block"};
    width: ${(props: styleInterface) => (props.block ? "100%" : "")};
    margin: 15px 0;
    cursor: pointer;

    &::after {
      content: '${(props: styleInterface) => (props.text ? props.text : "")}';
    }
`;
