class One {}
console.log('hello from one', '/assets/animation/abir.tileanimation.json');
const a = [1, 2, 3];
console.log([...a], '/assets/tilemap/endScene.tilemap.json');
setTimeout(() => {
	(async () => {
		const { default: b } = await import('./two.scene.js');
		console.log(b);
	})();
}, 2000);

export default One;
