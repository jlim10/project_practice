import { makeAutoObservable } from "mobx";

export class UIStore {

    constructor() {
        makeAutoObservable(this);
    }

    

}