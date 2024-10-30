import { makeAutoObservable } from "mobx";

export class SearchStore {
    
    searchFieldText: string = '';
    
    constructor () {
        makeAutoObservable(this);
    }

    setSearchFieldText = (text: string) => {
        this.searchFieldText = text;
    }
}