import { useI18n } from "vue-i18n";
import locale from "@/_shared/locales/Locale.json"
import { checkLocale } from "@/localization";

export const PageTitle = (page: string) => {
  const local = checkLocale()
  
  //@ts-ignore
  document.title = locale[local as string][page].PageTitle;
}