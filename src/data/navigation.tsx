/**
 * This file store navigation elements and the sideText categories used as a navigation bar.
 * @see utils.ts : it contains the model of an navigationItem and of a SideTextElement.
 */

/* Types */
import { SideTextElement } from "../utils";

/* Data */
import colors from "./colors";


const baseURL = process.env.PUBLIC_URL + '/articles/';

export const navigation = {
    home:{
        name: 'Accueil',
        link: '',
        completeLink: baseURL
    },
    robot: {
        name:'Robot',
        link: 'robot',
        completeLink: baseURL + 'robot'
    },
    cup: {
        name:'Coupe',
        link:'coupe',
        completeLink: baseURL + 'coupe'
    },
    club: {
        name:'Club',
        link: 'club',
        completeLink: baseURL + 'club'
    },
    
}

// the list of categories that is being displayed on the side of the page
export const sideTextElements: SideTextElement[] = [
    {
        navigationItem: navigation.robot,
        color: colors.white,
        position: '5%',
    },
    {
        navigationItem: navigation.cup,
        color: colors.darkBlue,
        position: '35%',
    },
    {
        navigationItem: navigation.club,
        color: colors.accent,
        position: '65%',
    },
]