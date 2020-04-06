import { shallowMount } from '@vue/test-utils';
import AlbumList from '@/components/AlbumList.vue';

describe('AlbumList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AlbumList, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
