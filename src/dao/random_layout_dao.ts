import { mysql } from "../util/mysql";
import RandomLayout from "../model/random_layout_model";

mysql.addModels([RandomLayout])

class RandomLayoutDao {
    constructor() { }

    async getAllLayout() {
        return await RandomLayout.findAll();
    }

    /**
     * 
     * @param npcCount npc人口上限=>[npcCount*0.8,npcCount]
     * @param totalCost  npc总价值=>[totalCost*0.8,totalCost]
     */
    async getLayoutList(npcCount: number, totalCost: number) {
        let minCost = Math.floor(totalCost * 0.8);
        let minNpcCount = Math.floor(npcCount * 0.8);
        return await RandomLayout.findAll({
            where: {
                total_cost: {
                    $lte: totalCost,
                    $gte: minCost,
                },
                npc_count: {
                    $lte: npcCount,
                    $gte: minNpcCount,
                }
            },
        })
    }

    async deleteLayout(id: number) {
        return await RandomLayout.destroy({ where: { id: id } });
    }

    async addLayout(npc_count: number, total_cost: number, layout_str: string) {
        const layout = new RandomLayout({ npc_count, total_cost, layout_str });
        return await layout.save();
    }
}

export const randomLayoutDao = new RandomLayoutDao();