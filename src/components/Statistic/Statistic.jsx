import { StatisticList, StatisticListItem, TotalCountWrapper, PositiveCountWrapper, TotalCountTitle, PositiveCountTitle } from "./Statistic.styled";
import { SiBuymeacoffee} from 'react-icons/si'

export const Statistic = ({ options, total, positivePercentage }) => { 
    return (
        <div>
        <StatisticList>
            {options.map(option => <StatisticListItem key={option[0]}><p>{option[0]}: <span>{ option[1]}</span></p> </StatisticListItem>)}      

            </StatisticList>
            <TotalCountWrapper>
                <TotalCountTitle>Total: <span> { total} </span></TotalCountTitle>
            </TotalCountWrapper>
            <PositiveCountWrapper>
                <PositiveCountTitle><SiBuymeacoffee /> Positive feedback: <span>{positivePercentage } %</span></PositiveCountTitle>
            </PositiveCountWrapper>
            </div>

    )

}