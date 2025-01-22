import { toast } from "react-toastify";

export const notifications = {
	success: (message: any) => toast.success(message),
	warning: (message: any) => toast.warning(message),
	error: (message: any) => toast.error(message),
};
