import { WrapperButton, ChooseButton } from "./FeedbackOption.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (

        <WrapperButton>
            {options.map(option =>
                <li key={option}>
                    <ChooseButton name={option} type="button" onClick={onLeaveFeedback}>
                        {option}
                    </ChooseButton>
                </li>)}
        </WrapperButton>

        )}