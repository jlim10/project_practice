import { makeAutoObservable } from "mobx";
// import { ChipType } from "../@types/chip";

export class ChipStore {

    selectedChips: string[] = [];

    constructor () {
        makeAutoObservable(this);
    }

    addChip = (chip: string) => {
        this.selectedChips.push(chip);
    }

    removeChip = (chip: string) => {
        this.selectedChips.filter((v)=> v !== chip);
    }
}