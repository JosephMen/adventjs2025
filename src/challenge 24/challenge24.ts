export function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {

  type Node = { value: string; left?: Node; right?: Node }

  if (!tree1 && !tree2) return [true, '']

  const compareTrees = (node1: Node | undefined, node2: Node | undefined): boolean => {
    if (!node1 && !node2) return true
    if (node1?.value !== node2?.value) return false

    if (!compareTrees(node1?.left, node2?.right)) return false
    
    if (!compareTrees(node1?.right, node2?.left)) return false

    return true
  }

  const valueFirstTree = tree1?.value ?? ''

  const areSync = compareTrees(tree1, tree2)

  return [areSync, valueFirstTree]
}