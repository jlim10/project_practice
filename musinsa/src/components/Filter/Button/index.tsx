import { ButtonContainer } from "./Styles"

interface Props {
    name: string;
    onClick?: () => void;
}

export const Button = ({name, onClick}:Props) => {

    return (
        <ButtonContainer onClick={onClick}>
            {name}
        </ButtonContainer>
    )

}