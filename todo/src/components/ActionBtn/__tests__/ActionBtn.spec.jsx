import { shallow, mount } from 'enzyme';
import React from 'react';
import {Button} from '../ActionBtn.jsx';

describe('Task lits component test', () => {
  let props
  let wrap

  beforeEach(() => {
    props = {
      del: jest.fn(),
      doneTaskView: jest.fn(),
      id: 0,
      isDone: false,
    };
    wrap = shallow(<Button {...props}/>);
  });

  it('should call doneTaskView func', () => {
    const button = wrap.find('button');
    button.simulate('Click');
    expect(props.doneTaskView).toHaveBeenCalledTimes(1);
    expect(wrap.find('span').text()).toBe('✅');
  });

  
  it('should call del func', () => {
    const wrapper = shallow(<Button {...props}  isDone/>);
    const button = wrapper.find('button');
    button.simulate('Click');
    expect(props.del).toHaveBeenCalledTimes(1);
    expect(wrapper.find('span').text()).toBe('🎯');
    
  });
  it('should check isDone', () => {
    expect(wrap.find('button').hasClass('actionbtn')).toBe(true);
  });
});
