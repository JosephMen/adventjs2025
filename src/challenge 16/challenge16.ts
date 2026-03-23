type Gifts = number[]
type MaxWeight = number
type Result = number | null

export  function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {

    let sleighsNeeded = 0
    let currentWeight = 0

    for (let weight of gifts){
        if(weight > maxWeight) return null
        if(currentWeight + weight > maxWeight){
            sleighsNeeded++
            currentWeight = weight
            continue
        }
        currentWeight += weight
    }
    if(currentWeight > 0) sleighsNeeded++

    return sleighsNeeded
}