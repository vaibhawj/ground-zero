import React from 'react';
import ResetPasswordContainer from '../src/containers/ResetPasswordContainer';
import ResetPasswordReducer from '../src/reducers/ResetPasswordReducer';
import { storiesOf, action } from '@kadira/storybook';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore( ResetPasswordReducer);

storiesOf('ResetPasswordContainer', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('one', () => {
    return getMainSection();
  });

function getMainSection() {

  return (
    <div className="todoapp">
      <ResetPasswordContainer/>
    </div>
  );
}
