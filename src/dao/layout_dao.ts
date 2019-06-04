
import { mysql } from "../util/mysql";
import Layout from "../model/layout_model";

//自动加载目前有些问题，先手动加载进去
mysql.addModels([Layout])

class LayoutDao {
    constructor() { }

    async getLayoutList() {
        return await Layout.findAll({
            attributes: ['id', 'name'],
        });
    }

    async getAllLayout() {
        return await Layout.findAll();
    }

    async getLayout(id: number) {
        return await Layout.findById(id);
    }

    async addLayout(name: string, layoutStr: string) {
        const layout = new Layout({ name: name, layout_str: layoutStr });
        return await layout.save();
    }

    async updateLayout(id: number, name: string, layoutStr: string, randomWin: string, listWin: string) {
        return await Layout.update({ name: name, layout_str: layoutStr, random_win: randomWin, list_win: listWin }, { where: { id: id } });
    }

    async deleteLayout(id: number) {
        return await Layout.destroy({ where: { id: id } });
    }

}

export const layoutDao = new LayoutDao();