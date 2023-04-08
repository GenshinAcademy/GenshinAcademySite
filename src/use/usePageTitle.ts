import { useI18n } from "vue-i18n";
import locale from "@/_shared/locales/Locale.json"

export const usePageTitle = (page: string) => {
  const { locale: local } = useI18n()
  
  //@ts-ignore
  document.title = locale[local.value as string][page].PageTitle;
}