import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  useTheme,
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  DeliveryDining as DeliveryIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    title: 'Wide Selection',
    description: 'Choose from thousands of restaurants and cuisines',
  },
  {
    icon: <DeliveryIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: 'Top Rated',
    description: 'Only the best restaurants make it to our platform',
  },
];

function App() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              JustEat Takeaway
            </Typography>
            <Button color="inherit" variant="outlined" sx={{ borderColor: 'white' }}>
              Sign In
            </Button>
          </Box>
        </Container>
      </AppBar>

      <Box
        sx={{
          bgcolor: 'background.default',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Food Delivery Made Simple
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Order your favorite meals from the best restaurants in your area.
            Fast delivery, great prices, and amazing food - all in one place.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} JustEat Takeaway Demo. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App; 