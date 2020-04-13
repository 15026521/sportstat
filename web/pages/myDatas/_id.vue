<template>
  <div class="pa-3">
    <h3>数据详情</h3>
    <div>
      <div>
        <!---  con_one_1 start  --->
        <div id="con_one_1" style="display: block;">
          <div class="title" style="text-align:center; padding-right:20px;">
            <button class="btn1" name="btn_half_static" value="0">
              常规全场
            </button>
            <button class="btn1 btn" name="btn_half_static" value="1">
              上半场
            </button>
            <button class="btn1 btn" name="btn_half_static" value="2">
              下半场
            </button>
          </div>
          <div class="team_data">
            <div class="team_logo">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/110/1036.png?Expires=4619141434&amp;OSSAccessKeyId=ZMQayXeY7ZLaB0BH&amp;Signature=3WghCyPYvbEX8qEvri%2Bc6rNNzUY%3D"
                width="220"
                height="220"
                alt="深圳佳兆业足球"
                title="深圳佳兆业足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_logo2">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2019_1_1000.png?Expires=4706490004&amp;OSSAccessKeyId=xQ9FkjDA2vJOhB9D&amp;Signature=SJw8ES1sKA5ZR1RGs8bpFc7Qx8E%3D"
                width="220"
                height="220"
                alt="广州恒大淘宝足球"
                title="广州恒大淘宝足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_data_title" id="tb">
              <ul>
                <li class="data_left">
                  <div style="width:40%" class="data_left1"></div>
                </li>
                <li class="bg_blue">2</li>
                <li class="bg_black">进球</li>
                <li class="bg_blue">3</li>
                <li class="data_right">
                  <div style="width:60%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:0%" class="data_left1"></div>
                </li>
                <li class="bg_blue">0</li>
                <li class="bg_black">点球</li>
                <li class="bg_blue">0</li>
                <li class="data_right">
                  <div style="width:0%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:58.06451612903226%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">18</li>
                <li class="bg_black">射门</li>
                <li class="bg_blue">13</li>
                <li class="data_right">
                  <div
                    style="width:41.935483870967744%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:36.36363636363637%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">4</li>
                <li class="bg_black">射正</li>
                <li class="bg_blue">7</li>
                <li class="data_right">
                  <div
                    style="width:63.63636363636363%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:45.7%" class="data_left1"></div>
                </li>
                <li class="bg_blue">45.7%</li>
                <li class="bg_black">控球率</li>
                <li class="bg_blue">54.3%</li>
                <li class="data_right">
                  <div
                    style="width:54.300000000000004%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:47.25925925925926%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">319</li>
                <li class="bg_black">传球数</li>
                <li class="bg_blue">356</li>
                <li class="data_right">
                  <div
                    style="width:52.74074074074074%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:72.39999999999999%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">72%</li>
                <li class="bg_black">传球成功率</li>
                <li class="bg_blue">76%</li>
                <li class="data_right">
                  <div style="width:76.1%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:48.3%" class="data_left1"></div>
                </li>
                <li class="bg_blue">48.3%</li>
                <li class="bg_black">进攻主导率</li>
                <li class="bg_blue">51.7%</li>
                <li class="data_right">
                  <div style="width:51.7%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:38.095238095238095%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">16</li>
                <li class="bg_black">任意球</li>
                <li class="bg_blue">26</li>
                <li class="data_right">
                  <div
                    style="width:61.904761904761905%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:43.75%" class="data_left1"></div>
                </li>
                <li class="bg_blue">7</li>
                <li class="bg_black">前场任意球</li>
                <li class="bg_blue">9</li>
                <li class="data_right">
                  <div style="width:56.25%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:33.33333333333333%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">4</li>
                <li class="bg_black">角球</li>
                <li class="bg_blue">8</li>
                <li class="data_right">
                  <div
                    style="width:66.66666666666666%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!---  con_one_1 over --->

        <!---  con_one_2 start --->
        <div id="con_one_2" style="display: none;">
          <div class="title" style="text-align:center; padding-right:20px;">
            <button class="btn1" name="btn_half_attack" value="0">
              常规全场
            </button>
            <button class="btn" name="btn_half_attack" value="1">上半场</button>
            <button class="btn" name="btn_half_attack" value="2">下半场</button>
          </div>
          <div class="team_data">
            <div class="team_logo">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/110/1036.png?Expires=4619141434&amp;OSSAccessKeyId=ZMQayXeY7ZLaB0BH&amp;Signature=3WghCyPYvbEX8qEvri%2Bc6rNNzUY%3D"
                width="220"
                height="220"
                alt="深圳佳兆业足球"
                title="深圳佳兆业足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_logo2">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2019_1_1000.png?Expires=4706490004&amp;OSSAccessKeyId=xQ9FkjDA2vJOhB9D&amp;Signature=SJw8ES1sKA5ZR1RGs8bpFc7Qx8E%3D"
                width="220"
                height="220"
                alt="广州恒大淘宝足球"
                title="广州恒大淘宝足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_data_title" id="tbattack">
              <ul>
                <li class="data_left">
                  <div
                    style="width:58.06451612903226%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">18</li>
                <li class="bg_black">射门</li>
                <li class="bg_blue">13</li>
                <li class="data_right">
                  <div
                    style="width:41.935483870967744%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:70%" class="data_left1"></div>
                </li>
                <li class="bg_blue">7</li>
                <li class="bg_black">禁区外射门</li>
                <li class="bg_blue">3</li>
                <li class="data_right">
                  <div style="width:30%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:33.33333333333333%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">1</li>
                <li class="bg_black">禁区外射正</li>
                <li class="bg_blue">2</li>
                <li class="data_right">
                  <div
                    style="width:66.66666666666666%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:52.38095238095239%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">11</li>
                <li class="bg_black">禁区内射门</li>
                <li class="bg_blue">10</li>
                <li class="data_right">
                  <div
                    style="width:47.61904761904761%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:37.5%" class="data_left1"></div>
                </li>
                <li class="bg_blue">3</li>
                <li class="bg_black">禁区内射正</li>
                <li class="bg_blue">5</li>
                <li class="data_right">
                  <div style="width:62.5%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:75%" class="data_left1"></div>
                </li>
                <li class="bg_blue">9</li>
                <li class="bg_black">关键传球</li>
                <li class="bg_blue">3</li>
                <li class="data_right">
                  <div style="width:25%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:51.33689839572193%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">96</li>
                <li class="bg_black">进攻30米区传球次数</li>
                <li class="bg_blue">91</li>
                <li class="data_right">
                  <div
                    style="width:48.663101604278076%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:64.60000000000001%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">65%</li>
                <li class="bg_black">进攻30米区传球成功率</li>
                <li class="bg_blue">67%</li>
                <li class="data_right">
                  <div style="width:67%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:54.285714285714285%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">19</li>
                <li class="bg_black">传中</li>
                <li class="bg_blue">16</li>
                <li class="data_right">
                  <div
                    style="width:45.714285714285715%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:42.857142857142854%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">9</li>
                <li class="bg_black">突破</li>
                <li class="bg_blue">12</li>
                <li class="data_right">
                  <div
                    style="width:57.14285714285714%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!---  con_one_2 over --->

        <!---  con_one_3 start --->
        <div id="con_one_3" style="display: none;">
          <div class="title" style="text-align:center; padding-right:20px;">
            <button class="btn1" name="btn_half_defenRate" value="0">
              常规全场
            </button>
            <button class="btn" name="btn_half_defenRate" value="1">
              上半场
            </button>
            <button class="btn" name="btn_half_defenRate" value="2">
              下半场
            </button>
          </div>
          <div class="team_data">
            <div class="team_logo">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/110/1036.png?Expires=4619141434&amp;OSSAccessKeyId=ZMQayXeY7ZLaB0BH&amp;Signature=3WghCyPYvbEX8qEvri%2Bc6rNNzUY%3D"
                width="220"
                height="220"
                alt="深圳佳兆业足球"
                title="深圳佳兆业足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_logo2">
              <img
                src="http://csfile.oss-cn-hangzhou.aliyuncs.com/teamlogo/300/2019_1_1000.png?Expires=4706490004&amp;OSSAccessKeyId=xQ9FkjDA2vJOhB9D&amp;Signature=SJw8ES1sKA5ZR1RGs8bpFc7Qx8E%3D"
                width="220"
                height="220"
                alt="广州恒大淘宝足球"
                title="广州恒大淘宝足球数据"
                onerror="picLost(this, 5)"
              />
            </div>
            <div class="team_data_title" id="tbdefen">
              <ul>
                <li class="data_left">
                  <div
                    style="width:58.536585365853654%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">24</li>
                <li class="bg_black">抢断</li>
                <li class="bg_blue">17</li>
                <li class="data_right">
                  <div
                    style="width:41.46341463414634%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:35.714285714285715%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">15</li>
                <li class="bg_black">拦截</li>
                <li class="bg_blue">27</li>
                <li class="data_right">
                  <div
                    style="width:64.28571428571429%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:44.44444444444444%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">12</li>
                <li class="bg_black">解围</li>
                <li class="bg_blue">15</li>
                <li class="data_right">
                  <div
                    style="width:55.55555555555556%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:64.28571428571429%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">27</li>
                <li class="bg_black">犯规</li>
                <li class="bg_blue">15</li>
                <li class="data_right">
                  <div
                    style="width:35.714285714285715%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:60%" class="data_left1"></div>
                </li>
                <li class="bg_blue">3</li>
                <li class="bg_black">黄牌</li>
                <li class="bg_blue">2</li>
                <li class="data_right">
                  <div style="width:40%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:0%" class="data_left1"></div>
                </li>
                <li class="bg_blue">0</li>
                <li class="bg_black">红牌</li>
                <li class="bg_blue">0</li>
                <li class="data_right">
                  <div style="width:0%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div style="width:56.25%" class="data_left1"></div>
                </li>
                <li class="bg_blue">9</li>
                <li class="bg_black">封堵传球</li>
                <li class="bg_blue">7</li>
                <li class="data_right">
                  <div style="width:43.75%" class="data_right1"></div>
                </li>
              </ul>
              <ul>
                <li class="data_left">
                  <div
                    style="width:27.27272727272727%"
                    class="data_left1"
                  ></div>
                </li>
                <li class="bg_blue">3</li>
                <li class="bg_black">封堵射门</li>
                <li class="bg_blue">8</li>
                <li class="data_right">
                  <div
                    style="width:72.72727272727273%"
                    class="data_right1"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!---  con_one_3 over --->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
