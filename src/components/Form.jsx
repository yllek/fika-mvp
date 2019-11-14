import React, { Fragment } from 'react';
const { API_KEY } = require('../config');
const client = filestack.init(API_KEY);
import axios from 'axios';
import UploadImage from './UploadImage.jsx';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  TextField,
  Checkbox,
  Grid,
  Button,
  Slide,
  Box,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    'border-radius': 0,
    padding: '15px'
  },
  root: {
    textAlign: 'center'
  }
}));

const defaultForm = {
  name: '',
  date: '',
  description: '',
  photo: []
};

const InputForm = () => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(defaultForm);
  const [error, setErrors] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [age, setAge] = React.useState('');
  const classes = useStyles();

  const handleChange = e => {
    if (e.age) {
      setAge(event.target.value);
    }
    e.persist();
    setForm(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleUpload = event => {
    // event.preventDefault();

    let photo = [];
    let process = uploadData => {
      console.log('uploaded data', uploadData);
      let allPhotos = uploadData.filesUploaded;
      for (let i = 0; i < allPhotos.length; i++) {
        photo.push(allPhotos[i].url);
      }
      this.setState({
        photo: photo
      });
    };
    const options = {
      maxFiles: 1,
      accept: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/bmp',
        'image/gif',
        'application/pdf'
      ],
      storeTo: {
        container: 'devportal-customers-assets',
        path: 'user-uploads/',
        region: 'us-east-1'
      },
      fromSources: ['local_file_system'],
      uploadInBackground: false,
      onUploadDone: process
    };
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const submitForm = form => {
    console.log('this is the submitted form', form);
    axios({
      method: 'post',
      url: `http://localhost:3000/mongo`,
      data: {
        alternative: 'woring',
        name: form.name,
        where: form.where,
        date: form.date,
        description: form.description,
        photo: form.photo,
        features: form.features,
        long_description: form.long_description,
        latitude: form.latitude,
        longitude: form.longitude
      }
    })
      .then(data => {
        setSuccess(true);
      })
      .catch(err => {
        console.log(err);
        alert('Error occurred when submitting your journal entry');
      });
  };

  const handleSubmit = form => {
    submitForm(form);
  };

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
    setForm(defaultForm);
    setErrors(false);
    setSuccess(false);
  }

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Add Entry</Button>
      <Dialog
        maxWidth='sm'
        fullWidth={!success}
        open={open}
        onClose={handleClose}
        onClick={success ? handleClose : () => {}}
        aria-labelledby='form-dialog-title'>
        {!success ? (
          <Fragment>
            {' '}
            <DialogTitle>How was your coffee?</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  multiline
                  inputProps={{ maxLength: 100 }}
                  fullWidth
                  label='Name'
                  placeholder='Moseph Jartin Reserve'
                  onChange={handleChange.bind(this)}
                  value={form.name}
                  name='name'
                />
                <br />
                <TextField
                  multiline
                  inputProps={{ maxLength: 100 }}
                  fullWidth
                  label='Where did you have it?'
                  placeholder='Counter Culture Coffee'
                  onChange={handleChange.bind(this)}
                  value={form.where}
                  name='where'
                />
                <TextField
                  id='date'
                  label='When did you have it?'
                  placeholder='10/4/2019'
                  fullWidth
                  onChange={handleChange.bind(this)}
                  value={form.date}
                  name='date'
                />
                <TextField
                  id='description'
                  fullWidth
                  label='What did it taste like?'
                  inputProps={{ maxLength: 200 }}
                  placeholder='Like a sweet white peach on a warm summer day'
                  onChange={handleChange.bind(this)}
                  value={form.description}
                  name='description'
                />
                <Checkbox
                  value={form.features}
                  label='What did it taste like?'
                  inputProps={{
                    'aria-label': 'uncontrolled-checkbox'
                  }}
                />
                <TextField
                  id='description'
                  id='long_description'
                  fullWidth
                  label='What else did you really like about it?'
                  inputProps={{ maxLength: 200 }}
                  placeholder=''
                  onChange={handleChange.bind(this)}
                  value={form.long_description}
                  name='long_description'
                />
                {/* <TextField
                  id='images'
                  fullWidth
                  label='Add your image url here'
                  inputProps={{ maxLength: 2000 }}
                  placeholder='http://hackreactor.com'
                  onChange={handleChange.bind(this)}
                  value={form.photo}
                  name='photo'
                /> */}
                <TextField
                  id='latitude'
                  fullWidth
                  label='Latitude'
                  inputProps={{ maxLength: 2000 }}
                  placeholder='40.2291'
                  onChange={handleChange.bind(this)}
                  value={form.latitude}
                  name='latitude'
                />
                <TextField
                  id='longitude'
                  fullWidth
                  label='Longitude'
                  inputProps={{ maxLength: 2000 }}
                  placeholder='33.9990'
                  onChange={handleChange.bind(this)}
                  value={form.longitude}
                  name='longitude'
                />
                {/* <Button className={classes.button} onClick={handleOpen}>
                  Open the select
                </Button> */}
                {/* <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='demo-controlled-open-select'>
                    Age
                  </InputLabel>
                  <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'demo-controlled-open-select'
                    }}>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
                <UploadImage
                  form={form}
                  handleUpload={handleUpload.bind(this)}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Grid container justify='flex-end'>
                <button onClick={handleClose} color='secondary'>
                  Cancel
                </button>
                <button
                  onClick={e => {
                    event.preventDefault();
                    handleSubmit(form);
                  }}>
                  Submit
                </button>
              </Grid>
            </DialogActions>
          </Fragment>
        ) : (
          <Fragment>
            <DialogTitle>Great! Thanks for the submission.</DialogTitle>
          </Fragment>
        )}
      </Dialog>
    </Fragment>
  );
};

export default InputForm;
