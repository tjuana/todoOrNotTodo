import React from 'react';
import renderer from 'react-test-renderer';
import { AppSnap } from '../App.jsx';

describe('App component test', () => {
  test('should snapshot', () => {
    const comp = renderer.create(<AppSnap />);
    const tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
