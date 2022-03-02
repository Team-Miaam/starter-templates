import { GameManager, AssetsManager } from 'miaam';

GameManager.instance.createApplication({
	width: 512,
	height: 512,
	antialias: true,
	backgroundAlpha: false,
	resolution: 1,
});

const { importChunk } = AssetsManager.instance;

__createChunk__('./scenes/onep.scene.js');

const one = 'onep';

setTimeout(async () => {
	const { default: One } = await importChunk({
		source: `/src/scenes/${one}.scene.js`,
		onProgress: (progress, resource) => console.log(`${progress}%`, resource.name),
	});
	console.log(new One());
}, 2000);

console.log('hello world');
