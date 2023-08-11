import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, MenuItem, Menu, IconButton } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import the i18n instance
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook

const Navbar = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage(); // Get the changeLanguage function from your context

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode) => {
    // Change the active language using i18next's changeLanguage function
    i18n.changeLanguage(languageCode);

    // Update the language in your LanguageContext
    changeLanguage(languageCode);

    // Close the menu
    handleLanguageMenuClose();
  };

  return (
    <Stack direction="row" gap="40px" fontSize={"24px"} alignItems="flex-end">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack direction="row" gap="40px" justifyContent="flex-start" fontSize={"24px"} alignItems="flex-start">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>{t('navbar.home')}</Link>
        <a href="/#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>{t('navbar.exercises')}</a>
        <Link to="/track" style={{ textDecoration: 'none', color: '#3A1212' }}>{t('navbar.trackProgress')}</Link>
        <Link to="/RecordData" style={{ textDecoration: 'none', color: '#3A1212' }}>{t('navbar.RecordData')}</Link>
        <Link
          to="/plan"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          {t('navbar.AIPlanner')}
        </Link>
        <IconButton
          onClick={handleLanguageMenuOpen}
          color="inherit"
          size="large"
        >
          <LanguageIcon />
        </IconButton>
        <Menu
        zIndex="10"
        
          anchorEl={anchorEl}
          open={open}
          onClose={handleLanguageMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>
            {t('navbar.language.english')}
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange('fr')}>
            {t('navbar.language.french')}
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange('es')}>
            {t('navbar.language.spanish')}
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
}

export default Navbar;
