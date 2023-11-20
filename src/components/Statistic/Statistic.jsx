import { StatisticList, StatisticListItem, TotalCountWrapper, PositiveCountWrapper, TotalCountTitle, PositiveCountTitle } from "./Statistic.styled";
import { SiBuymeacoffee} from 'react-icons/si'

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
        <div>
            <StatisticList>
                <StatisticListItem ><p>good: <span>{good}</span></p> </StatisticListItem>
                <StatisticListItem ><p>neutral: <span>{neutral}</span></p> </StatisticListItem>
                <StatisticListItem ><p>bad: <span>{bad}</span></p> </StatisticListItem>
                

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