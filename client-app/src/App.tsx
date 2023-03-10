import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';

function App() {

  const [activities, setActivities] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities.map((activity:any) => (
              <ListItem key={activity.id}>
                {activity.title}
              </ListItem>
          ))}
        </List>
    </div>
  );
}

export default App;
