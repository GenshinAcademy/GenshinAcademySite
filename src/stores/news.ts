import { defineStore } from "pinia";
import { Logger } from "tslog";
import { ref } from "vue";
import axios, { httpRoute } from "@/HttpConfig";
import { INewsResponse } from "@/scripts/models/News";
import { AxiosResponse } from "axios";

export const useNewsStore = defineStore("news", () => {
  
  const logger = new Logger({ name: "newsLogger", minLevel: import.meta.env.VITE_LOG_LEVEL });
  
  const news = ref<INewsResponse[]>([])
  
  function useGetNews(limit: number = 5) {
    
    axios
      .get(`${ httpRoute.news }?limit=${ limit }`)
      .then((res: AxiosResponse<INewsResponse[]>) => {
        logger.trace('Fetching news');
        news.value = res.data;
      })
      .catch((error) => {
        logger.error(error.message);
      });
  }
  
  return { news, useGetNews }
})
