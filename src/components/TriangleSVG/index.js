import nj from 'nunjucks'
import view from './view.html'

class TriangleSVG {

	constructor(state, parentEl) {

		this.parentEl = parentEl
		this.state = state
		this.render()
	}

	render() {
		if(!this.parentEl) {
			console.error('Controls element not ready to render')
			return false
		}

		const {
			triangleType
		} = this.state.getState()

		this.parentEl.innerHTML = nj.compile(view).render({
			type:triangleType
		})	
		this.attach()
	}

	attach() {

		if(!this.parentEl) {
			console.warn('Controls element not ready to attach')
			return false
		}

	}
	
}

export default TriangleSVG