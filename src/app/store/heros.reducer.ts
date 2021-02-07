import { Hero } from '../shared/hero.model';
import { Action } from '@ngrx/store';
import * as herosActions from './heros.actions';


export interface state {
    heros: Hero[];
    search: string;
    sortBy: string;
}

export interface AppState {
    herosList: state;
}


const initState: state = {
    heros: [
        {
            name: "MR.ROBOT",
            powers:
                [
                    "coding With VIM",
                    "Know Angular",
                ],
            rate: 5,
            id: 1,
            imagePath: null,
            description: "cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night.",
        },
        {
            name: "Richard Stallman",
            powers:
                [
                    "Freedom Protector"
                ],
            rate: 3,
            id: 2,
            imagePath: null,
            description: " He campaigns for software to be distributed in a manner such that its users receive the freedoms to use, study, distribute, and modify that software.",
        },
        {
            name: "Tim Berners-Lee",
            powers:
                [
                    "Transport Objects Though HTTP",
                ],
            rate: 4,
            id: 3,
            imagePath: null,
            description: "Sir Tim Berners-Lee invented the World Wide Web in 1989. He is the co-founder and CTO of Inrupt.com, a tech start-up which uses, promotes and helps develop the open source Solid platform.",
        },
        {
            name: "Superman",
            powers:
                [
                    "Super Strength",
                    "X-ray vision",
                    "fly",
                ],
            rate: 1,
            id: 4,
            imagePath: './../../assets/superman.jpg',
            description: "Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.",
        },
    ],
    search: "",
    sortBy: "power"
};

export function herosListReducer(
    state = initState,
    action: herosActions.herosListActions
) {
    switch (action.type) {
        case herosActions.SEARCH:
            const heroName = action.payload;
            return {
                ...state,
                search: heroName,
                sortBy: state.sortBy
            };

        case herosActions.SORT_BY:
            const sortBy = action.payload;
            return {
                ...state,
                search: state.search,
                sortBy: sortBy,
            }

        default:
            return state;

    }

}