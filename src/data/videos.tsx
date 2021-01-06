/**
 * This file store all video files.
 * @see utils.ts : it contains the model of a Video.
 */

const baseURL = process.env.PUBLIC_URL + '/assets/videos/';

const videos = {
	detectionEcueils_experience:{
		name: "Expérience pour la détéction des écueils",
		src: baseURL + "detection_ecueils_experience.mp4",
	},
	simu_modelisation_3D: {
		name: 'Simulation de la modélisation 3D',
		src: baseURL + "simu_modelisation_3D.mp4",
	}
};

export default videos;
