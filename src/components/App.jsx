import user from 'json-files/user.json'
import data from 'json-files/data.json'
// import { user, data, friends, transactions} from 'json-files'
import { Profile } from 'components/01-Profile/Profile'
import { Statistics } from 'components/02-Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
    
    </div>
  );
};

// сделать импорты из 1й папки !!!
// инсталю emotion

// import data from '/path/to/data.json';

