import { createPortal } from "react-dom";

type Props = {
  element?: JSX.Element;
  isOpen: boolean;
  onClose?: (data: any) => void;
};

const Modal = ({ element, isOpen, onClose }: Props) => {
  return isOpen
    ? createPortal(
        <div className="h-full absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
          <div className="z-10" tabIndex={10}>
            {element}
          </div>
          <div
            onClick={onClose}
            className="opacity-25 bg-black absolute top-0 left-0 bottom-0 right-0"
          ></div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
