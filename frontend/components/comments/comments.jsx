import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComments();
  }
}
