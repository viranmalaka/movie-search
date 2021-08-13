/** Used in jest.config.js */
import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// util enzyme officially support react-17
// https://github.com/enzymejs/enzyme/issues/2429#issuecomment-679265564
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
