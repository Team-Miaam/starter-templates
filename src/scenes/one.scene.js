import { AssetsManager } from 'miaam';

const { getResource } = AssetsManager.instance;

class SceneOne {
	map = getResource('/assets/tilemap/IUTcampus.tilemap.json');

	playerAnimation = getResource('/assets/animation/abir.tileanimation.json');

	constructor() {
		console.log('Created Scene 1');
		console.log(this.map.data);
	}
}

export default SceneOne;
