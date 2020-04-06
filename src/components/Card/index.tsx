import React from "react";
import {
  CardContainer,
  TitleLabel,
  Title,
  MainLabel,
  MainText,
  DescriptionLabel,
  Description,
  styleInterface
} from "./styles";

export interface ICardProps {
  titleLabel: string;
  title: string;
  mainLabel: string;
  mainText: string;
  descriptionLabel: string;
  description: string;
  customStyle?: styleInterface;
}

export const Card = (props: ICardProps) => {
  const {
    titleLabel,
    title,
    mainLabel,
    mainText,
    descriptionLabel,
    description,
    customStyle
  } = props;

  return (
    <CardContainer {...customStyle}>
      <TitleLabel {...customStyle}>{titleLabel}</TitleLabel>
      <Title {...customStyle}>{title}</Title>
      <MainLabel {...customStyle}>{mainLabel}</MainLabel>
      <MainText {...customStyle}>{mainText}</MainText>
      <DescriptionLabel {...customStyle}>{descriptionLabel}</DescriptionLabel>
      <Description {...customStyle}>{description}</Description>
    </CardContainer>
  );
};
