"use client";

import { memo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = memo(
  ({ title, description, isOpen, onClose, children }: ModalProps) => {
    const onChage = useCallback(
      (isOpen: boolean) => {
        if (!isOpen) {
          onClose();
        }
      },
      [isOpen, onClose]
    );

    return (
      <Dialog open={isOpen} onOpenChange={onChage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <div>{children}</div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
