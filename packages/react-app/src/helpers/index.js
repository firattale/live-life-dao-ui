import toast from "react-hot-toast";

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const toastCreator = (state, { pendingText, successText }) => {
	const { status } = state;
	switch (status) {
		case "PendingSignature":
			toast.loading(pendingText);
			break;
		case "Mining":
			toast.loading("Waiting, transactions may take a few minutes...");
			break;
		case "Exception" || "Fail":
			toast.dismiss();
			toast.error(state.errorMessage);
			break;
		case "Success":
			toast.dismiss();
			toast.success(successText);
			break;
		default:
			break;
	}
};
