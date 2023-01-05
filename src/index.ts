// ! This is the main memory - check this:
let mainMemory: number | undefined [][]= [
    [, ,]
]
let currentColumn = 0; //* This is a pointer for the current column.


//* interface ICacheAlgo:

interface ICacheAlgo {
    getElement: (index: number) => number | undefined;
    setElement: (index: number, V: number) => number | undefined;
    removeElement: (index: number) => boolean;

}


//* abstract class AbstractCacheAlgo

export class AbstractCacheAlgo implements ICacheAlgo {
    key: string | undefined;
    value: string | undefined;
    // ! check if it is necessary: 
    constructor(key:string, value:string) {
        this.key = key;
        this.value = value;
    }
    
    getElement(index:number) {
        return mainMemory[index][currentColumn];
        
    };

    setElement(index:number, value: number){
        if (mainMemory[index][currentColumn]) {
            this.removeElement(index)
            this.setElement(index, value)
            
        } else {
            mainMemory[index][currentColumn] = value;
            return index
        }
        return undefined;
    }

    removeElement (index:number) {
        //* If there was something to remove:
        if (mainMemory[index][currentColumn]) {
            mainMemory[index][currentColumn] = null;
            return true;
        //* If there was no remove:
        } else {
            return false
        }
    }
}


//* concrete classes that implement caching




