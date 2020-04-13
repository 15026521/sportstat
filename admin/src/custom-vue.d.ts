import Vue from 'vue'
import { AxiosInstance } from 'axios';
import { ECharts } from 'echarts';
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $http: AxiosInstance;
    $echarts: ECharts;
  }
}

declare module 'vue-ele-form' {}
declare module 'echarts' {}