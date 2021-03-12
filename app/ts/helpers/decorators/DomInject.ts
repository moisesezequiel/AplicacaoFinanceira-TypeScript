export function donInject(seletor:string){
    return function (target: any,key:string){
        let element :JQuery;
        const getter = function (){
            if(!element){
                console.log(`buscando  ${seletor} para injetar em ${key}`);
                element =$(seletor)
            }
            return  element;
        }
        Object.defineProperty(target,key,{
            get:getter
        });
    }
} 