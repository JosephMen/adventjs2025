export default function elfBattle(elf1: string, elf2: string): number {

    const stringLength = Math.min(elf1.length, elf2.length)
    let hpElf1 = 3
    let hpElf2 = 3

    for(let i = 0; i < stringLength; i++){
        const moveElf1 = elf1[i]
        const moveElf2 = elf2[i]

        if(moveElf1 === 'A' && moveElf2 !== 'B') hpElf2--
        if(moveElf1 === 'F') hpElf2 -= 2

        if(moveElf2 === 'A' && moveElf1 !== 'B') hpElf1--
        if(moveElf2 === 'F') hpElf1 -= 2

        if (hpElf2 <= 0 && hpElf1 <= 0) return 0

        if(hpElf2 <= 0) return 1
        if(hpElf1 <= 0) return 2

    }
    if(hpElf1 === hpElf2) return 0
    return hpElf1 > hpElf2 ? 1 : 2
}
