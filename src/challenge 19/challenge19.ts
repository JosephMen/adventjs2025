export function revealSantaRoute(routes: string[][]): string[] {

    if(routes.length === 0) return []
    const object = Object.fromEntries(routes)
    let value = routes[0][0]
    const result = [value] as string[]
    while((value = object[value])){
        result.push(value)
    }
    return result
}
