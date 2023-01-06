import {AbstractCacheAlgo} from './index';
import {ICacheAlgo} from './index';

export class Fifo<K, V> extends AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V>  {
    
    //this.getElement from AbstractCacheAlgo
    
    cacheIsFull(){
        return this.capacity == this.cache.size
    };
    
    //removeElement :

    fifoRemoveElement(){
        this.cache.forEach((value,key)=>{
            return this.removeElement(key); //return because we need that loop will iterate only one time on the first element that insersted
        })    
    }

    //setElement :

    fifoSetElement(key:K,value:V){
        if (this.cacheIsFull()){
            this.fifoRemoveElement();
        }  
        this.setElement(key,value)
    }

} 