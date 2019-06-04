
import { Context } from "koa";
import { layoutDao } from "../dao/layout_dao";

class LayoutController {
    constructor() {

    }
    async getLayoutList(ctx: Context) {
        let layoutList = await layoutDao.getLayoutList();
        if (layoutList) {
            ctx.body = {
                success: true,
                retDes: '查询成功',
                ret: layoutList
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "没有获取到列表",
                ret: null
            }
        }
    }

    async getAllLayout(ctx: Context) {
        let layoutList = await layoutDao.getAllLayout();
        if (layoutList) {
            ctx.body = {
                success: true,
                retDes: '查询成功',
                ret: layoutList
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "没有获取到列表",
                ret: null
            }
        }
    }

    async getLayoutById(ctx: Context) {
        let id = ctx.params.id;
        let layout = await layoutDao.getLayout(id);
        if (layout) {
            ctx.body = {
                success: true,
                retDes: '查询成功',
                ret: layout
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "没有获取到目标布局",
                ret: null
            }
        }
    }
    async addLayout(ctx: Context) {
        let jsonObj = ctx.request.body;
        let layout = await layoutDao.addLayout(jsonObj.name, JSON.stringify(jsonObj.layout));
        if (layout) {
            ctx.body = {
                success: true,
                retDes: '添加成功',
                ret: layout
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "添加失败",
                ret: null
            }
        }
    }

    async deleteLayout(ctx: Context) {
        let id = ctx.params.id;
        let ret = await layoutDao.deleteLayout(id);
        if (ret) {
            ctx.body = {
                success: true,
                retDes: "删除成功",
                ret: ret,
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "删除失败",
                ret: null
            }
        }
    }

    async updateLayout(ctx: Context) {
        let id = ctx.params.id;
        let jsonObj = ctx.request.body;
        let preLayout = await layoutDao.getLayout(id);
        let name = jsonObj.name != null ? jsonObj.name : preLayout.name;
        let layout_str = jsonObj.layout != null ? JSON.stringify(jsonObj.layout) : preLayout.layout_str;
        let random_win = jsonObj.random_win != null ? jsonObj.random_win : preLayout.random_win;
        let list_win = jsonObj.list_win != null ? jsonObj.list_win : preLayout.list_win;
        let layout = await layoutDao.updateLayout(id, name, layout_str, random_win, list_win);
        if (layout) {
            ctx.body = {
                success: true,
                retDes: '更新成功',
                ret: layout
            }
        } else {
            ctx.body = {
                success: false,
                retDes: "更新失败",
                ret: null
            }
        }
    }
}

export const layoutController = new LayoutController();