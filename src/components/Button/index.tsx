import React from "react";
import { CustomButton, styleInterface } from "./styles";

export interface IButtonProps extends styleInterface {
  handleClick: () => void;
}

export const Button = (props: IButtonProps) => {
  return <CustomButton {...props} onClick={props.handleClick} />;
};
