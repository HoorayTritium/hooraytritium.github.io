/* index.js */

import * as React from 'react';
import Head from '../components/head';

class Item extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Head
          title={'タイトル-item'}
          description={'ディスクリプション-item'}
          keyword={'キーワード'}
          image={'https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/8c04546102a94516b5ddacbf1268aaaf/%E2%80%94Pngtree%E2%80%94magic_216764.png'}
          url={'https://t-cr.jp'}
        />
        item
      </div>
    );
  }
}
export default Item;