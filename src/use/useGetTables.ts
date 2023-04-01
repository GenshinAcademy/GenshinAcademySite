import { ref } from "vue";
import axios, { httpRoute } from "@/HttpConfig";
import { Logger } from "tslog";
import { AxiosResponse } from "axios";
import { ITablesResponse } from "@/scripts/models/Tables";


const tableLayout = [
  {
    id: 0,
    redirect_url: '/',
    icon_url: undefined,
    title: 'GU и ICD',
    description: 'Силы наложения статусов и откаты персонажей.'
  },
]

export function useGetTables() {
  const logger = new Logger({ name: "tablesLogger" });
  const data = ref<ITablesResponse[]>()
  
  
  axios
    .get(httpRoute.tables)
    .then((res: AxiosResponse<ITablesResponse[]>) => {
      logger.trace('Fetching tables');
      data.value = res.data;
    })
    .catch((error) => {
      logger.error(error.message);
    });
  
  return data.value;
}