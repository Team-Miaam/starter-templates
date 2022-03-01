import { Application } from 'pixi.js';

import { IntegrationError } from '../error/index.js';

/**
 * @public
 * @class
 */
class GameManager {
	/**
	 * @type {GameManager}
	 */
	static #instance;

	/**
	 * @type {Application}
	 */
	#app;

	index;

	/**
	 * @private
	 * @constructor
	 */
	constructor() {
		if (!this.lock) {
			throw new IntegrationError(
				'Cannot instantiate game manager without miaam-lock file. Please set the lock file first'
			);
		}
	}

	/**
	 * @returns {GameManager}
	 */
	static get instance() {
		if (!this.#instance) {
			this.#instance = new GameManager();
		}
		return this.#instance;
	}

	static set index(index) {
		this.index = index;
	}

	/**
	 * @param {Object} options
	 */
	createWindow = (options) => {
		this.#app = new Application(options);
	};

	/**
	 * @returns {Application}
	 */
	get app() {
		return this.#app;
	}

	get window() {
		return this.#app.view;
	}
}

export default {
	get instance() {
		return GameManager.instance;
	},
	get index() {
		return GameManager.index;
	},
};
