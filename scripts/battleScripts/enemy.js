import getDamageEfficiency from "./utils/typeUtils.js";
import damageUtils from "./utils/damageUtils.js";
import apiUtils from "./utils/apiUtils.js";

class Enemy {
    constructor(stats, moves, OppositeTypes) {
        this.stats = stats; 
        this.moves = moves;
        this.OppositeTypes = OppositeTypes;
    }

    async analyzingOpponent() {
            let score = []
            let bestMove = null
            let bestScore = 0;            

            for(var i = 0;i < this.moves.length; i++){
                console.log(this.moves[i]);
                
                let moveData = await apiUtils.fetchMoveData(this.moves[i])
                let efficiency = await getDamageEfficiency(moveData.type.name, this.OppositeTypes)
                
                score.push(efficiency)
            }
            console.log(this.OppositeTypes);
            
            console.log(score);
            
    }
}

export default Enemy;