import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface HeaderProps {
    darkMode: boolean;  // Changed to `boolean` instead of `Boolean`
    handleThemeChange: () => void;  // Renamed to follow convention
}

const Header: FunctionComponent<HeaderProps> = ({ darkMode, handleThemeChange }) => {
    return (
        <>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar>
                    <Typography variant="h6">
                        RE-STORE
                    </Typography>

                    {/* Switch to toggle between dark mode and light mode */}
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
