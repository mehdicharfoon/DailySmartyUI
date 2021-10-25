import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';


import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit(query) {
      console.log('trying to handle submit for query', query);
      this.props.fetchPostsWithQuery(query);
      this.props.history.push('/results');
  }}