import { makeAutoObservable } from "mobx";
import * as T from '../@types'

export interface ChipInterface {
    chipId: number;
    chipName: string;
    chipType: T.ChipType;
    isSelected: boolean;
}

export class ChipModel implements ChipInterface {
    
    
    chipId: number;
    chipName: string;
    chipType: T.ChipType;
    isSelected: boolean;

    constructor (chip: ChipInterface) {

        makeAutoObservable(this);

        this.chipId = chip.chipId;
        this.chipName = chip.chipName;
        this.chipType = chip.chipType;
        this.isSelected = chip.isSelected;
    }

    toggleSelected = (chip: ChipModel) => {
        this.isSelected = !this.isSelected;
    }
    
}