import { ChipModel } from "../../models";

const FilterOptions = ['세일상품', '단독상품', '품절포함'];

export const FilterChips = FilterOptions.map((v,i)=> new ChipModel({
    chipId: i+1,
    chipName: v,
    chipType: 'filter',
    isSelected: false
}))