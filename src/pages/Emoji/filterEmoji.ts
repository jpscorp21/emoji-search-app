import emojiList from './emojiList.json';

export interface EmojiItem {
  title: string;
  symbol: string;
  keywords: string;
}

export default function filterEmoji(searchText: string, maxResult: number) {
  return emojiList
    .filter((emoji: EmojiItem) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }

      return false;
    })
    .slice(0, maxResult); // Limitar el resultado
}
