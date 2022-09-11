import React, {useState} from 'react';
import axios from "axios";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
    Collapse,
    List,
    ListItem,
    ListSubheader,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FileUpload from 'react-mui-fileuploader';
import {categoryList} from './catText';
import storage from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


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

export default function RecipeSubmit(props) {

  // const [form, setForm] = useState({
  //   name: "",
  //   description: "",
  // })

  // const inputChangeHandler = (event) => {
  //   const { name, description } = event.target;
  //   if(name){
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       name: 
  //     }))
  //   } else if(description){
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       description: 
  //     }))
  //   }
  // }
  const [ name, setName] = useState('')
  const [ description, setDescription] = useState('');

  const [ image, setImage ] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imgFileName, setImgFileName] = useState('');
  const[progress,setProgress]=useState(0);

  const imgUploadHandler = (e) => {

    const img = document.getElementById("uploadImg").files[0];
      setImgFileName(image.name); //set filename
      setImage(image); //set file

      const uploadTask = storage.ref(`recipes/images/${img.name}`).put(image);

    // if (!img) return;

    // const storageRef = ref(storage, `recipes/images/${img.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on("state_changed",
      (snapshot) => {
        //file upload progress report
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress({progress});
      },
      //file upload failed
      (error) => {
        console.log(error);
      },
      //file upload completed
      () => {
        storage.ref(`recipes`).child(`${imgFileName}`).getDownloadURL()
        .then(
          //get download url
          (downloadURL) => {
          setImageUrl(downloadURL);
          console.log(downloadURL);
          console.log(imageUrl);
        },
        //failed to get download url
        (error) => {
          console.log(error);
        }
        );
      }
    )
  }


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [checkedItems, setCheckedItems] = React.useState({});

  const handleCheck = (event) => {
    setCheckedItems({
      ...checkedItems, 
      [event.target.name] : event.target.checked
    });
    // console.log("checkedItems: ", checkedItems);
  }

  const categoryComponent = categoryList.categoryText.map((catTextComp, i) => (
    <List component="div" key={catTextComp.id} disablePadding>
      <ListItemButton sx={{ pl: 4 }} key={catTextComp.id}>
        <FormControlLabel
          control={
            <Checkbox
              name={catTextComp.text}
              checked={checkedItems[catTextComp.id]}
              onChange={handleCheck}
            />}
          />

        <ListItemText primary={catTextComp.text} />
      </ListItemButton>
    </List>
));

  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const saveIngredient = (e) => {
    setinputValue(e.target.value);
  };
  const addIngredient = () => {
    const copyIngr = [...ingredients];
      copyIngr.push(inputValue);
      setIngredients(copyIngr);
      setinputValue("");
  };


  const [instructions, setInstructions] = useState([]);
  const [inputInstrucValue, setinputInstrucValue] = useState("");

  const saveInstruction = (e) => {
    setinputInstrucValue(e.target.value);
  };
  const addInstruction = () => {
    const copyInstruc = [...instructions];
      copyInstruc.push(inputInstrucValue);
      setInstructions(copyInstruc);
      setinputInstrucValue("");
  };



  const handleSubmit = (event) => {
    event.preventDefault();
      // setForm({
      //   "name": form.name,
      //   "description": form.description,
      //   "category": checkedItems,
      //   "ingredients": ingredients,
      //   "instructions": instruction,
      // });


    const newRecipe = {
      name: name,
      description: description,
      image: imageUrl,
      category: checkedItems,
      ingredients: ingredients,
      instructions: instructions,
    };

    console.log(newRecipe)

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    //   category: checkedItems,
    //   ingredients: ingredients,
    //   instructions: instruction,
    // },
    // );

    let config = {
      method: "post",
      url: "http://localhost:3000/recipe/submit",
      header: {
        "Content_type": "application/json"
      },
      data: newRecipe
    }

    // axios(config)
    //   .then(res => { console.log(res) })
    //   .catch(err => { console.log(err) })

  };

  console.log("progress:" , progress);
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
                  value={name}
                  onChange={e => setName(e.target.value)}
                  // onInput={e => setForm(e.target.value)}
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
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  // onChange={inputChangeHandler}
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
                  allowedExtensions={['jpg', 'jpeg', 'png']}
                  // onFilesSubmit={upload}
                  type="file"
                  onChange={imgUploadHandler}
                  // onFilesChange={imgUploadHandler}
                  id="uploadImg"
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
                        {categoryComponent}
                    </Collapse>
                </List>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Ingredients"
                  onChange={saveIngredient}
                  value={inputValue}
                />
                <List>
                  {ingredients.map((ingrList, i) => {
                    return (
                    <ListItem key={i} >
                      {i + 1}
                      <ListItemText
                        inset={true}
                        primary={ingrList}
                      />
                    </ListItem>
                    )
                  })}
                  <Button onClick={addIngredient}>Add Ingredient</Button>
                </List>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Instruction"
                  onChange={saveInstruction}
                  value={inputInstrucValue}
                />
                <List>
                  {instructions.map((instrucList, i) => {
                    return (
                    <ListItem key={i} >
                      Step { i + 1}:
                      <ListItemText
                        inset={true}
                        primary={instrucList}
                      />
                    </ListItem>
                    )
                  })}
                  <Button onClick={addInstruction}>Add Instruction</Button>
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