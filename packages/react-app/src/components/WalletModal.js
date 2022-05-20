import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as MetamaskIcon } from "../background/metamask.svg";
import { ReactComponent as WalletConnectIcon } from "../background/wallet-connect.svg";

export const WalletModal = ({ open, handleClose, onMetaMaskClick, onWalletConnectClick }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box className="wallet-button-modal">
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Please select your wallet
				</Typography>
				<Box display="flex" justifyContent="space-around">
					<Box style={{ display: "flex", flexDirection: "column" }}>
						<IconButton
							color="primary"
							aria-label="Metamask Wallet"
							component="span"
							onClick={onMetaMaskClick}
							className="zoom"
						>
							<MetamaskIcon />
						</IconButton>
						<Typography>Metamask</Typography>
					</Box>
					<Box style={{ display: "flex", flexDirection: "column" }}>
						<IconButton
							className="zoom"
							color="primary"
							aria-label="Metamask Wallet"
							component="span"
							onClick={onWalletConnectClick}
						>
							<WalletConnectIcon />
						</IconButton>
						<Typography>WalletConnect</Typography>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
