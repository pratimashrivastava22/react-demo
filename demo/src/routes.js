import React from 'react';
import { Route } from 'react-router-dom';
import Repo from './components/pages/repo';

const Routes = () => 
	<div className="ui container"> 
		<Route path="/" exact component={Repo}/>
	</div>

export default Routes;
