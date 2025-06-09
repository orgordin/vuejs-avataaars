import { mount } from '@vue/test-utils';
import Avataaars from '../src/Avataaars.vue';

describe('Avataaars', () => {
  it('renders SVG with default props', () => {
    const wrapper = mount(Avataaars);
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});
