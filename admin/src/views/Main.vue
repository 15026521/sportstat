<template>
  <el-container>
    <el-aside width = "200px">
      <el-menu mode="vertical" style="height:100vh;" :default-active="$route.path" router>
        <el-submenu 
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}}`"
        >
          <template slot="title">{{item.title}}</template>
          <el-menu-item 
              v-for="(subItem, subIndex) in item.items"
              :key="`menu-item-${index}-${subIndex}`"
              :index="subItem.path"
          >{{subItem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        玩转运动数据-后台管理界面
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import {Vue,Component} from "vue-property-decorator";

  @Component({})
  export default class Main extends Vue {
    menu = {
      items:[
        { 
          title: "首页" ,
          items: [
          { title: "我的数据", path: "/" },
          ]
        },
        {
          title:"足球数据",
          items: [
          { title: "比赛管理", path: "/games/list" },
          { title: "数据管理", path: "/teamrecords/list" },
          { title: "统计分析", path: "" }
        ]
        },
        {
          title:"篮球数据",
          items: [
          { title: "比赛管理", path: "/games/list" },
          { title: "数据管理", path: "/teamrecords/list" },
          { title: "统计分析", path: "" }
        ]
        },
         {
          title:'运营管理',
          items:[
            { title: '用户管理',path:'/users/list'},
          ]
        }
      ]
    }
  }
</script>

<style>

</style>
