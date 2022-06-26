import {
	AppBar,
	Box,
	Badge,
	InputBase,
	styled,
	Toolbar,
	Typography,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import { FilterVintage, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	width: "40%",
	padding: "0 10px",
	backgroundColor: "white",
	borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					LULUSAIKOU
				</Typography>
				<FilterVintage sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar
						onClick={() => setOpen(true)}
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/5810795/pexels-photo-5810795.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-5810795.jpg&fm=jpg"
					/>
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/5810795/pexels-photo-5810795.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-5810795.jpg&fm=jpg"
					/>
					<Typography variant="span">wlulu</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
