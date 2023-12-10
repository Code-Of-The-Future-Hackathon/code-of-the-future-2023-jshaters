//everything is stacked in one file cuz i'm lazy and i don't want to make a new file for every component
//also imports are working here, so don't complain >:(

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {Link as LinkInertia} from '@inertiajs/react'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems} from '../Components/listItems';
import LogOutIcon from '@mui/icons-material/Logout';
import { Avatar, Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Modal } from '@mui/material/';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import Tile from '../Components/Tile';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import axios from 'axios';


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  
}

interface props {
  user? : any
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900], // Set AppBar color to transparent
  color: 'black', // Set AppBar text color to black
  boxShadow: 'none', // Remove shadow
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen * 1.25,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen * 1.25,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default function DashboardPage({user} : props) {
  const [logoutModal, setLogoutModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

const handleProfileMenuOpen = (event : any) => {
  setProfileAnchorEl(event.currentTarget);
};

const handleProfileMenuClose = () => {
  setProfileAnchorEl(null);
};

const [modalOpen, setModalOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setModalOpen(true);
};

const handleDrawerClose = () => {
  setModalOpen(false);
};


  const handleLogoutOpen = () => {
    setLogoutModal(true);
  }
  const handleLogoutClose = () => {
    setLogoutModal(false);
  }
  const [lat, setLat] = useState(0);
      const [lon, setLon] = useState(0);
      const [greenSpaces, setGreenSpaces] = useState([]);


  React.useEffect(() => {
    // Check if lat and lon are not 0 before sending the POST request
    if (lat !== 0 && lon !== 0) {
      axios.post('/api/v1/sortGreenSpaces', {
        lat: lat,
        lon: lon
      })
      .then((res) => {
         setGreenSpaces(res.data); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [lat, lon]);
  const [likedGreenSpacesIds, setLikedGreenSpacesIds] = useState<number[]>([]);

  function getLocation ()  {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
});
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' , width : '100vw ' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open ? { display: 'none' } : {}),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              letterSpacing={0.5}
            >
              Greenmore
            </Typography>
            <IconButton
  edge="end"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleProfileMenuOpen}
  color="inherit"
  size="large" // Make the icon larger
>
  <AccountCircle fontSize="large" />
</IconButton>


          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{[defaultTheme.breakpoints.down('sm')]: open? {position : 'absolute'} : {} }} //left drawer
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
          <Link color="inherit" href="/dashboard" sx={{textDecoration : 'none'}}>
          <ListItemButton>  
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    </Link>
    <Link color="inherit" href="/yourlocations" sx={{textDecoration : 'none'}}>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Your Locations" />
    </ListItemButton>
    <Link color="inherit" href="/maps" sx={{textDecoration : 'none'}}>
    </Link>
    <ListItemButton >
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItemButton> 
    </Link>
            <Divider sx={{ my: 1 }}  />
            <ListItemButton onClick={handleLogoutOpen}> {/* logout button */}
      <ListItemIcon>
        <LogOutIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItemButton>
          </List>
        </Drawer>

        <Box
  sx={{
    position: 'fixed',
    top: 0,
    right: 0,
    width: `100%`,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: open ? 'block' : 'none',
    zIndex: (theme) => theme.zIndex.drawer - 1,
  }}
>
  {/* Content of the overlay */}
</Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
    <Typography variant="h3" component="h2" gutterBottom sx={{mb : 2}}>
      Welcome, {user ? user.name : null}
    </Typography>
    <Typography variant="h6" component="h2" gutterBottom sx={{ pl : 1 ,mb : 10}}>
      Here are some locations for you:
    </Typography>
  </Grid>
  <Grid container spacing={2} justifyContent="center">
  <Grid item xs={7} md={7} lg={6} /* post example */>
  {greenSpaces.map((space, index) => (
        <Tile
          key={index}
          props={space}
          myLoc={[lat, lon]}
        />
      ))}

  <Box display="flex" justifyContent="center">
      <Button variant="contained">
         Load More Locations
      </Button>
  </Box>




 
</Grid>
</Grid> 
    
              
        
      </Grid>
      <Box sx={{ pt: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Made with ❤️ by JSHaters ( '}
            
          <Link color="inherit" href="https://github.com/FloweyAndinov">
            {'Flowey'}
          </Link>
          {' & '}
          <Link color="inherit" href="https://github.com/Trephyyy">
            {'Trephy'}
          </Link>
          {' )'}
        </Typography>
      </Box>
    </Container>
  </Box>
</Box>

{/* ----- Dialogs ------ */}

<Dialog /* log out dialog */
  open={logoutModal}
  onClose={handleLogoutClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
  sx={{ '.MuiPaper-root': { border: '3px solid red' } }}
>
  <DialogTitle id="alert-dialog-title">
    {"Confirm Log Out"}
  </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Are you sure you want to log out?
    </DialogContentText>
  </DialogContent>
  <DialogActions >
    <Button onClick={handleLogoutClose}>Back</Button>
    {/* 
// @ts-ignore */}
      <LinkInertia href={route('logout')} method="POST" >
      <Typography color="red" sx={{fontSize : 15}}>LOG OUT</Typography>
      </LinkInertia>
  </DialogActions>
</Dialog>


<Menu // Profile menu
  id="menu-appbar"
  anchorEl={profileAnchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={isProfileMenuOpen}
  onClose={handleProfileMenuClose}
>
<MenuItem sx={{ justifyContent: 'center'}} // Profile menu item
> 
  <Avatar
    sx={{ width: 56, height: 56 }}
    onClick={handleProfileMenuClose} // Make the avatar larger
  />
</MenuItem>
<Link href="/profile" sx={{textDecoration : 'none'}}>
<Box mb={1}>
  <Typography variant="body1" color="textPrimary" mx={7.5}>
    {user ? user.name : null}
  </Typography>
</Box>
<Box mb={1} >
  <Typography variant="body2" color="textSecondary" mx={5}>
    {user ? user.email : null}
  </Typography>
</Box>
  <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
</Link>

</Menu>


</ThemeProvider>
  );
}
