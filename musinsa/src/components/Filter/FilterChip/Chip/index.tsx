import * as T from './Styles'

interface Props {
    name: string;
}

export const SingleChip = ({ name }: Props)=> {
    return (
        <T.ChipButton>{name}</T.ChipButton>
    );
}