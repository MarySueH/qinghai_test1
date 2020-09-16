<template>
    <div>
        <ul style="margin-bottom:5px;">
            <li class="main_top" v-for="(item,index) in circleArr" :key="index">
                <div :style="{background:item.color}" class="iconstyle"></div>
                <span>{{item.name}}</span>
            </li>
        </ul>
        <el-table :data="tableData" style="width:100%;clear:both;margin-top:10px;" border
            :row-class-name="tableRowClassName1"
            :header-cell-style="{background:'#f3f3f3',color:'#606266',borderColor:'#dcdfe6'}">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <div style="background:#f8f8f8;padding:10px 20px;">
                        <div>
                            <span>考核标准：</span>
                            <span>{{ props.row.name }}</span>
                        </div>
                        <div>
                            <span>分值（分）：</span>
                            <span>{{ props.row.category }}</span>
                        </div>
                        <div>
                            <span>考核内容：</span>
                            <span>{{ props.row.shopId }}</span>
                        </div>
                         <div>
                            <span>得分点：</span>
                            <span>{{ props.row.category }}</span>
                        </div>
                        <div>
                            <span>网上申报具体要求：</span>
                            <span>{{ props.row.address }}</span>
                        </div>
                        <div>
                            <span>考核依据：</span>
                            <span>{{ props.row.desc }}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="序号" type="index" width="70" align="center">
            </el-table-column>
            <el-table-column label="考核标准" prop="name" align="center" width="120">
            </el-table-column>
            <el-table-column label="分值(分)" prop="category" align="center" width="120">
            </el-table-column>
            <el-table-column label="考核内容" prop="desc" align="center" min-width="180">
            </el-table-column>
            <el-table-column label="操作" prop="desc" align="center" width="100px">
                <template slot-scope="scope">
                    <span style="color:#5892fe;cursor: pointer;" @click="handleSubmit(scope.row)">报送</span>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="报送" :visible.sync="dialogTableVisible" style="border-radius: 10px;" width="60%">
            <el-table :data="gridData" border stripe :header-cell-style="{background:'#edf2fa',color:'#606266',borderColor:'#dcdfe6',fontWeight:600}">>
                <el-table-column property="content" label="考核内容" min-width="200" align="center"></el-table-column>
                <el-table-column property="totalNum" label="总分值" width="120" align="center"></el-table-column>
                <el-table-column property="selfScore" label="自评分" align="center" width="120"></el-table-column>
                <el-table-column property="point" label="审核分" width="120" align="center"></el-table-column>
                <el-table-column label="操作" width="150" align="center">
                    <template slot-scope="scope">
                        <div style="color:#5691fd;">
                            <span style="cursor: pointer;">报送</span><span
                                style="margin-left:5px;margin-right:5px;">|</span><span
                                style="cursor: pointer;">查看</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="address" label="审核情况" align="center" min-width="120px">
                    <template slot-scope="scope">
                        <span
                            :style="scope.row.review=='pass'?'color:#51e743':scope.row.review=='notpass'?'color:#fe0404':scope.row.review=='unreview'?'color:#fdc676':'color:#000'">{{scope.row.review1}}</span>
                    </template>
                </el-table-column>
                <el-table-column property="finalView" label="终审情况" align="center" :formatter="fmt" min-width="120px">
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogTableVisible: false,
                gridData: [{
                        content: '信用工作领导小组',
                        totalNum: 200,
                        selfScore: 0.5,
                        point: 0.5,
                        review: 'pass',
                        review1: '审核通过',
                        finalView: 'pass'

                    },
                    {
                        content: '信用工作领导小组',
                        totalNum: 200,
                        selfScore: 0.5,
                        point: 0.5,
                        review: 'notpass',
                        review1: '审核未通过',
                        finalView: 'notpass'

                    },
                    {
                        content: '信用工作领导小组',
                        totalNum: 200,
                        selfScore: 0.5,
                        point: 0.5,
                        review: 'unreview',
                        review1: '未审核',
                        finalView: 'pass'

                    },
                    {
                        content: '信用工作领导小组',
                        totalNum: 200,
                        selfScore: 0.5,
                        point: 0.5,
                        review: 'pass',
                        review1: '审核通过',
                        finalView: 'pass'

                    }
                ],
                circleArr: [{
                    name: "未推进",
                    color: "#feef02"
                }, {
                    name: "审核通过",
                    color: "#3de42d"
                }, {
                    name: "待审核",
                    color: "#efa544"
                }, {
                    name: "审核未通过",
                    color: "#b687cf"
                }],
                tableData: [{
                    id: '12987122',
                    name: '领导重视程度',
                    category: '2',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '制度建设',
                    category: '10',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '工作要点',
                    category: '8',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '任务落实',
                    category: '6',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            }
        },
        methods: {
            fmt(row, column, cellValue) {
                if (cellValue == 'pass') {
                    return '终审通过'
                } else if (cellValue == 'notpass') {
                    return '终审未通过'
                } else if (cellValue == 'unreview') {
                    return '未审核'
                }
                return ''
            },
            // eslint-disable-next-line no-unused-vars
            handleSubmit(row) {
                this.dialogTableVisible = true;
            },
            tableRowClassName1({
                row,
                rowIndex
            }) {
                if (rowIndex % 2 == 0) {
                    return 'warning-row'
                } else {
                    return 'success-row'
                }
            }
        }
    }
</script>
<style scoped>
    .main_top {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    ul,
    li {
        float: left;
        margin-right: 5px;
    }

    .iconstyle {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
<style>
    .el-dialog {
        border-radius: 10px;
    }

    .el-dialog__header {
        background: #5691fd;
        color: #ffffff;
        border-radius: 10px 10px 0 0;
        padding: 10px;
        padding-left: 15px;
        

    }

    .el-dialog__title {
        color: #ffffff;
        font-size: 16px;
    }

    .el-dialog__headerbtn .el-dialog__close {
        color: #ffffff;
        padding-bottom: 10px;
    }
    .el-dialog__headerbtn{
        position: absolute;
        top: 10px;
        font-size: 20px;
    }
    .el-table td,
    .el-table th {
        padding: 10px 0;
    }
    .el-table__expanded-cell[class*=cell]{
        padding:0;
    }
    .td, th, caption{
        font-size: 12px;
    }
</style>