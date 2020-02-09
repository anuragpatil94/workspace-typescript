import "reflect-metadata";
export function get(path: string) {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    /**
     * 1st: name of the metadata variable we want to create
     * 2nd: value of the metadata we have to store
     * 3rd: target is the target object for which we are
     * defining metadata in this case maybe a class.
     * This is because as we saw that every class is stored like a object
     * and has a prototype object.
     * 4th: property of that object. if considered class as an object then its
     * functions are the properties
     */
    Reflect.defineMetadata("path", path, target, key);
  };
}
