import React from 'react';
import { IonSearchbar } from '@ionic/react';

const SearchInput = ({ textChange }: any) => {
  return (
    <IonSearchbar
      debounce={0}
      placeholder="Buscar"
      onIonChange={(e) => textChange(e)}
    />
  );
};

export default SearchInput;
