import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import filterEmoji from './filterEmoji';
import EmojiResults from './EmojiResults';

const Emoji: React.FC = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji('', 20));

  const handleSearchChange = (e: any) => {
    setFilteredEmoji(filterEmoji(e.detail.value, 20));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios" color="warning">
          <IonTitle>Buscador de emoji</IonTitle>
        </IonToolbar>
        <IonToolbar color="warning">
          <SearchInput textChange={handleSearchChange} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <EmojiResults emojiData={filteredEmoji} />
      </IonContent>
    </IonPage>
  );
};

export default Emoji;
