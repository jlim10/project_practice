import {makeAutoObservable} from 'mobx';
import { SearchStore } from './SearchStore';
import { ChipStore } from './ChipStore';
// import { UIStore } from './UIStore'

export class RootStore {
    searchStore: SearchStore;
    chipStore: ChipStore;

    constructor() {
        makeAutoObservable(this);

        this.searchStore = new SearchStore;
        this.chipStore = new ChipStore;
    }

}

export const rootStore = new RootStore();

export const useStore = () => {
    return rootStore;
}