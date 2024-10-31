import { Button } from "./Button";
import React, { useState,useCallback, useEffect } from "react";
import { SearchText } from "./Styled";
import { useStore } from "../../stores";
import { ChipList } from "./FilterChip";
import { ChipModel } from "../../models";
import { FilterChips } from "../constant";


// interface Props {
//     onChangeSearch: () => void;
// }

export const SearchFilter = () => {

    const { searchStore, chipStore } = useStore();
    const [ onSearchField, setOnSearchField ] = useState(false);

    const onClickSearch = useCallback(() => {
        setOnSearchField(prev => !prev);
    }, []);

    const onClickFilter = useCallback((chip: ChipModel) => {
        chipStore.addChip(chip);
    }, []);

    const onChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        searchStore.setSearchFieldText(e.target.value);
    }, []);

    return (
        <>
            <Button name='검색' onClick={onClickSearch}/> {FilterChips.map((v,i) => <Button key={i} name={v.chipName} onClick={() => onClickFilter(v)}/>)}
            <ChipList />
            {onSearchField && <SearchText onChange={onChangeSearch}/>}
        </>
    );
}

