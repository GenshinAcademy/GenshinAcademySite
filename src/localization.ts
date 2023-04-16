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
  localStorage.setItem('locale', lang)
  locales.value = lang
}


export function checkLocale() {
  if (localStorage.getItem('locale')) {
    return locales.value = <string>localStorage.getItem('locale')
  } else {
    
    /** В зависимости от первого вхождения выбирает язык*/
    for (let langIndex in window.navigator.languages) {
      let lang: string = <string>window.navigator.languages[langIndex]
      
      if (langList.value[lang as keyof ILanguage]) {
        locales.value = lang;
        
        localStorage.setItem('locale', lang)
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
