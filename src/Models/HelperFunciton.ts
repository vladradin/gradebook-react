
interface IConstructorFn<T1, T2> {
    new(param1: T2): T1;
}

export function createPlainObject<T1, T2>(constructorFn: IConstructorFn<T1, T2>, parameter1: T2): T1 {
    return Object.assign({}, new constructorFn(parameter1));
}