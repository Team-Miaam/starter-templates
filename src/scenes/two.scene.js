class SceneTwo {
	constructor() {
		console.log('Created scene 2');
	}

	start() {
		this.map = '/assets/tilemap/IUTcampus.tilemap.json';
		this.playerAnimation = '/assets/animation/akshar.tileanimation.json';
	}
}

export default SceneTwo;
