import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
// import store from '../../redux/store';

// const Results = () => {
//   return (
//     <>
//       <Page />
//     </>
//   );
// };

class Results extends Component {
  render() {
    const { suggestions } = this.props;

    console.log(suggestions);

    return (
      <Page suggestions = {suggestions}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      suggestions: state.suggestions,
    };
};


export default connect(mapStateToProps)(Results);