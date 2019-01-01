import { compose, not, isEmpty } from "ramda";

interface IConstructorFn<T1, T2> {
    new(param1: T2): T1;
}

export const notEmpty = compose(not, isEmpty);

export function createPlainObject<T1, T2>(constructorFn: IConstructorFn<T1, T2>, parameter1: T2): T1 {
    return Object.assign({}, new constructorFn(parameter1));
}