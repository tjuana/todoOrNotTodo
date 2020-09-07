import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

const JSONMock = {
  parse: jest.fn(),
};

const eventTest = {
  preventDefault: jest.fn(),
};

global.localStorage = localStorageMock;
global.JSON = JSONMock;
global.event = eventTest;
