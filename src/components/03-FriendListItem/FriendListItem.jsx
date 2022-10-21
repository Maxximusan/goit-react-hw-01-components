import PropTypes from 'prop-types'

import { Item, Status, Image, UserName} from 'components/03-FriendListItem/FriendListItem.styled'

export const FriensListItem = (props) => {
    const { avatar, name, isOnline} = props
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Image src={avatar} alt="User avatar" width="48" />
            <UserName>{name}</UserName>
        </Item>
    );
}

FriensListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}