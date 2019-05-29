import nj from 'nunjucks'
import view from './view.html'

class Controls {

	constructor(el) {
		this.render(el)	
	}

	render(el) {
		if(!el) {
			console.warn('Controls element not ready to render')
		}

		el.innerHTML = nj.compile(view).render()	
		this.attach(el)
	}

	attach(el) {

		if(!el) {
			console.warn('Controls element not ready to attach')
		}

	}
}

export default Controls