import { Context } from "koa";
import { npcDao } from "../dao/npc_dao";

class NpcController {
    constructor() {

    }
    async updateNpc(ctx: Context) {
        let id = ctx.params.id;
        let jsonObj = ctx.request.body;
        let npc = await npcDao.update(id,
            jsonObj.name,
            jsonObj.level1_rate,
            jsonObj.level2_rate,
            jsonObj.level3_rate,
            jsonObj.quality,
            jsonObj.quality_level1_rate,
            jsonObj.quality_level2_rate,
            jsonObj.quality_level3_rate);
        if (npc) {
            ctx.body = {
                success: true,
                retDes: '更新成功',
                ret: npc
            }
        } else {
            ctx.body = {
                success: false,
                retDes: '更新失败',
                ret: null
            }
        }
    }

    async updateNpcBatch(ctx: Context) {
        let jsonObj = ctx.request.body;
        console.log(jsonObj);
        let success = true;
        for (let i = 0; i < jsonObj.length; i++) {
            const npc = jsonObj[i];
            let ret = await npcDao.update(npc.id, npc.name,
                npc.level1_rate, npc.level2_rate, npc.level3_rate, npc.quality,
                npc.quality_level1_rate, npc.quality_level2_rate, npc.quality_level3_rate);
            if (!ret) {
                success = false;
            }
        }
        if (success) {
            ctx.body = {
                success: true,
                retDes: '批量更新成功',
            }
        } else {
            ctx.body = {
                success: false,
                retDes: '批量更新失败',
            }
        }
    }
}

export const npcController = new NpcController();