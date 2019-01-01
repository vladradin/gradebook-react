

export function createPlainObject<T1, T2>(actionType: { new(par: T2): T1; }, parameter1: T2): T1 {
    return Object.assign({}, new actionType(parameter1));
}