import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { ref, WritableComputedRef } from "vue";
import locale from "@/_shared/locales/Locale.json"
export interface ILanguage {
  ru: string,
  en: string,
}

const locales = ref('ru')

export const langList = ref<ILanguage>({
  ru: 'Русский',
  en: 'English'
})

export function SelectLocales(lang: string, locales: WritableComputedRef<string>) {
  document.cookie = `locale=${lang}`
  locales.value = lang
}


export function checkLocale() {
  let results = document.cookie.match(/locale=(.+?)(;|$)/);
  
  if (results) {
    return locales.value = <string>results[1] // ru/en/etc..
  }
  else {
    /** В зависимости от первого вхождения выбирает язык */
    for (let langIndex in window.navigator.languages) {
      let lang: string = <string>window.navigator.languages[langIndex]
      
      if (langList.value[lang as keyof ILanguage]) {
        locales.value = lang;
        
        document.cookie = `locale=${lang}`
        return locales.value
      }
    }
  }
}

checkLocale()

export const i18n = createI18n({
  locale: locales.value,
  fallbackLocale: 'ru',
  sync: false,
  messages: locale
})
