import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class RepoCard extends React.Component {

  render() {
    let { repo }  = this.props;
    return (
      <div className="cardContainer">
        <img src={repo.owner.avatar_url} className="avatar"/>
        <h3 className="textCenter">{repo.name}</h3>
        <div className="rowContainer">
          <div className="greyBtn">starts {repo.watchers}</div>
          <div className="greyBtn">fork {repo.forks}</div>
          <div className="greyBtn">Open issues {repo.open_issues}</div>
        </div>
        <div className="discpCntr"><div className="discription">{repo.description}</div></div>
        <button className="viewBtn"><a className="viewBtn" href={repo.html_url} target="_blank">VIEW PROFILE</a></button>
      </div>
    )
  }
}

export default connect()(withRouter(RepoCard));
