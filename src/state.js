// Singleton
const state = (() => {

	let instance = null
	let _rerender = () => true 

	// We could send this from a different
	// location, for simplicity, set it here
	let _state = {
		triangleType:'scalene'
	}

	const _getState = () => {
		return _state
	}

	const _setState = (newState) => {
		_state = {
			..._state,
			...newState
		}

		// Rerender app
		_rerender()
	}

	const init = rerender => {
		_rerender = rerender
		return instance = {
			getState:_getState,
			setState:_setState
		}

	}

	return {
		getInstance: rerender => {
			if(!instance) {
				instance = init(rerender)
			}

			return instance
		}
	}
})()

export default state