import PropTypes from 'prop-types'

// import css from 'components/03-FriendList/FriendList.module.css'

import { List } from 'components/03-FriendList/FriendList.styled'

import { FriensListItem } from 'components/03-FriendListItem/FriendListItem'

export const FriendList = (props) => {
    const { friends } = props
    return <List>{friends.map(friend => (
        <FriensListItem
            key={friend.id}
            isOnline={friend.isOnline}
			avatar={friend.avatar}
			name={friend.name}
    
        />
    ))}
    </List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	)
}