import state from './state'

import Controls from './components/Controls'
import TriangleSVG from './components/TriangleSVG'

const render = () => {

	const stateInstance = state.getInstance(this)

	const controlsEl = document.getElementById('controls')
  const controls = new Controls(stateInstance, controlsEl)

  const triangleSvgEl = document.getElementById('triangle-svg')
  const triangle = new TriangleSVG(stateInstance, triangleSvgEl)
}

document.addEventListener('DOMContentLoaded', () => {

	const appState = state.getInstance(render)

	render()

})