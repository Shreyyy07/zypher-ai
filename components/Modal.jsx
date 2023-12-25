import React from "react";
// import Image from ""

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    };
    return (
        <div
            className="fixed inset-0 bg-transparent bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            onClick={handleClose}
        >
            <div className="w-[600px] flex flex-col">
                <button className="text-gray text-xl" onClick={() => onClose()}>
                    X
                </button>
                {/* <Image
               width={205}ṭ
               height={164}
               alt="user"
               src={Image} */}

                <div className="bg-white p-2 rounded">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
