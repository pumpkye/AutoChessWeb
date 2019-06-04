import { Context } from "continuation-local-storage";
import { randomLayoutDao } from "../dao/random_layout_dao";

class RandomLayoutController {
    constructor() {

    }
    async getLayoutList(ctx: Context) {
        let jsonStr = ctx.params.jsonParam;
        console.log(jsonStr);
        let jsonObj = JSON.parse(jsonStr);
        let layoutList = await randomLayoutDao.getLayoutList(jsonObj.npc_count, jsonObj.sum_cost);
        if (layoutList) {
            ctx.body = {
                success: true,
                retDes: "查询成功",
                ret: layoutList,
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "没有获取到列表",
                ret: null
            }
        }
    }

    async addLayout(ctx: Context) {
        let jsonObj = ctx.request.body;
        // let layout = await randomLayoutDao.addLayout(jsonObj.)
    }

    async addLayoutBatch(ctx: Context) {
        let jsonObj: Array<MsgLayout> = ctx.request.body;
        let ret = null;
        // Array<MsgLayout>
        for (let i = 0; i < jsonObj.length; i++) {
            const msgLayout = jsonObj[i];
            ret = await randomLayoutDao.addLayout(msgLayout.layout.length, msgLayout.total_cost, JSON.stringify(msgLayout.layout));
        }
        if (ret) {
            ctx.body = {
                success: true,
                retDes: "插入成功",
                ret: ret,
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "插入失败",
                ret: null,
            }
        }
    }

}

export const randomLayoutController = new RandomLayoutController();

interface MsgLayout {
    id: number,
    total_cost: number,
    layout: Array<any>,
}
