import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TaskInput.module.css';
import { addTask } from '../redux/todoActions.jsx';

class TuskInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  addTaskInput = () => {
    const { input } = this.state;
    const { add } = this.props;
    if (input) {
      add(input);
      this.setState({ input: '' });
    }
  };

  inputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div className={styles.taskInput}>
        <input onChange={this.inputChange} value={input} />
        <button onClick={this.addTaskInput} type="submit">ADD...</button>
      </div>
    );
  }
}

TuskInput.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (index) => dispatch(addTask(index)),
});
export default connect(null, mapDispatchToProps)(TuskInput);
