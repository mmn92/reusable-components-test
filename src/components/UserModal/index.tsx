import React from "react";

import { Modal, IModalProps, listItem } from "../Modal";

export interface IUserProps {
  category: string;
  items: listItem[];
  handleClose: () => void;
  showModal: boolean;
}

export const UserModal = (props: IUserProps) => {
  const defaultUserProps: IModalProps = {
    modalTitle: "Confira os Usuários",
    ...props,
  };

  return <Modal {...defaultUserProps} />;
};
