import 'raf/polyfill';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';

global.expect = expect;
global.shallow = shallow;

configure({ adapter: new Adapter() });
