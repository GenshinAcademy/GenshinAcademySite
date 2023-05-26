import { checkLocale } from "@/localization";
import { useHead } from '@unhead/vue';
import data from "@/_shared/locales/Metatags.json";

type MetaLocale = {
  [language: string]: {
    [page: string]: {
      PageTitle: string;
      PageDescription: string;
      PageImage: string;
    };
  };
};


export const SetMetaTags = (page: string) => {
  const locale = checkLocale() as string;
  const metatags = data as MetaLocale;

  useHead({
    title: metatags[locale][page].PageTitle,
    meta: [
      { name: "description", content: metatags[locale][page].PageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { property: "og:title", content: metatags[locale][page].PageTitle },
      { property: "og:description", content: metatags[locale][page].PageDescription },
      // { property: "og:image", content: "https://assets.academy-project.info/" + metatags[locale][page].PageImage },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: () => window.location.href },
      { property: "twitter:title", content: metatags[locale][page].PageTitle },
      { property: "twitter:description", content: metatags[locale][page].PageDescription },
      // { property: "twitter:image", content: "https://assets.academy-project.info/" + metatags[locale][page].PageImage },
    ]
  });
};