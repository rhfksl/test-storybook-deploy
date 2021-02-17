// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer, { rootSaga } from './modules';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware),
// );

// sagaMiddleware.run(rootSaga);

// import Navigator from '~/screens/Navigator';

// const App = () => {
//   return (
//     <>
//       <Provider store={store}>
//         <Navigator />
//       </Provider>
//     </>
//   );
// };

// export default App;

// // for storybook
// //export {default} from '../storybook';

import React from 'react';
import NormalButton from './components/button/NormalButton';
import styled from 'styled-components/native';
import PrimaryButton from './components/button/PrimaryButton';
import SecondaryButton from './components/button/SecondaryButton';
import NormalImageButton from './components/button/NormalImageButton';
import PrimaryImageButton from './components/button/PrimaryImageButton';
import SecondaryImageButton from './components/button/SecondaryImageButton';
import CircleImageButton from './components/button/CircleImageButton';
import RoundButton from './components/button/RoundButton';
import RoundImageButton from './components/button/RoundImageButton';
import LoginButton from './components/button/LoginButton';
import OptionButton from './components/button/OptionButton';
import OptionImageButton from './components/button/OptionImageButton';
import BaseTag from './components/tag/base/BaseTag';
import NormalTag from '~/components/tag/@types';
import TestScreen from '.';

const App = () => {
  return (
    <>
      <TestScreen />
    </>
  );
};

export default App;
