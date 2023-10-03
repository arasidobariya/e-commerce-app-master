import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Divider,
} from '@mui/material';

import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Checkout() {
  let quantities = Array.from(Array(10).fill(), (_, i) => i + 1);

  return (
    <Container sx={{ mt: '30px' }}>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={8}>
          <Typography gutterBottom variant='h3'>
            Your Bag
          </Typography>
          <Card>
            <Grid container>
              <Box component='div' sx={{ flex: '0.4' }}>
                <CardMedia
                  sx={{ width: '100' }}
                  component='img'
                  height='223'
                  image='./img/G1.jpg'
                  alt='image'
                ></CardMedia>
              </Box>
              <Box component='div' sx={{ flex: '0.6' }}>
                <CardContent>
                  <Stack
                    spacing={{ xs: 3, sm: 20 }}
                    direction='row'
                    useFlexGap
                    flexWrap='wrap'
                  >
                    <Typography gutterBottom variant='h6' component='div'>
                      Item Description
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                      Price
                    </Typography>
                  </Stack>
                  <Typography gutterBottom variant='h6' component='div'>
                    Size: M
                  </Typography>
                  <Box>
                    <FavoriteBorderIcon />
                  </Box>
                  <Box sx={{ mt: 2, mb: 0 }}>
                    <FormControl sx={{ Width: 160 }}>
                      <InputLabel>Qty</InputLabel>
                      <Select label='quantities' value={quantities}>
                        {quantities.map((quantity) => {
                          return (
                            <MenuItem key={quantity} value={quantity}>
                              {quantity}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            xs={12}
            variant='contained'
            size='large'
            sx={{ justifyContent: 'left' }}
            endIcon={<DoubleArrowIcon sx={{ ml: '5' }} />}
          >
            CHECKOUT
          </Button>
          <Typography
            gutterBottom
            variant='body2'
            component='div'
            sx={{ textAlign: 'center', padding: '15px' }}
          >
            OR
          </Typography>
          <Button
            xs={12}
            fullWidth
            variant='contained'
            size='large'
            sx={{ justifyContent: 'left' }}
            endIcon={<DoubleArrowIcon sx={{ ml: '5' }} />}
          >
            PAYPAL
          </Button>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ textAlign: 'left', padding: '15px', paddingLeft: '0' }}
          >
            Order Summary
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography>1 item</Typography>
              <Typography>Tax</Typography>
              <Typography>Delivery</Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems='flex-end'
              direction='column'
            >
              <Typography>Price</Typography>
              <Typography>Tax</Typography>
              <Typography>$4.05</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={6}>
              <Typography>Total</Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems='flex-end'
              direction='column'
            >
              <Typography>Total</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Checkout;
