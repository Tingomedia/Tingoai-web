import { FC, ReactNode } from "react";
import Modal from "../modals/Modal3";

interface AddButtonProps {
    modalName: string;
    icon?: ReactNode;
    children: (props: { onClose: () => void }) => ReactNode;
    onClose?: () => void;
}

const WaitListModalButton: FC<AddButtonProps> = ({ modalName, children }) => {
    return (
        <Modal>
            <Modal.Open opens={modalName}>
            <button className="w-full border border-gradient-to-r from-[#797979CC] to-[#232A3E1A] hover:bg-gradient-to-r from-[#797979CC] to-[#232A3E1A] text-white font-Manrope h-[56px] rounded-lg">
            Join Waitlist
          </button>
            </Modal.Open>
            <Modal.Window name={modalName}>
                {(props) => children({ onClose: props.onClose || (() => { }) })}
            </Modal.Window>
        </Modal>
    );
};

export default WaitListModalButton;
