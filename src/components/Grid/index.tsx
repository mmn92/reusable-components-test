import React from "react";

import { GridContainer } from "./styles";

export interface IGridProps {
  columns?: number;
  children: JSX.Element[];
}

export const Grid = (props: IGridProps) => {
  const { columns } = props;

  return <GridContainer columns={columns}>{props.children}</GridContainer>;
};
