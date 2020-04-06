import Styled from "styled-components";

export interface styleInterface {
  image: string;
}

export const ModalOverlay = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);  
  z-index: 1000;
`;

export const ModalCard = Styled.div`
  width: 50%;
  height: 80%;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalLabel = Styled.label`
  font-size: 18px;
  color: #0eddff;
  margin-bottom: 16px;
`;

export const ModalTitle = Styled.h1`
  font-size: 44px;
  color: #333;
  margin-bottom: 24px;
`;

export const ModalList = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = Styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 10px;
  align-items: center;
`;

export const ItemImage = Styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  justify-self: center;
`;

export const ItemTitle = Styled.h2`
  font-size: 22px;
  color: #666;
`;
