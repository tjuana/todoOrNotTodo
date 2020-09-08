import React from 'react';
import renderer from 'react-test-renderer';
import { AppSnap } from '../App.jsx';

describe('Todo component test', () => {
  test('should snapshot', () => {
    const comp = renderer.create(<AppSnap />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
