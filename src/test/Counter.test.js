import React from 'react';
import { mount } from 'enzyme';
import Counter from '../components/Counter/Counter';

test('Counter Test: rendering proper number from props', () => {
  const wrapper = mount(
    <Counter title={'Following'} counter={8} />
  );
  const p = wrapper.find('.counter__number');
  expect(p.text()).toBe('8');
});

test('Counter Test: rendering proper title from props', () => {
  const wrapper = mount(
    <Counter title={'Following'} counter={8} />
  );
  const p = wrapper.find('.counter__title');
  expect(p.text()).toBe('Following');
});
