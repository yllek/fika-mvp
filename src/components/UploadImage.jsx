import React from 'react';
import * as filestack from 'filestack-js';
const { API_KEY } = require('../config');
const client = filestack.init(API_KEY);

//Material UI
import { Button, Box, InputLabel, Grid, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(url, id) {
    let imageSet = this.state.images.slice(0);
    imageSet.push({ url: url, id: id });
    this.setState({ images: imageSet }, () => {
      this.props.handleUpload(
        this.state.images.map(image => {
          return image.url;
        })
      );
    });
  }
  render() {
    const pickerOptions = {
      fromSources: ['local_file_system', 'instagram', 'facebook'],
      onFileUploadFinished: res => {
        this.handleUpload(res.url, res.handle);
      }
    };
    return (
      <Box id='ImageUploader'>
        <Grid container justify='flex-start' alignItems='center' spacing={3}>
          <Grid item>
            <InputLabel>Upload your photos</InputLabel>
          </Grid>
          <Grid item>
            (
            <Button
              variant='outlined'
              color='default'
              onClick={() => {
                client.picker(pickerOptions).open();
              }}>
              Upload
              <CloudUploadIcon />
            </Button>
            )
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default FileUpload;
