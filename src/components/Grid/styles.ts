import Styled from "styled-components";
import { IGridProps } from "./index";

export const GridContainer = Styled.div`
    display: grid;
    width: max-content;
    margin: 0 auto;
    grid-template-columns: ${(props: IGridProps) =>
      props.columns ? `repeat(${props.columns}, 1fr)` : "1fr 1fr 1fr"};
    grid-column-gap: 15px;
    grid-row-gap: 20px;
`;
