import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const DummyList = () => {

  const data = [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 80 },
    { name: 'Mar', value: 120 },
    { name: 'Apr', value: 150 },
    { name: 'May', value: 200 },
  ];

  return (
    <List>
      {data.map((item, index) => (
        <div key={index}>
          <ListItem>
            <ListItemText primary={`Month: ${item.name}`} secondary={`Value: ${item.value}`} />
          </ListItem>
          {index < data.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
};

export default DummyList;
