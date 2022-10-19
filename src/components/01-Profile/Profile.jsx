import PropTypes from 'prop-types'
import css from 'components/01-Profile/Profile.module.css'

// это пойдет в файл (компонент) одельный - нужно довносить правильно переменные. Сделать функцию
export const Profile = (props) => {
    const {username, tag, location, avatar, stats} = props
    return (
    
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
)};



// 3/ далее прописать для пропсов все из пакета proptypes. Добавить isRequired !!
// во втором файле тоже понадобиться - но добавлять что нужно, дублировать не надо
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired

};