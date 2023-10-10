interface CreateArrayProps {
  n: number
}

export function createArray({ n }: CreateArrayProps) {
  return Array.from({ length: n }, () => {})
}
