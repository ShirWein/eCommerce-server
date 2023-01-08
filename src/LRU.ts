import {AbstractCacheAlgo, ICacheAlgo} from './index';

// ***  THIS IS LRU IMPLEMENTATION USING MAP ***

export class Lru<K, V> extends AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>  {

    //* Check if cache is full:
    isCacheFull():  boolean {
        return this.capacity == this.cache.size;
    }

    //* Get Element from cache (return value in the key that exists after HEAD of the Linked List):
    LRUGetElement(key: K) {
        const KeyExists = this.cache.has(key); // check if key exists in the cache. 
        let value;
        if (KeyExists) {
            value = this.getElement(key); // we retrieve the key.
            //! CHECK IF THESE 2 ROWS ARE NECESSARY: 
            this.removeElement(key);       // than we "remove" it, but actually we just pass it to the head.
            this.setElement(key, value);  // Move key to the head - LRU strategy. 
        }
        return value; // if key does NOT exist --> return undefined. 
    }



    //* Set Element to cache:
    LRUSetElement(key: K, value: V) {
        const KeyExists = this.cache.has(key); // check if key exists in the cache. 
        if (KeyExists) {            // update the value of that key. 
            this.removeElement(key);
            this.setElement(key, value);
        }
        if (this.isCacheFull()) {      // check if cache is full.
            const KeyDelete = this.cache.keys().next().value;   // define the key to be deleted. 
            this.removeElement(KeyDelete);
        }  
        this.setElement(key, value);  // if cache is NOT full set the new key into it. 
    }


    //* Remove Element from cache:
    LRURemoveElement(key: K) {
        this.removeElement(key)
    }   
    
}



