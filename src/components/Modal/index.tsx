import React from "react";
import {
  ModalOverlay,
  ModalCard,
  ModalLabel,
  ModalTitle,
  ListItem,
  ItemImage,
  ItemTitle,
} from "./styles";

export interface listItem {
  image: string;
  title: string;
}

export interface IModalProps {
  category: string;
  modalTitle: string;
  items: listItem[];
  handleClose: () => void;
  showModal: boolean;
}

export const Modal = (props: IModalProps) => {
  const { category, items, modalTitle, handleClose, showModal } = props;

  return (
    <>
      {showModal && (
        <ModalOverlay onClick={handleClose}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalLabel>{category}</ModalLabel>
            <ModalTitle>{modalTitle}</ModalTitle>
            {items.map((item: listItem) => (
              <ListItem key={item.title}>
                <ItemImage src={item.image} />
                <ItemTitle>{item.title}</ItemTitle>
              </ListItem>
            ))}
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
};
