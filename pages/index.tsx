/* index.js */

import * as React from 'react';
import Head from '../components/head';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Head
          title={'タイトル-index'}
          description={'ディスクリプション-index'}
          keyword={'キーワード'}
          image={'https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/87e9eaf03d5f47c39709bcdf4560e837/%E5%86%8D%E7%94%9F%E5%81%9C%E6%AD%A2%E3%83%9C%E3%82%BF%E3%83%B3.png'}
          url={'https://ponsuke.work'}
        />
        index
      </div>
    );
  }
}
export default App;