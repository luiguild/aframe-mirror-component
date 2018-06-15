if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerPrimitive('a-mirror', {
  defaultComponents: {
    mirroring: {}
  },
  mappings: {}
})

AFRAME.registerComponent('mirroring', {
  schema: {},
  init () {},
  update () {}
})
