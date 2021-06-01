// Link.react.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import Clock from '../src/Components/Clock/Clock.js'

test('Clock count changes when button is clicked', () => {
    const component = renderer.create(<Clock />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    tree.find('button').simulate()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
