<template>
    <div class="container">
        <div id="main_top">
            <div class="header_main">
                <div class="header_left">
                    <div>
                        <span>部门名称：</span>
                        <span>{{departName}}</span>
                    </div>
                    <div style="margin-left:20px;">
                        <span>用户名：</span>
                        <span>{{userName}}</span>
                    </div>
                </div>
                <div class="header_right">
                    <ul>
                        <li>
                            <span class="el-icon-message"></span>
                            <span>进入后台</span>
                            <span class="iconInterval">|</span>
                        </li>
                        <li>
                            <span class="el-icon-message"></span>

                            <span>窗口大厅系统</span>
                            <span class="iconInterval">|</span>
                        </li>
                        <li>
                            <span class="el-icon-message"></span>
                            <span>归集处理平台</span>
                            <span class="iconInterval">|</span>
                        </li>
                        <li>
                            <span class="el-icon-message"></span>
                            <span>信用材料下载</span>
                            <span class="iconInterval">|</span>
                        </li>
                        <li>
                            <span class="el-icon-message"></span>
                            <span>奖惩插件下载</span>
                            <span class="iconInterval">|</span>
                        </li>
                        <li @click="goOut">
                            <span class="el-icon-message"></span>
                            <span>退出系统</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header_img">
                <el-image :src="headerImg" style="height:120px;width:100%;display:block;"></el-image>
            </div>
            <div class="nav">
                <ul class="navUl">
                    <li v-for="(item,index) in navArr" :key="index" @click="mouseOver(index)">
                        <div class="header_nav">
                            <span>{{item.name}}</span>
                            <div :class="item.isShow?'kailog':''"></div>
                        </div>
                        <ul class="botStyle" @mouseleave="mouseLeave(index)">
                            <li>{{item.name}}1</li>
                            <li>{{item.name}}2</li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
        <div class="main_bot">
            <div class="cont_main">
                <div class="cont">
                    <h1 style="font-size:30px;margin-top:10px;margin-bottom:10px;text-align:center">2020年南京市社会信用体系建设工作考核
                    </h1>
                    <div style="display:flex;flex-direction:row;justify-content:space-between;">
                        <div class="nav_list">
                            <el-image :src="nav1"></el-image>
                            <div class="nav_font">
                                <span>部门</span>
                                <span class="nav_font_style">市交通局</span>
                            </div>
                        </div>
                        <div class="nav_list">
                            <el-image :src="nav2"></el-image>
                            <div class="nav_font">
                                <span>实际得分</span>
                                <span class="nav_font_style">80</span>
                            </div>
                        </div>
                        <div class="nav_list">
                            <el-image :src="nav3"></el-image>
                            <div class="nav_font">
                                <span>报送材料总数</span>
                                <span class="nav_font_style">35(份)</span>
                            </div>
                        </div>
                    </div>

                    <div style="padding-top:10px;padding-bottom:10px;border-bottom:solid 2px blue;height">
                        <span style="border-right:solid 6px #f0a017;height:50px;width:50px;margin-right:10px;"></span>
                        <span style="font-weight:bolder">考核总指标（总分100分）</span>
                    </div>
                    <div class="imgChart">
                        <div class="charts" ref="myCharts">
                            <!-- <div id="myCharts" ></div> -->
                        </div>
                        <div class="imgTable">
                            <el-table :data="tableData" border style="width:100%;" stripe
                                :header-cell-style="{background:'#edf2fa',color:'#606266'}">
                                <el-table-column prop="date" label="指标名称" align="center" min-width="120">
                                </el-table-column>
                                <el-table-column prop="name" label="总分（分）" align="center" min-width="120">
                                </el-table-column>
                                <el-table-column prop="address" label="得分（分）" align="center" min-width="120">
                                </el-table-column>
                                <el-table-column prop="address" label="总项（项）" align="center" min-width="120">
                                </el-table-column>
                                <el-table-column prop="address" label="已完成项（项）" align="center" min-width="120">
                                </el-table-column>
                                <el-table-column prop="undone" label="未完成项（项）" align="center" min-width="120">
                                    <template slot-scope="scope">
                                        <div :style="scope.row.undone>0?'color:red':'color:#000'">{{scope.row.undone}}
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>

                    <div style="padding-top:10px;padding-bottom:10px;border-bottom:solid 2px blue;height">
                        <span style="border-right:solid 6px #f0a017;height:50px;width:50px;margin-right:10px;"></span>
                        <span style="font-weight:bolder">考核报送</span>
                    </div>

                    <div style="margin-top:10px;">
                        <el-tabs type="border-card" style="margin-bottom:20px;">
                            <el-tab-pane>
                                <el-badge :value="1" slot="label" class="item">
                                    <span> 工作推进</span>
                                </el-badge>
                                <WorkAdvance></WorkAdvance>
                            </el-tab-pane>
                            <el-tab-pane label="政务诚信">政务诚信</el-tab-pane>
                            <el-tab-pane label="数据归真">角色管理</el-tab-pane>
                            <el-tab-pane label="宣传教育">定时任务补偿</el-tab-pane>
                            <el-tab-pane label="新型监管">用户管理</el-tab-pane>
                            <el-tab-pane label="场景应用">配置管理</el-tab-pane>
                            <el-tab-pane label="试点示范">角色管理</el-tab-pane>
                            <el-tab-pane label="创新工作">定时任务补偿</el-tab-pane>
                            <el-tab-pane label="专项指标">角色管理</el-tab-pane>
                            <el-tab-pane label="专项指标">定时任务补偿</el-tab-pane>
                            <el-tab-pane label="工作总结">定时任务补偿</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <div class="cont" style="margin-top:20px;">
                    <div style="padding-top:10px;padding-bottom:10px;border-bottom:solid 2px blue;">
                        <span style="border-right:solid 6px #f0a017;height:50px;width:50px;margin-right:10px;"></span>
                        <span style="font-weight:bolder">考核得分统计</span>
                    </div>
                    <div style="margin-top:10px;">
                        <el-tabs type="border-card">
                            <el-tab-pane label="市级部门">
                                <div>
                                    <div style="text-align:right;margin-bottom:10px;">
                                        <el-button type="primary" size="medium" @click="handleExcel">导出</el-button>
                                    </div>
                                    <el-table :data="tableData" stripe style="width: 100%" border
                                        :header-cell-style="{background:'#edf2fa',color:'#606266'}">
                                        <el-table-column prop="date" label="序号" width="180" align="center">
                                        </el-table-column>
                                        <el-table-column prop="name" label="部门" width="180" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="工作推进(8)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="政务诚信(8)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="数据归集(25)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="宣传教育(9)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="新型监管(25)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="场景应用(8)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="试点示范(5)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="创新工作(10)分" align="center">
                                        </el-table-column>
                                        <el-table-column prop="address" label="总分" align="center">
                                        </el-table-column>
                                    </el-table>
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                        :current-page="page.pageNum" :page-sizes="page.pageSizes" :page-size="page.pageSize"
                                        layout="total, sizes, prev, pager, next, jumper" :total="page.total" style="text-align:right;margin-top:10px;">
                                    </el-pagination>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="辖区">配置管理</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>


            </div>
            <div class="footer">
                <div class="footer_top">
                    <span>地址：南京市江东路265号新城大厦</span>
                    <span style="margin-left:30px;margin-right:30px;">邮编：210008</span>
                    <span>技术支持：南京莱斯信息技术股份有限公司</span>
                </div>
                <div style="color:#fff;text-align:center;margin-top:10px;">南京市信息中心&nbsp;Copyright2016-2020版权所有</div>
            </div>
        </div>
    </div>
