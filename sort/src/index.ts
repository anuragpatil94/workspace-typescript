import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";

const collection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection.data);
