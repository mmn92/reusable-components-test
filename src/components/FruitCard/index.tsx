import React from "react";

import { Card, ICardProps } from "../Card";

export interface IFruitProps {
  title: string;
  mainText: string;
  description: string;
}

export const FruitCard = (props: IFruitProps) => {
  const defaultFruitProps: ICardProps = {
    titleLabel: "Fruit",
    mainLabel: "Color",
    descriptionLabel: "Taste",
    customStyle: {
      labelColor: "#ccccff",
      textColor: "#1b1ebb"
    },
    ...props
  };

  return <Card {...defaultFruitProps} />;
};