</template>

<script>
    import WorkAdvance from './WorkAdvance.vue';
    export default {
        components: {
            WorkAdvance
        },
        data() {
            return {
                departName: "市交通局",
                userName: "薛打打",
                headerImg: require("@/assets/img/headerImg.png"),
                nav1: require("@/assets/img/nav1.png"),
                nav2: require("@/assets/img/nav2.png"),
                nav3: require("@/assets/img/nav3.png"),
                page:{
                    pageNum:10,
                    pageSizes:[10,20,30,40],
                    pageSize:0,
                    total:100
                },
                tableData: [{
                        date: '政务诚信',
                        name: '好人',
                        address: 'hahahaha',
                        undone: 1
                    },
                    {
                        date: '数据归真',
                        name: '好人',
                        address: 'hahahaha',
                        undone: 0
                    },
                    {
                        date: '宣传教育',
                        name: '好人',
                        address: 'hahahaha',
                        undone: 0
                    }
                ],
                activeName: 'first',
                navArr: [{
                        name: "首页",
                        isShow: false,
                    },
                    {
                        name: "共享目录",
                        isShow: true,
                        show: false
                    },
                    {
                        name: "信用查询",
                        isShow: true
                    },
                    {
                        name: "政策文件",
                        isShow: true
                    },
                    {
                        name: "交换共享",
                        isShow: true
                    },
                    {
                        name: "主体服务",
                        isShow: true
                    },
                    {
                        name: "工作考核",
                        isShow: true
                    },
                    {
                        name: "联合奖惩",
                        isShow: true
                    },
                    {
                        name: "信用修复",
                        isShow: true
                    },
                    {
                        name: "信用大数据",
                        isShow: true
                    }

                ]
            }
        },
        methods: {
            handleExcel(){
                this.$message({
                    message:"此功能尚未完善"
                })
            },
            mouseOver(index) {
                if (this.navArr[index].isShow == true) {
                    let aa = document.getElementsByClassName('navUl');
                    let bb = aa[0].children;
                    let cc = bb[index].childNodes[1]
                    cc.style.display = "block";
                }

            },
            mouseLeave(index) {
                if (this.navArr[index].isShow == true) {
                    let aa = document.getElementsByClassName('navUl');
                    let bb = aa[0].children;
                    let cc = bb[index].childNodes[1]
                    cc.style.display = "none";
                }

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            goOut() {
                this.$router.push('/')
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.page.pageNum=val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.page.pageSize=val
            }
        },
        mounted() {
            // eslint-disable-next-line no-unused-vars
            const myCharts = this.$echarts.init(this.$refs.myCharts);
            // eslint-disable-next-line no-unused-vars
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 2,
                    orient: 'horizontal',
                    icon: 'circle',
                    data: ['场景应用', '数据归集', '宣传教育', '政务诚信', '工作推进', '创新工作', '试点示范', '新型监管']
                },
                color: ['#6dc1f2', '#d973db', '#4fc7ba', '#ffbb3b', '#b687cf', '#2997f5', '#ff8484', '#6fe4b4'],
                // calculable:true,
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    // label: {
                    //     show: false,
                    //     position: 'center'
                    // },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: true,
                    },
                    data: [{
                            value: 10,
                            name: '场景应用'
                        },
                        {
                            value: 25,
                            name: '数据归集'
                        },
                        {
                            value: 9,
                            name: '宣传教育'
                        },
                        {
                            value: 7,
                            name: '政务诚信'
                        },
                        {
                            value: 8,
                            name: '工作推进'
                        },
                        {
                            value: 7,
                            name: '创新工作'
                        },
                        {
                            value: 5,
                            name: '试点示范'
                        },
                        {
                            value: 25,
                            name: '新型监管'
                        }
                    ]
                }]
            };
            myCharts.setOption(option);
        }

    }
