import React from 'react';
import {connect} from 'react-redux';
import './directory.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';