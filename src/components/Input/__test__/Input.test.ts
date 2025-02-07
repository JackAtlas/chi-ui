import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Input from '../Input.vue'

describe('Input.vue', () => {
  it('render', () => {
    const wrapper = mount(Input, {
      props: {
        after: 'after',
        size: 'small',
        type: 'text',
      },
      slots: {
        beforeAction: 'before-action',
        prefix: 'prefix',
      },
    })
    expect(wrapper.find('.chi-input').exists()).toBeTruthy()
    const inner = wrapper.get('.chi-input')
    expect(inner.classes()).toContain('chi-input--small')
    expect(inner.find('input.chi-input__control').exists()).toBeTruthy()
    const input = inner.get('input.chi-input__control')
    expect(input.attributes('type')).toBe('text')

    // slots
    expect(wrapper.find('.chi-input__before').exists()).toBeTruthy()
    expect(wrapper.find('.chi-input__before-action').exists()).toBeTruthy()

    expect(wrapper.find('.chi-input__after').exists()).toBeTruthy()
    expect(wrapper.get('.chi-input__after').text()).toBe('after')
  })

  it('v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        value: 'test',
        'onUpdate:value': (e: string | number) => wrapper.setProps({ value: e }),
      },
    })
    const input = wrapper.get('input')
    expect(input.element.value).toBe('test')

    await input.setValue('update')
    expect(wrapper.props('value')).toBe('update')
    expect(input.element.value).toBe('update')

    await wrapper.setProps({ value: 'prop update' })
    expect(input.element.value).toBe('prop update')
  })

  it.only('clearable', async () => {
    const wrapper = mount(Input, {
      props: {
        clearable: true,
        type: 'text',
        value: 'test',
      },
      global: {
        stubs: ['Icon'],
      },
    })

    expect(wrapper.find('.chi-input__clear').exists()).toBeFalsy()
    const input = wrapper.get('input')
    await input.trigger('focus')
    expect(wrapper.find('.chi-input__clear').exists()).toBeTruthy()
    await wrapper.get('.chi-input__clear').trigger('click')
    expect(input.element.value).toBe('')
  })
})
