import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

const numberCollection = new NumberCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numberCollection);
numberSorter.sort();
const characterCollection = new CharacterCollection("HelloThisIsPodo");
const stringSorter = new Sorter(characterCollection);
stringSorter.sort();
console.log(numberCollection.data);
console.log(characterCollection.data);
