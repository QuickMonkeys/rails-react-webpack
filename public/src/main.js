import React from 'react';
import {render} from 'react-dom';

import "bootstrap-webpack";

import "../css/main.css";
import Languages from './components/languages.jsx';

render(<Languages/>, document.querySelector('#content'));