export const getProgressBar = (currentPercentage: number): string => {
  /**
   * Draw one cell for almost every 3%. This is to ensure the
   * progress bar renders fine on smaller terminal width
   */
  const completed = Math.ceil(currentPercentage / 3)
  const incomplete = Math.ceil((100 - currentPercentage) / 3)
  return `[${new Array(completed).join('=')}${new Array(incomplete).join(' ')}]`
}

/**
 *
 * @param number index
 * @param number index
 *
 * @returns
 */
export const processingProgressBar = (
  index: number,
  limit: number,
  logger
): number => {
  if (index < limit) {
    index++
    logger.logUpdate(
      `Processing: ${getProgressBar(
        Math.trunc((index * 100) / limit)
      )} ${Math.trunc((index * 100) / limit)}%`
    )
  }
  return index
}
