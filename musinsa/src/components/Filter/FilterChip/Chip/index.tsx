import * as T from './Styles'
import { ChipModel } from '../../../../models';

interface Props {
    chip: ChipModel;
}

export const SingleChip = ({ chip }: Props)=> {
    return (
        <T.ChipButton>{chip.chipName}</T.ChipButton>
    );
}