import { SingleChip } from "./Chip";
import { useStore } from "../../../stores"
import { observer } from 'mobx-react-lite'
import { useEffect } from "react";


export const ChipList = observer(() => {
    const { selectedChips } = useStore().chipStore;

    return (
        <>
        {selectedChips.map((v,i) => <SingleChip key={i} name={v}/>) }
        </>
    )
})
