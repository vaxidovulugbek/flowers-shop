import React from "react";

export interface SigninPageProps {
	onClose: () => void;
	onNext: () => void;
	closeSecondModal: () => void;
	isSecondModalOpen: any;
}

export interface AppProps {
	children?: React.ReactNode;
}
