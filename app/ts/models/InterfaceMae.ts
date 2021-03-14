import { Imprimivel, Igualavel } from './index';

export interface InterfaceMae<T> extends Imprimivel, Igualavel<T>  { 
    
}