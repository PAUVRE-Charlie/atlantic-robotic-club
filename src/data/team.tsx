/**
 * This file store data on team members.
 * @see utils.ts : it contains the model of a Person and a Team.
 */

/* Types */
import { Team } from '../utils';

/* Data */
import images from './images';

const team: Team = {
    name: 'Atlantic Robotic Club',
    members: [
        {
            id: 1,
            firstname: 'Kamil',
            lastname: 'Takhi',
            nickname: 'Le Rusher',
            campus: 'Nantes',
            image: images.clubNantes.kamil,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "J’aime la Robotique, le challenge de la coupe semblait intéressant et la perspective de travailler avec une autre équipe en distanciel à Brest semblait vraiment riche. Je gère le côté administratif en tant que president du club, et je participe à la partie loi de commande, asservissement et capteurs"
        },
        {
            id: 2,
            firstname: 'Théo',
            lastname: 'Fontenit',
            nickname: 'Le Challenger',
            campus: 'Nantes',
            image: images.clubNantes.theo,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "Je suis passionné de robotique depuis le lycée et j’ai eu l’occasion d’assister à la coupe de France de robotique en 2019, cela m’a beaucoup plus et c’est pourquoi le projet me tiens à cœur. J'ai le rôle du responsable du forum et de la création du poster."
        },
        {
            id: 3,
            firstname: 'Sébastian',
            lastname: 'Heyer',
            nickname: 'Elec Master',
            campus: 'Nantes',
            image: images.clubNantes.sebastian,
            taf: 'Robotique et Interactions',
            description: "Passioné de l'électronique, j'adore la compétition et je suis très motivé."
        },
        {
            id: 4,
            firstname: 'Charlie',
            lastname: 'Pauvré',
            nickname: 'Le Webmaster',
            campus: 'Nantes',
            image: images.clubNantes.charlie,
            taf: 'Dévelopement collaboratif de logiciels',
            description: "J'adore l'informatique et plus particulièrement le développement. Je suis responsable du site internet du club."
        },
        {
            id: 5,
            firstname: 'Victor Gerardo',
            lastname: 'Nosthas',
            nickname: 'Chief Happiness Officer',
            campus: 'Nantes',
            image: images.clubNantes.victor,
            taf: 'Automatique et Systèmes Cyber-Physiques',
            description: "J'aime l'éléctronique et le traitement du signal, ce projet me semble parfait pour faire une première application des contenus de ma TAF de cette année. Le fait de participer dans une compétiton me motive encore plus."
        },
        {
            id: 6,
            firstname: 'Kevin',
            lastname: 'Michalewicz',
            nickname: 'Crew Manager',
            campus: 'Nantes',
            image: images.clubNantes.kevin,
            taf: 'Robotique et Interactions',
            description: "J'ai des connaissance de l'électronique, de la robotique et de l'automatisation et j'ai un intérêt profond pour la robotique."
        },
        {
            id: 7,
            firstname: 'Alexis',
            lastname: 'Hamel',
            nickname: 'Le Datacenter',
            campus: 'Nantes',
            image: images.clubNantes.alexis,
            taf: 'Robotique et Interactions',
            description: "Je suis responsable de la documentation sur le projet, je suis à l'écoute, détérminé et je cherche à découvrir le monde des effecteurs."
        },
        {
            id: 8,
            firstname: 'Aziz',
            lastname: 'Sellami',
            nickname: 'Le compas',
            campus: 'Brest',
            image: images.clubBrest.aziz,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Ponctuel et rigoureux"
        },
        {
            id: 9,
            firstname: 'Andrés Esteban',
            lastname: 'Sierra Sanchez',
            nickname: 'Le Couteau Suisse',
            campus: 'Brest',
            image: images.clubBrest.esteban,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Polyvalence et adaptabilité"
        },
        {
            id: 10,
            firstname: 'Sean',
            lastname: 'Bonnemains',
            nickname: 'Le Scrum Master',
            campus: 'Brest',
            image: images.clubBrest.sean,
            taf: "Conception d'Objects Communicants",
            description: "Coordonner et orienter"
        },
        {
            id: 11,
            firstname: 'Jérémy',
            lastname: 'Roques',
            nickname: "L'ancien",
            campus: 'Brest',
            image: images.clubBrest.jeremy,
            taf: 'Systèmes Embarqués Hétérogènes',
            description: "Experience et professionnalisme"
        },
        {
            id: 12,
            firstname: 'Xiayue',
            lastname: 'Shen',
            nickname: 'Le Businessman',
            campus: 'Brest',
            image: images.clubBrest.xiayue,
            taf: 'Dévelopement collaboratif de logiciels',
            description: "Innovant et performant"
        },
        {
            id: 13,
            firstname: 'Maxence',
            lastname: 'Nesme',
            nickname: "L'agrégateur",
            campus: 'Brest',
            image: images.clubBrest.maxence,
            taf: 'Mathematical and Computational Engineering',
            description: "Rassembler et intégrer"
        }
    ]
}
    
        

export default team;
