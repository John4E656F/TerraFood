import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileUpload from 'react-mui-fileuploader';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Terra Food
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleFileUploadError = (error) => {

  };

  const handleFilesChange = (files) => {

  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  multiFile={true}
                  disabled={false}
                  title="Upload Images"
                  header="[Drag to drop]"
                  leftLabel="or"
                  rightLabel="to select files"
                  buttonLabel="click here"
                  buttonRemoveLabel="Remove all"
                  maxFileSize={10}
                  maxUploadFiles={0}
                  maxFilesContainerHeight={357}
                  errorSizeMessage={'fill it or move it to use the default error message'}
                  allowedExtensions={['jpg', 'jpeg']}
                  onFilesChange={handleFilesChange}
                  onError={handleFileUploadError}
                //   imageSrc={'path/to/custom/image'}
                  bannerProps={{ elevation: 0, variant: "outlined" }}
                  containerProps={{ elevation: 0, variant: "outlined" }}
                />
              </Grid>
              <Grid item xs={12}>
              <FileUpload
                  multiFile={true}
                  disabled={false}
                  title="Upload Video"
                  header="[Drag to drop]"
                  leftLabel="or"
                  rightLabel="to select files"
                  buttonLabel="click here"
                  buttonRemoveLabel="Remove all"
                  maxFileSize={10}
                  maxUploadFiles={0}
                  maxFilesContainerHeight={357}
                  errorSizeMessage={'fill it or move it to use the default error message'}
                  allowedExtensions={['jpg', 'jpeg']}
                  onFilesChange={handleFilesChange}
                  onError={handleFileUploadError}
                //   imageSrc={'path/to/custom/image'}
                  bannerProps={{ elevation: 0, variant: "outlined" }}
                  containerProps={{ elevation: 0, variant: "outlined" }}
                />
              </Grid>
              <Grid item xs={12}>
                <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                //   subheader={
                //     <ListSubheader component="div" id="nested-list-subheader">
                //       Nested List Items
                //     </ListSubheader>
                //   }
                >
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>

                      </ListItemIcon>
                      <ListItemText primary="Category" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Breakfast" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Lunch" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Dinner" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Salad" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Main-dish" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Side-dish" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Snack" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Soup" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Vegetarian" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Vegan" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Mediterranean" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Keto" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Carnivore" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Paleo" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Pescetarian" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Low-fat" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Nordic" />
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <Checkbox  />
                          <ListItemText primary="Asian" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                </List>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}