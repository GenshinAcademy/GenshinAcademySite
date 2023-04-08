import { defineStore } from "pinia";
import { Logger } from "tslog";
import { ref } from "vue";
import axios, { httpRoute } from "@/HttpConfig";
import { INewsResponse } from "@/scripts/models/News";
import { AxiosResponse } from "axios";

export const useTablesStore = defineStore("tables", () => {
  
  const logger = new Logger({ name: "tablesLogger" });
  
  const tables = ref<INewsResponse[]>([])
  
  function useGetTables() {
    
    axios
      .get(httpRoute.tables)
      .then((res: AxiosResponse<INewsResponse[]>) => {
        logger.trace('Fetching tables');
        tables.value = res.data;
      })
      .catch((error) => {
        logger.error(error.message);
      });
  }
  
  tables.value = [
    {
      Title: '123'
    }
  ]
  
  return { tables, useGetTables }
})