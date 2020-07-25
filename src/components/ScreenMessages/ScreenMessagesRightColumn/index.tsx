import React from 'react';
import './ScreenMessagesRightColumn.scss';
import { UserMessages } from './UserMessages';
import { Switch, Route } from 'react-router-dom';
import { Dialogs } from './Dialogs';


export const ScreenMessagesRightColumn = () => {
  return (
    <div className="screen-messages-right-column">
      {/* UserMessages */}
      <Switch>
        {/* Dialogs */}
        <Route exact path="/messages/:id" render={() => <Dialogs />} />
        {/* UserMessages */}
        <Route path="/messages/" render={() => <div className="screen-messages-right-column__users">
          <UserMessages />
          <UserMessages />
        </div>} />
      </Switch>
    </div>
  );
}
