import { shallow, mount } from 'enzyme';
import React from 'react';
import { TodoList } from '../Todo.jsx';

describe('Todo component test', () => {
  let props;
  let wrap;

  beforeEach(() => {
    props = {
      tasks: [],
    };
    wrap = shallow(<TodoList {...props} />);
  });
  it('should render', () => {
    expect(wrap.find('div').length).toBe(1);
    expect(wrap.find('h1').length).toBe(1);
    expect(wrap.find('h1').text()).toContain('TaSkS ToDo');
  });
});
