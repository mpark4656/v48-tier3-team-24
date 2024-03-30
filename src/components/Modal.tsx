import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
  modalOpen: boolean;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      {props.modalOpen && (
        <div className="fixed right-0 top-0 h-full w-full bg-black bg-opacity-50 bg-blend-color-burn z-50">
          <div className="flex h-full items-center justify-center">
            <div className="rounded-lg border bg-white py-10 shadow-lg">
              <div className="px-10">{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
