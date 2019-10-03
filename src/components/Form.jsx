import { Component } from 'react';
import React, { Fragment } from 'react';
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
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  checkMark: {
    width: 50,
    height: 50,
    color: 'green'
  }
}));

export default class Form extends Component {
  // constructor(props) {
  //   // state = {
  //   //   coffee: ''
  //   // };
  // }
  //   handleSubmit = form => {};
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}></form>
      </div>
    );
  }
}