</script>
<style scoped lang="scss">
    #main_top {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
    }

    .main_bot {
        position: relative;
        top: 200px;
    }

    .header_main {
        height: 30px;
        line-height: 30px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #fff;
    }
    .header_right>ul>li:hover{
        color: skyblue;
    }

    ul,
    li {
        float: left;
        cursor: pointer;
    }

    .iconInterval {
        margin-left: 5px;
        margin-right: 5px;
    }

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #1c6ebd;
        height: 50px;
    }

    .navUl {
        li {
            width: 120px;
            color: #fff;
            cursor: pointer;
            position: relative;
        }
    }

    .navUl>li:hover {
        color: skyblue;
    }

    .navUl ul {
        position: absolute;
        left: 0px;
        top: 30px;
    }

    .navUl ul {
        background: #fff;
        text-align: center;

        li {
            color: #000;
        }
    }

    .navUl ul>li:hover {
        background: #e5e5e5;
    }

    .cont_main {
        background: #f6f6f6;
        padding-bottom: 30px;
    }

    .cont {
        margin-left: 180px;
        margin-right: 180px;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 50px;
        padding-right: 50px;
        background: #ffffff;
    }

    .footer {
        height: 108px;
        background: #1c6ebd;
        padding-top: 30px;

        .footer_top {
            text-align: center;

            span {
                color: #fff;
            }
        }
    }

    .nav_list {
        height: 76px;
        position: relative;

        .nav_font {
            position: absolute;
            top: 30px;
            left: 20px;
            color: #fff;

            .nav_font_style {
                margin-left: 30px;
                font-size: 22px;
                font-weight: bold;
            }
        }
    }

    .header_nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .imgChart {
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .charts {
            height: 300px;
            width: 40%;
            border: solid 1px #e5e5e5;
        }

        .imgTable {
            margin-left: 10px;
            // flex-grow: 1;
            width: 58%;
        }
    }

    .el-table .warning-row {
        background: red;
    }

    .el-table .success-row {
        background: #fff;
    }

    .el-tabs .el-tabs__nav-wrap::after {
        background: #fff;
    }

    // .el-badge__content.is-fixed {
    //     top: 10px;
    // }

    .kailog {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #fff;
        margin-left: 5px;
        cursor: pointer;
        margin-top: 3px;
    }

    .botStyle {
        display: none;
        border: solid 1px #e5e5e5;
        border-radius: 3px;
        padding-bottom: 10px;
        padding-top: 5px;
    }

    .el-badge {

        /deep/.el-badge__content {
            margin-top: 18px;
        }

    }

    /deep/.el-badge__content.is-fixed {
        position: absolute;
        right: 0;
    }

    /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item {
        width: 110px;

    }
</style>