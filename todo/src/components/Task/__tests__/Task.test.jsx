import { shallow, mount } from 'enzyme';
import React from 'react';
import { TaskList } from '../Task.jsx';

describe('Task lits component test', () => {
  let props;
  let wrap;

  beforeEach(() => {
    props = {
      editInput: jest.fn(),
      editView: jest.fn(),
      id: 0,
      isEditMode: false,
      isDone: false,
      title: 'blabla',
    };
    wrap = shallow(<TaskList {...props} />);
  });

  it('should render init state', () => {
    expect(wrap.find('div').length).toBe(1);
    expect(wrap.find('p').length).toBe(1);
    expect(wrap.find('input').length).toBe(1);
  });

  it('should handleDoubleClick and text of p', () => {
    wrap.find('div').simulate('DoubleClick');
    expect(props.editView).toHaveBeenCalledTimes(1);
    expect(wrap.find('p').text()).toBe('blabla');
    wrap.find('input').simulate('change', { target: { value: 'change' } });
    expect(wrap.find('input').prop('value')).toBe('change');
  });

  it('should check isDone', () => {
    expect(wrap.find('div').hasClass('task')).toBe(true);
  });

  it('should check isEditMode', () => {
    const wrapper = shallow(<TaskList {...props} isEditMode />);
    expect(wrapper.find('p').hasClass('hidden')).toBe(true);
    expect(wrapper.find('input').hasClass('input')).toBe(true);
  });

  it('should check isDone', () => {
    const wrapper = shallow(<TaskList {...props} isDone />);
    expect(wrapper.find('div').hasClass('taskdone')).toBe(true);
  });
});
