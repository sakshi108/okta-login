// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Free Credit Score" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="News & Stories" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Open an Account" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Credit Cards" />
    </ListItem>
    <ListItem button>
     <ListItemText primary="Savings Accounts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Mortgage" />
    </ListItem>
  </div>
);
