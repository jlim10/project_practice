import { makeAutoObservable } from "mobx";
import { ChipModel } from "../models";

export class ChipStore {

    selectedChips: ChipModel[];

    constructor () {
        makeAutoObservable(this);

        this.selectedChips = [];
    }

    addChip = (chip: ChipModel) => {
        this.selectedChips.push(chip);
    }

    removeChip = (chip: ChipModel) => {
        this.selectedChips.filter((v)=> v !== chip);
    }
}