/* eslint-disable class-methods-use-this */

import GameManager from './Game.manager.js';

/**
 * @public
 * @class
 */
class AssetsManager {
	/**
	 * @type {AssetsManager}
	 */
	static #instance;

	/**
	 * @private
	 */
	#loader;

	index;

	/**
	 * @private
	 * @constructor
	 */
	constructor() {
		this.#loader = GameManager.instance.app.loader;
		const { assets, chunks } = GameManager.instance.index;
		this.index = { assets, chunks };
	}

	/**
	 * @returns {AssetsManager}
	 */
	static get instance() {
		if (!this.#instance) {
			this.#instance = new AssetsManager();
		}
		return this.#instance;
	}

	importChunk = (chunkName) => {};

	importChunkAssets = async (chunkName) => {};
}

export default {
	get instance() {
		return AssetsManager.instance;
	},
};
