import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RepoActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import '../../App.css';
import RepoCard from './repoCard'
class Repo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryStr : ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading && nextProps.isLoading !== this.props.isLoading) {
      this.setState({ repoArray: nextProps.repoArray })
    }
  }
  onChange = (queryStr) => {
    this.setState({queryStr});
  }
  render() {
    let { repoArray } = this.props;
    let listItems = [];
    if(repoArray) {
      listItems = repoArray.map((repo, key) => {
        return (
          <li className="liWidth" key={key}>
            <RepoCard repo={repo}/>
          </li>
        )
      });
    }
    return (
      <div>
        <div className="outerContainer mb20">
          <div className="heading">Git Repo Search Filter</div>
          <div className="flexDirRow p20">
            <input className="ipCntr" onChange={(queryStr) => this.onChange(queryStr)}/>
            <button className="searchBtn" onClick={() => this.props.getRepo(this.state.queryStr)}>Search</button>
          </div>
        </div>
        <div className="outerContainer">
          <div className="heading">Repo Search result</div>
          <div className="container">
            {this.props.isLoading ? <div>Loading....</div>
            : <ul className="ulNone">{listItems}</ul> }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repoArray: state.get('repo').get('repoArray'),
    isLoading: state.get('isLoading')
  };
}

export default connect(mapStateToProps, { ...RepoActions })(withRouter(Repo));
