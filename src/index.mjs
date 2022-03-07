import { AssetsManager } from 'miaam';
import scenes from './scenes.js';

const { importChunk } = AssetsManager.instance;

const sceneOneButton = document.getElementById('one');
const sceneTwoButton = document.getElementById('two');

const progressBar = document.getElementById('progress');

const loadScene = async (sceneId) => {
	progressBar.style = `width:${0}%`;
	progressBar.innerHTML = '';
	const { default: Scene } = await importChunk({
		chunk: scenes[sceneId],
		onProgress: (progress, resource) => {
			const roundedProgress = parseInt(progress, 10);
			progressBar.style = `width:${roundedProgress}%`;
			progressBar.innerHTML = `Loading ${resource.name} --- ${roundedProgress}%`;
			console.log(`${progress}%`, resource.name);
		},
	});

	progressBar.style = `width:${100}%`;
	progressBar.innerHTML = 'Loading Complete';

	new Scene();
};

sceneOneButton.onclick = () => loadScene('one');
sceneTwoButton.onclick = () => loadScene('two');
