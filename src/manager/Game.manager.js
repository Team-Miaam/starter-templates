import { Application } from 'pixi.js';

/**
 * Game manager
 * @public
 * @class
 */
class GameManager {
	/**
	 * singleton instance
	 * @type {GameManager}
	 */
	static #instance;

	/**
	 * Application with renderer, ticker and root container
	 * @type {Application}
	 */
	#app;

	/**
	 * @private
	 * @constructor
	 */
	constructor() {
		throw new Error('Use getInstance to get an instance.');
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

	/**
	 * creates the game window using given options
	 * TODO: Add documentation for various options
	 * @param {Object} options
	 */
	createWindow = (options) => {
		this.#app = new Application(options);
	};

	/**
	 *
	 * @returns {Application} the main application
	 */
	get app() {
		return this.#app;
	}

	get window() {
		return this.#app.view;
	}
}

export default GameManager;
