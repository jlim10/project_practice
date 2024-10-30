import { Button } from "./Button";
import React, { useState,useCallback, useEffect } from "react";
import { SearchText } from "./Styled";
import { useStore } from "../../stores";
import { ChipList } from "./FilterChip";


// interface Props {
//     onChangeSearch: () => void;
// }

const FilterOptions = ['세일상품', '단독상품', '품절포함'];

export const SearchFilter = () => {

    const { searchStore, chipStore } = useStore();
    const [ onSearchField, setOnSearchField ] = useState(false);

    const onClickSearch = useCallback(() => {
        setOnSearchField(prev => !prev);
    }, []);

    const onClickFilter = useCallback((chip: string) => {
        chipStore.addChip(chip);
    }, []);

    const onChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        searchStore.setSearchFieldText(e.target.value);
    }, []);

    return (
        <>
            <Button name='검색' onClick={onClickSearch}/> {FilterOptions.map((v,i) => <Button key={i} name={v} onClick={() => onClickFilter(v)}/>)}
            <ChipList />
            {onSearchField && <SearchText onChange={onChangeSearch}/>}
        </>
    );
}

