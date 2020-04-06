import React from "react";

import { Card, ICardProps } from "../Card";

export interface IUserProps {
  title: string;
  mainText: string;
  description: string;
}

export const UserCard = (props: IUserProps) => {
  const defaultUserProps: ICardProps = {
    titleLabel: "Name",
    mainLabel: "Position",
    descriptionLabel: "Description",
    customStyle: {
      labelColor: "#ffcccc",
      textColor: "#e43131"
    },
    ...props
  };

  return <Card {...defaultUserProps} />;
};
