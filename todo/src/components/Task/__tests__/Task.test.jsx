import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedTask, { TaskList } from '../Task.jsx';

import initialState from '../../../store/configureStore.jsx';

describe('Task lits component test', () => {
  let props;
  let wrap;
  const event = { preventDefault: () => {} };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    props = {
      editInput: jest.fn(),
      editView: jest.fn(),
      id: 0,
      isEditMode: false,
      isDone: false,
      title: 'blabla2',
    };
    wrap = shallow(<TaskList {...props} />);
    jest.spyOn(event, 'preventDefault');
  });

  test('should Task snap', () => {
    store = mockStore(initialState);
    const component = renderer.create(
      <Provider store={store}>
        <ConnectedTask {...props} />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render init state', () => {
    expect(wrap.find('div').length).toBe(1);
    expect(wrap.find('p').length).toBe(1);
    expect(wrap.find('input').length).toBe(1);
  });

  it('should handleDoubleClick and text of p', () => {
    wrap.find('li').simulate('DoubleClick');
    expect(props.editView).toHaveBeenCalledTimes(1);
    expect(wrap.find('p').text()).toBe('blabla2');
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
