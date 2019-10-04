import React, { Fragment } from 'react';
const { API_KEY } = require('../config');
const client = filestack.init(API_KEY);

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  TextField,
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
  photos: []
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleUpload = event => {
    event.preventDefault();
    let photos = [];
    let process = uploadData => {
      let allPhotos = uploadData.filesUploaded;
      for (let i = 0; i < allPhotos.length; i++) {
        photos.push(allPhotos[i].url);
      }
      this.setState({
        photos: photos
      });
    };
    const options = {
      maxFiles: 5,
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

  const submitForm = form => {
    //do something in here
    axios({
      method: 'post',
      url: `http://localhost:3000/submit`,
      data: {
        name: form.name,
        date: form.date,
        description: form.description,
        photos: form.photos
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

  const handleSubmit = e => {
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
                  label='name'
                  placeholder='Moseph Jartin Reserve'
                  onChange={handleChange.bind(this)}
                  value={form.name}
                  name='name'
                />
                <br />
                <TextField
                  id='date'
                  label='When did you have it?'
                  placeholder={new Date()}
                  fullWidth
                  onChange={handleChange.bind(this)}
                  value={form.date}
                  name='date'
                />
                <TextField
                  id='description'
                  fullWidth
                  label='What did it taste like?'
                  inputProps={{ maxLength: 150 }}
                  placeholder='Like a sweet white peach on a warm summer day'
                  onChange={handleChange.bind(this)}
                  value={form.description}
                  name='description'
                />
                <TextField
                  id='long-description'
                  fullWidth
                  label='What else did you really like about it?'
                  inputProps={{ maxLength: 150 }}
                  placeholder='Something something something'
                  onChange={handleChange.bind(this)}
                  value={form.description}
                  name='long_description'
                />
                <Button className={classes.button} onClick={handleOpen}>
                  Open the select
                </Button>
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
                <button onClick={handleUpload}>Upload Photos</button>
              </form>
            </DialogContent>
            <DialogActions>
              <Grid container justify='flex-end'>
                <button onClick={handleClose} color='secondary'>
                  Cancel
                </button>
                <button
                  onClick={e => {
                    console.alert('submitted');
                    event.preventDefault();
                    handleSubmit();
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
