type Gifts = number[]
type MaxWeight = number
type Result = number | null

export  function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {

    if(gifts.length == 0) return 0
    let sleighsNeeded = 1
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

    return sleighsNeeded
}