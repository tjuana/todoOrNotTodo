import { shallow } from 'enzyme';
import React from 'react';
import { TaskInputl } from '../TaskInput.jsx';

describe('TaskInput component test', () => {
  let props;
  let wrap;
  let event;

  beforeEach(() => {
    props = {
      add: jest.fn(),
      tasks: [],
    };
    event = {
      preventDefault: jest.fn(),
    };
    wrap = shallow(<TaskInputl {...props} {...event} />);
  });

  it('should render init state', () => {
    expect(wrap.find('input').length).toBe(1);
    expect(wrap.find('button').length).toBe(1);
  });

  it('should div class taskBlock', () => {
    expect(wrap.find('div').hasClass('taskBlock')).toBe(true);
  });

  it('should ', () => {
    const input = wrap.find('input');
    input.simulate('change', { target: { value: 'change' } });
    expect(wrap.find('input').prop('value')).toBe('change');
  });

  it('should text', () => {
    const button = wrap.find('button');
    expect(button.text()).toBe('ADD...');
  });

  it('should button click', () => {
    const input = wrap.find('input');
    input.simulate('change', { target: { value: 'change' } });
    wrap.find('button').at(0).simulate('click');
    expect(props.add).toHaveBeenCalledTimes(1);
  });
});
