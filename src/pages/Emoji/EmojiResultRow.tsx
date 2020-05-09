import * as React from 'react';
import { IonItem, IonLabel, IonAvatar, IonNote } from '@ionic/react';

export interface EmojiResultRowProps {
  title: string;
  symbol: string;
}

const EmojiResultRow: React.SFC<EmojiResultRowProps> = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0)?.toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <IonItem className="copy-to-clipboard" data-clipboard-text={symbol}>
      <IonAvatar slot="start">
        <img alt={title} src={src} />
      </IonAvatar>
      <IonLabel>{title}</IonLabel>
      <IonNote slot="end">Toca para copiar</IonNote>
    </IonItem>
  );
};

export default EmojiResultRow;
