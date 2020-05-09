import React, { useEffect } from 'react';
import { IonList } from '@ionic/react';
import { EmojiItem } from './filterEmoji';
import EmojiResultRow from './EmojiResultRow';
import Clipboard from 'clipboard';

export interface EmojiResultsProps {
  emojiData: any[];
}

const EmojiResults: React.SFC<EmojiResultsProps> = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard('.copy-to-clipboard');

    return function () {
      clipboard.destroy();
    };
  });

  return (
    <IonList>
      {emojiData.map((emoji: EmojiItem) => (
        <EmojiResultRow
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </IonList>
  );
};

export default EmojiResults;
