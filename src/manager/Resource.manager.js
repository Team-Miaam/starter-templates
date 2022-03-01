/* eslint-disable class-methods-use-this */

/**
 * @public
 * @class
 */
class ResourceManager {
	/**
	 * singleton instance
	 * @type {ResourceManager}
	 */
	static #instance;

	constructor() {
		throw new Error('Use getInstance to get an instance.');
	}

	/**
	 * @returns {ResourceManager}
	 */
	static get instance() {
		if (!this.#instance) {
			this.#instance = new ResourceManager();

			// eslint-disable-next-line no-underscore-dangle
			window.__MIAAM__.loadChunk = () =>
				new Promise((resolve) => {
					setTimeout(() => {
						resolve({ loaded: true });
					}, 2000);
				});
		}
		return this.#instance;
	}

	loadChunk = () => {};
}

export default {
	get instance() {
		return ResourceManager.instance;
	},
};
