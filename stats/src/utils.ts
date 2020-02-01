export const dateStringToDate = (dateString: string): Date => {
  // ['28','10','2018']
  //   Convert numbers to integers
  const dateParts = dateString
    .split("/")
    .map((number: string): number => parseInt(number));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
