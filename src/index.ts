// // ! This is the main memory - check this:
// let mainMemory: number | undefined [][]= [
//     [, ,]
// ]
// let currentColumn = 0; //* This is a pointer for the current column.


//* interface ICacheAlgo:

export interface ICacheAlgo<K, V> {
    getElement(key:K) : V | undefined;
    setElement(key: K, value: V) : K | undefined;
    removeElement(key: K) : boolean;

}

//* abstract class AbstractCacheAlgo:

export class AbstractCacheAlgo<K, V> implements ICacheAlgo<K,V>{
    cache: Map<K, V> = new Map();
    capacity: number;  
    
    getElement(key: K) : V | undefined {
        return this.cache.get(key);
        
    };

    setElement(key: K, value: V) : K | undefined {
        //* if key exists in cache:
        if (this.cache.get(key)) {
            this.removeElement(key)
            this.setElement(key, value)
        } else {
            this.cache.set(key, value);
            return key;
        }
        return undefined;
    }

    removeElement (key: K) : boolean {
        //* If there was something to remove:
        if (this.cache.get(key)) {
            this.cache.delete(key);
            return true;
        //* If there was no remove:
        } else {
            return false
        }
    }
}





