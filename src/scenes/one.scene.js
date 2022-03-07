import { AssetsManager } from 'miaam';

const { getResource } = AssetsManager.instance;

class SceneOne {
	map = getResource('/assets/tilemap/IUTcampus.tilemap.json');

	playerAnimation = getResource('/assets/animation/abir.tileanimation.json');

	playerTileset = getResource('/assets/tilesets/abirStrip.tileset.json');

	constructor() {
		console.log('Created Scene 1');
		console.log(this.map.data, this.playerTileset);
	}
}

export default SceneOne;
