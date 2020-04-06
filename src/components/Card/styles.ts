import Styled from "styled-components";

export interface styleInterface {
  cardBackground?: string;
  labelColor?: string;
  textColor?: string;
}

export const CardContainer = Styled.div`
    background-color: ${(props: styleInterface) =>
      props.cardBackground ? props.cardBackground : "#fff"};
    box-shadow: 1px 1px 3px 1px rgba(100, 100, 100, 0.3);
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    padding: 15px 20px;
    width: 500px;
    box-sizing: border-box;
`;

const Label = Styled.label`
    font-size: 24px;
    color: ${(props: styleInterface) =>
      props.labelColor ? props.labelColor : "#ccc"};
    margin-bottom: 5px;
`;

const Span = Styled.span`
    font-size: 20px;
    color: ${(props: styleInterface) =>
      props.textColor ? props.textColor : "#333"};
    margin-bottom: 20px;
`;

export const TitleLabel = Styled(Label)``;

export const Title = Styled(Span)``;

export const MainLabel = Styled(Label)``;

export const MainText = Styled(Span)``;

export const DescriptionLabel = Styled(Label)``;

export const Description = Styled(Span)``;
