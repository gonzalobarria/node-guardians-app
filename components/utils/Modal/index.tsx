import { TheModal } from '@/helpers/interfaces';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { StyledModal, StyledModalOverlay } from './styles';

const Modal = ({ children }: TheModal) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = (
		<StyledModalOverlay>
			<StyledModal>{children}</StyledModal>
		</StyledModalOverlay>
	);

	if (isBrowser) {
		return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
	} else {
		return null;
	}
};

export default Modal;
