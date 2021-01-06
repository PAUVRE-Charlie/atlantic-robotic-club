/**
 * This file store all images files.
 * @see utils.ts : it contains the model of an Image.
 */

const baseURL = process.env.PUBLIC_URL + '/assets/images/';

const images = {
    logos:{
		logo128: {
			name: 'Logo 128x128',
			src: baseURL + 'logo128.PNG',
		},
		logo512: {
			name: 'Logo 512x512',
			src: baseURL + 'logo512.PNG',
		},
		logo654: {
			name: 'Logo 654x654',
			src: baseURL + 'logo654.PNG',
		}
	},
    modelisation3D:{
		constraints: {
			name: 'Constraints',
			src: baseURL + 'robot_constraints.png',
		},
		fusion_logo: {
			name: 'Logo du logiciel fusion',
			src: baseURL + 'fusion_logo.PNG',
		},
		robot_front: {
			name: 'Front part of the robot',
			src: baseURL + 'robot_model_front.png',
		},
		robot_back: {
			name: 'Back part of the robot',
			src: baseURL + 'robot_model_back.png',
		},
	},
	themeCup:{
		table_blueprint: {
			name: 'Blueprint of the table',
			src: baseURL + 'table_blueprint.jpeg',
		},
		shuffle_buoy: {
			name: 'The different shuffles possibles of the buoys',
			src: baseURL + 'shuffle_buoy.png',
		},
		robot_positions: {
			name: 'The possible positions of the robot',
			src: baseURL + 'robot_positions.PNG',
		},
		table_blueprint_detailed: {
			name: 'The detailed version of the blueprint of the table',
			src: baseURL + 'table_blueprint_detailed.PNG',
		},
		table_sweep: {
			name: 'The sweep of the table',
			src: baseURL + 'table_sweep.png',
		},
		table_windsock: {
			name: 'The windsock',
			src: baseURL + 'table_windsock.PNG',
		},
		table_upView: {
			name: 'The upper view of the table',
			src: baseURL + 'table_upView.PNG',
		},
		table_zones: {
			name: 'The zones of the table',
			src: baseURL + 'table_zones.png',
		},
		compass: {
			name: 'The compass',
			src: baseURL + 'compass.PNG',
		},
		validity_robot: {
			name: 'The condition of validation for the robot',
			src: baseURL + 'validity_robot.png',
		},
		validity_buoy: {
			name: 'The condition of validation for the buoy',
			src: baseURL + 'validity_buoy.PNG',
		},
	},
	imtAtlantique:{
		mixImages: {
			name: 'Some images of the IMT campus',
			src: baseURL + 'imt.png',
		},
	},
	detectionEcueils:{
		model: {
			name: 'Model of robot for detection',
			src: baseURL + 'detection_model.PNG',
		},
		sensor: {
			name: 'Sensor',
			src: baseURL + 'detection_sensor.PNG',
		},
		setup: {
			name: 'Setup for the experience',
			src: baseURL + 'detection_setup.PNG'
		},
		setup_blueprint: {
			name: 'Blueprint of the setup of the experience',
			src: baseURL + 'detection_setup_blueprint.png',
		},
		code1: {
			name: 'First part of the code',
			src: baseURL + 'detection_code1.PNG',
		},
		code2: {
			name: 'Second part of the code',
			src: baseURL + 'detection_code2.PNG',
		},
		code3: {
			name: 'Third part of the code',
			src: baseURL + 'detection_code3.PNG',
		},
	},
	clubNantes:{
		charlie: {
			name: 'Avatar of Charlie',
			src: baseURL + 'charlie.jpeg',
		},
		kamil: {
			name: 'Avatar of Kamil',
			src: baseURL + 'kamil.jpg',
		},
		theo: {
			name: 'Avatar of Théo',
			src: baseURL + 'theo.jpeg',
		},
		sebastian: {
			name: 'Avatar of Sebastian',
			src: baseURL + 'sebastian.jpeg',
		},
		victor: {
			name: 'Avatar of Victor',
			src: baseURL + 'victor.jpeg',
		},
		alexis: {
			name: 'Avatar of Alexis',
			src: baseURL + 'alexis.jpeg',
		},
		kevin: {
			name: 'Avatar of Kevin',
			src: baseURL + 'kevin.png',
		},
	},
	clubBrest:{
		aziz: {
			name: 'Avatar of Aziz',
			src: baseURL + 'aziz.jpeg',
		},
		xiayue: {
			name: 'Avatar of Xiayue',
			src: baseURL + 'xiayue.jpg',
		},
		sean: {
			name: 'Avatar of Sean',
			src: baseURL + 'sean.jpg',
		},
		esteban: {
			name: 'Avatar of Esteban',
			src: baseURL + 'esteban.jpeg',
		},
		maxence: {
			name: 'Avatar of Maxence',
			src: baseURL + 'maxence.jpeg',
		},
		jeremy: {
			name: 'Avatar of Jeremy',
			src: baseURL + 'jeremy.jpeg',
		},
	},
	cup2020:{
		match: {
			name: 'A match photo',
			src: baseURL + 'cup2020.jpg',
		},
		results: {
			name: 'The results of the 2020 cup',
			src: baseURL + 'results_2020.PNG',
		},
	},
	testMotors: {
		motor: {
			name: 'A motor',
			src: baseURL + 'motor.PNG',
		},
		coder: {
			name: 'A coder',
			src: baseURL + 'motor_coder.PNG',
		},
		robotshop: {
			name: 'A table from robotshop',
			src: baseURL + 'motor_robotshop.PNG',
		},
		disk: {
			name: 'Disk built',
			src: baseURL + 'motor_disk.PNG',
		},
		shelf : {
			name: 'Shelf built',
			src: baseURL + 'motor_shelf.PNG',
		},
		experience : {
			name: 'The experience to test the motors',
			src: baseURL + 'motor_experience.PNG',
		},
	},
	simulation:{
		interface: {
			name: 'Interface Webots',
			src: baseURL + 'webots_interface.png',
		},
		lds: {
			name: 'LDS component',
			src: baseURL + 'LDS-01.png',
		},
		webots_logo: {
			name: 'Logo of Webots',
			src: baseURL + 'webots_logo.png'
		},
		robot_model: {
			name: 'Model of the robot',
			src: baseURL + 'simulation_robot_model.png',
		},
	},
	detectionTags:{
		compass_tag: {
			name: 'Tag of the compass',
			src: baseURL + 'compass_tag.PNG',
		},
		compass: {
			name: 'Compass',
			src: baseURL + 'compass.PNG',
		},
		charuco_board: {
			name: 'Charuco board',
			src: baseURL + 'charuco_board.PNG',
		},
		demo1: {
			name: 'Demo of the tag - first part',
			src: baseURL + 'demo_tag1.PNG',
		},
		demo2: {
			name: 'Demo of the tag - second part',
			src: baseURL + 'demo_tag2.PNG'
		},
		tag_cases: {
			name: 'Different cases for the tag',
			src: baseURL + 'tag_cases.PNG',
		},
		equipment: {
			name: 'Equipment for the tag experience',
			src: baseURL + 'tag_equipment.PNG',
		},
		results: {
			name: 'Results of the experience',
			src: baseURL + 'tag_results.PNG',
		},
		tag: {
			name: 'Tag',
			src: baseURL + 'tag.PNG',
		},
		tag1: {
			name: 'Tag 1',
			src: baseURL + 'tag1.PNG',
		},
		tag2: {
			name: 'Tag 2',
			src: baseURL + 'tag2.png',
		},
		tag3: {
			name: 'Tag 3',
			src: baseURL + 'tag3.png',
		},
		tag4: {
			name: 'Tag 4',
			src: baseURL + 'tag4.png',
		}
	},
	detectionColor:{
		arduino: {
			name: 'Arduino board',
			src: baseURL + 'color_arduino.png',
		},
		code: {
			name: 'Code for the detection of colors',
			src: baseURL + 'color_code.png',
		},
		harbor: {
			name: 'Harbor',
			src: baseURL + 'table_harbor.png',
		},
		table_sensors: {
			name: 'Sensors',
			src: baseURL + 'color_table_sensors.png',
		},
		sensor_TCS3200: {
			name: 'Sensor TCS3200',
			src: baseURL + 'TCS3200.png',
		},
		sensor_TCS34725: {
			name: 'Sensor TCS34725',
			src: baseURL + 'TCS34725.png',
		},
	},
	equipment:{
		wheels: {
			name: 'Wheels',
			src: baseURL + 'wheels.png',
		},
		motor: {
			name: 'Motor',
			src: baseURL + 'motor.PNG',
		},
		base: {
			name: 'Base of the robot',
			src: baseURL + 'base.png',
		},
	},
	lidar: {
		window: {
			name: 'Window of the lidar interface',
			src: baseURL + 'lidar_window.png',
		},
		rplidar: {
			name: 'RPLidar',
			src: baseURL + 'rplidar.PNG',
		},
		sdk: {
			name: 'SDK commands',
			src: baseURL + 'sdk.png',
		},
	},
	strategy: {
		table_blueprint: {
			name: 'Blueprints of the table',
			src: baseURL + 'table_blueprint.jpeg',
		},
		table_upView: {
			name: 'Upper view of the table',
			src: baseURL + 'table_upView.PNG',
		},
	},
	flag:{
		blueprint: {
			name: 'Blueprint with a spring',
			src: baseURL + 'flag_spring.png',
		},
		model1: {
			name: 'Model of the flag - part 1',
			src: baseURL + 'flag1.png',
		},
		model2: {
			name: 'Model of the flag - part 2',
			src: baseURL + 'flag2.png',
		},
	},
	makingTable:{
		table: {
			name: 'Table',
			src: baseURL + 'table.png',
		},
		pieces: {
			name: 'Pieces of the table',
			src: baseURL + 'table_pieces.PNG',
		},
		drawings: {
			name: 'Drawings of the pieces',
			src: baseURL + 'table_pieces_drawing.png',
		},
		windsock: {
			name: 'Windsock',
			src: baseURL + 'windsock.PNG',
		},
	},
	enslavement: {
		table1: {
			name: 'Table for the enslavement - part 1',
			src: baseURL + 'enslavement_table1.png',
		},
		table2: {
			name: 'Table for the enslavement - part 2',
			src: baseURL + 'enslavement_table2.png'
		},
		blueprint: {
			name: 'Blueprint of the enslavement',
			src: baseURL + 'enslavement_blueprint.png'
		},
	},
	actuator: {
		blueprint: {
			name: 'Blueprint of the actuator',
			src: baseURL + 'actuator_blueprint.png'
		}
	}
};

export default images;