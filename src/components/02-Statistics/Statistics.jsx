import PropTypes from 'prop-types'
// import css from 'components/02-Statistics/Statistics.module.css'
import { StatisticsSection, Title, List, Item, Label, Percentage} from 'components/02-Statistics/Statistics.styled'


// tittle - через IF - если не приходит тогда h2 (на час 25 показывает) и на 2:01
// найти функцию из 6-7 дз по генерации цвета случайного
// через map рендерить (1:32) и 03, 04 тоже
// ключ на верхний элемент map
// пропсы
// пропсы передаем для каждого заМапеного(1:30 второго видео !!! + 2:06 важно)



// ВАРИАНТ №1 ОБЫЧНАЯ РАЗМЕТКА, CLASSNAME, MODULE.CSS

// export const Statistics = (props) => {
//     const { title, stats } = props;
//     return (
//         <section className={css.statistics}>
//             {title && <h2 className={css.title}>{title}</h2>}
  
//             <ul className={css.statList}>
//                 {stats.map(stat => (
//                     <li key={stat.id} className={css.item}>
//                         <span className={css.label}>{stat.label}</span>
//                         <span className={css.percentage}>{stat.percentage}%</span>
//                     </li>
//                 ))}
//             </ul>
//         </section>
//     );
// };

// Statistics.propTypes = {
//     title: PropTypes.string.isRequired,
//     stats: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired
//     }))
// };



// ВАРИАНТ №2 EMOTION 
export const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
  
            <List>
                {stats.map(stat => (
                    <Item key={stat.id} >
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};