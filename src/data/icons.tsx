/**
 * This file store all the icons used in this website.
 * @see utils.ts : it contains the model of an Icon.
 */

const baseURL = process.env.PUBLIC_URL + '/assets/icons/';

const icons = {
    youtube: {
        name: 'Youtube',
        src: baseURL + 'youtube.png'
    },
    linkedin: {
        name: 'Linkedin',
        src: baseURL + 'linkedin.png'
    },
    arrow_right: {
        name: 'Arrow - right',
        src: baseURL + 'right_arrow.png'
    },
    arrow_up: {
        name: 'Arrow - up',
        src: baseURL + 'up_arrow.png'
    },
    arrow_left: {
        name: 'Arrow - left',
        src: baseURL + 'left_arrow.png'
    },
    arrow_bottom: {
        name: 'Arrow - bottom',
        src: baseURL + 'bottom_arrow.png'
    },
};

export default icons;