import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en.json';
import ja from './ja/ja.json';
import ko from './ko/ko.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ko',
  resources: {
    en: en,
    ja: ja,
    ko: ko,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
