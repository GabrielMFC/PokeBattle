class SpecialEffects {
    #validate(allyMove) {
        let isSpecialEffect = allyMove.effect_entries[0].short_effect 

        return isSpecialEffect !== "Inflicts regular damage with no additional effect."
    }

    apply(allyMove) {
        if(!this.#validate(allyMove)){
            return
        }
    }
}

export default SpecialEffects