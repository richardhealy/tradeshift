import Controls from './components/Controls'
import TriangleSVG from './components/TriangleSVG'

document.addEventListener('DOMContentLoaded', () => {

  const controlsEl = document.getElementById('controls')
  const controls = new Controls(controlsEl)

  const triangleSvgEl = document.getElementById('triangle-svg')
  const triangle = new TriangleSVG(triangleSvgEl)

})