import user from 'json-files/user.json'
import data from 'json-files/data.json'
import friends from 'json-files/friends.json'
// import { user, data, friends, transactions} from 'json-files'
import { Profile } from 'components/01-Profile/Profile'
import { Statistics } from 'components/02-Statistics/Statistics';
import { FriendList } from 'components/03-FriendList/FriendList'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    
    </div>
  );
};

// сделать импорты из 1й папки !!!
// инсталю emotion

// import data from '/path/to/data.json';

