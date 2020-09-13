import React from 'react';
import './ScreenMessagesRightColumn.scss';
// import { UserMessages } from './UserMessages';
import { Switch, Route } from 'react-router-dom';
import { Dialogs } from './Dialogs';


export const ScreenMessagesRightColumn = React.memo(() => {
  return (
    <div className="screen-messages-right-column">
      <Switch>
        <Route exact path="/messages/:id" render={() => <Dialogs />} />
        <Route path="/messages/" render={() => <div className="screen-messages-right-column__users">
          Должны быть самураи
        </div>} />
        {/* /firends <Friends />*/}
      </Switch>
    </div>
  );
})
