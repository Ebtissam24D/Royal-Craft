import "./Header.css";
import logo from "../assets/images/logo1.png";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

function HeaderArtisan() {
    const theme = useTheme();

    return (
        <header className="header">
            <div className="header-container">
                {/* LOGO */}
                <div className="logo-container">
                    <div>
                        <img src={logo} alt="Logo" style={{ width: "34px", height: "auto" }} />
                    </div>
                    <a href="/" className="logo-title">
                        Royal Craft
                    </a>
                </div>

                {/* NAVIGATION */}
                <nav className="nav-menu">
                    <a href="/" className="nav-link">
                        Tableau de bord
                    </a>
                    <a href="/categories" className="nav-link">
                        Catégories
                    </a>
                    <a href="/artisans" className="nav-link">
                        Commandes
                    </a>
                    <a href="/musee" className="nav-link">
                        Avis client
                    </a>
                </nav>

                {/* SEARCH + ICONS */}
                <Box display="flex" alignItems="center" gap={2}>
                    {/* Search Bar */}
                    <Box
                        display="flex"
                        backgroundColor="#e0e0e0"
                        borderRadius="3px"
                        padding="0 8px"
                    >
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Recherche..." />
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    {/* Icons avec couleur dorée */}
                    <IconButton>
                        <NotificationsOutlinedIcon sx={{ color: "#D4AF37" }} />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon sx={{ color: "#D4AF37" }} />
                    </IconButton>

                </Box>
            </div>
        </header>
    );
}

export default HeaderArtisan;
