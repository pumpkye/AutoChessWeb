import { mysql } from "../util/mysql";
import Npc from "../model/npc_model";

mysql.addModels([Npc])

class NpcDao {
    constructor() {

    }

    async add(id: number, name: string, level1Rate?: number, level2Rate?: number, level3Rate?: number, quality?: number,
        qLevel1Rate?: number, qLevel2Rate?: number, qLevel3Rate?: number) {
        const npc = new Npc({
            id: id,
            name: name,
            level1_rate: level1Rate,
            level2_rate: level2Rate,
            level3_rate: level3Rate,
            quality: quality,
            quality_level1_rate: qLevel1Rate,
            quality_level2_rate: qLevel2Rate,
            quality_level3_rate: qLevel3Rate,
        });
        return await npc.save();
    }

    async update(id: number, name: string, level1Rate?: number, level2Rate?: number, level3Rate?: number, quality?: number,
        qLevel1Rate?: number, qLevel2Rate?: number, qLevel3Rate?: number) {
        name = decodeURI(name);
        let npc = await Npc.findById(id);
        if (npc) {
            let level1_rate = level1Rate != null ? level1Rate : npc.level1_rate;
            let level2_rate = level2Rate != null ? level2Rate : npc.level2_rate;
            let level3_rate = level3Rate != null ? level3Rate : npc.level3_rate;
            let qua = quality != null ? quality : npc.quality;
            let quality_level1_rate = qLevel1Rate != null ? qLevel1Rate : npc.quality_level1_rate;
            let quality_level2_rate = qLevel2Rate != null ? qLevel2Rate : npc.quality_level2_rate;
            let quality_level3_rate = qLevel3Rate != null ? qLevel3Rate : npc.quality_level3_rate;
            return await Npc.update({
                name: name,
                level1_rate: level1_rate,
                level2_rate: level2_rate,
                level3_rate: level3_rate,
                quality: qua,
                quality_level1_rate,
                quality_level2_rate,
                quality_level3_rate,
            }, {
                    where: { id: id }
                });
        } else {
            return await this.add(id, name, level1Rate, level2Rate, level3Rate, quality, qLevel1Rate, qLevel2Rate, qLevel3Rate);
        }
    }
}

export const npcDao = new NpcDao();