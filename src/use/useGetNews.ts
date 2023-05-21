import axios, { httpRoute } from "@/HttpConfig.js";
import { AxiosResponse } from "axios";
import { Logger } from "tslog";
import { ref } from "vue";
import { INewsResponse } from "@/scripts/models/News";


const postLayout: INewsResponse[] = [
  {
    Id: 1,
    Title: "Test",
    Description: "Test Description",
    Preview: "https://hostname/testPreview.webp",
    RedirectUrl: "https://hostname.com/1",
    CreatedAt: "2023-03-26T14:22:57.600373+07:00",
  }
]

export function useGetNews(limit: number = 5): INewsResponse[] {
  const logger = new Logger({ name: "newsLogger", minLevel: import.meta.env.VITE_LOG_LEVEL});
  const data = ref<INewsResponse[]>()
  
  axios
    .get(httpRoute.news)
    .then((res: AxiosResponse<INewsResponse[]>) => {
      logger.trace('Fetching news');
      data.value = res.data;
    })
    .catch((error) => {
      logger.error(error.message);
    });
  
  if (data.value === undefined) {
    data.value = postLayout
  }
  
  
  return data.value;
}
