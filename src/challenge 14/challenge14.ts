type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

export function findGiftPath(workshop: Workshop, gift: Gift): Path {
  // Code here

  const walkthrough = (object: Workshop, findValue: Gift) : Path => {
    for(let key in object){
      if(object[key] === findValue){
        return [key]
      }
      if(typeof object[key] === 'object'){
        const posiblePath = walkthrough(object[key], findValue)
        if (posiblePath.length > 0){
          return [ key, ...posiblePath]
        }
      }
    }
    return []
  }
  const result = walkthrough(workshop, gift)
  return result
}
