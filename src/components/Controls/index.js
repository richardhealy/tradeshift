import nj from 'nunjucks'
import view from './view.html'
import {
	isValidTriangle,
	getTriangleType,
} from '../../helpers/triangle'

class Controls {

	constructor(state, parentEl) {
		this.parentEl = parentEl
		this.state = state
		this.render()
	}

	render(params) {
		if(!this.parentEl) {
			console.error('Controls element not ready to render')
			return false
		}

		this.parentEl.innerHTML = nj.compile(view).render(params)	
		this.attach()
	}

	attach() {

		if(!this.parentEl) {
			console.warn('Controls element not ready to attach')
			return false
		}

		document.getElementById('submit')
			.addEventListener('click', () => this.onSubmit.apply(this))
	}

	onSubmit() {

		const a = document.getElementById('sideA').value 
		const b = document.getElementById('sideB').value
		const c = document.getElementById('sideC').value

		const values = {
			valueA:parseFloat(a),
			valueB:parseFloat(b),
			valueC:parseFloat(c),
		}

		if(!a || !b || !c) {

			const errors = {
				...values,
				...(!a && {errorA: true}),
				...(!b && {errorB: true}),
				...(!c && {errorC: true})
			}

			this.rerender(errors)
			return false
		}

		if(!isValidTriangle(parseFloat(a), parseFloat(b), parseFloat(c))) {
			this.rerender({
				...values,
				mainError:true
			})
		} else {

			this.state.setState({
				triangleType:getTriangleType(parseFloat(a), parseFloat(b), parseFloat(c))
			})
		}
	}

	rerender(params) {
		document.getElementById('submit')
			.removeEventListener('click', () => this.onSubmit.apply(this))

		this.render(params)
	}
}

export default Controls