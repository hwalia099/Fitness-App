
import React from 'react';
import { Box, Stack, Typography , Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import { useTranslation } from 'react-i18next';

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{
      mt: {lg:'212px' , xs:'70px'},
      ml: {sm:'50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontSize="600" fontWeight="26px"  mb={3}>
        {t('heroBanner.title')}
      </Typography>
      <Typography fontWeight="700" sx = {{fontSize: {lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
        {t('heroBanner.subtitle')} <br /> {t('heroBanner.subtitle2')}
      </Typography>
      <Typography fontSize="22px" lineHeight={"35px"} mb={4}>
        {t('heroBanner.description')}
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625' , padding: '10x'}}>
        {t('heroBanner.buttonText')}
      </Button>
      <Typography fontWeight={600} color="#ff2625" sx={{ opacity: 0.1, 
      display:{lg: 'block', xs:'none'}}} fontSize="200px">
        {t('heroBanner.exerciseText')}
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner;
