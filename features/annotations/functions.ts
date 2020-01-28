/**
 * NO TYPE INFERENCE FOR ARGUMENTS hence Always add annotations for arguments
 * @param a :number
 * @param b :number
 *
 * TYPE INFERENCE ONLY ON RETURN
 */
const add = (a: number, b: number): number => {
  return a + b;
};
