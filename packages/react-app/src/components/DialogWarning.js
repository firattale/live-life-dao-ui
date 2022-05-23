import { IconButton, Dialog, DialogTitle, DialogContentText, DialogContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function DialogWarning({ open, handleClose, content }) {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className=""
			sx={{
				"& .MuiDialog-paper": {
					backgroundColor: " #383838",
				},
				"& .MuiTypography-root": {
					color: "#ee796a",
					fontFamily: "Montserrat",
				},
				"& a": {
					color: "#ee796a",
				},
			}}
		>
			<DialogTitle id="alert-dialog-title">
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 2,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{content}
					</Typography>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}
