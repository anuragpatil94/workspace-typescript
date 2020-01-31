import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";

const numberCollection = new NumberCollection([10, 3, -5, 0]);
const characterCollection = new CharacterCollection("HelloThisIsPodo");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(50);
linkedList.add(-500);
linkedList.add(530);
linkedList.add(520);

numberCollection.sort();
characterCollection.sort();
linkedList.sort();
console.log(numberCollection.data);
console.log(characterCollection.data);
linkedList.print();
