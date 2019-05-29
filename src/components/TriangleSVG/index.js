import nj from 'nunjucks'
import view from './view.html'

class TriangleSVG {

	constructor(el) {
		this.render(el)	
	}

	render(el) {

		if(!el) {
			console.warn('TriangleSVG element not ready to render')
		}

		el.innerHTML = nj.compile(view).render()	
		this.attach(el)
	}

	attach(el) {
		
		if(!el) {
			console.warn('TriangleSVG element not ready to render')
			return false
		}

		console.log(el)
	}
	
}

export default TriangleSVG