import { assoc } from "../js/assoc";

//nanoid - лучшее решение (если рендерим прямо большие списки)
export const generateRandomString = () => {
    const a = Math.random().toString(36).substring(2,15)
    console.log(a);
    return(a)}

// в чем же разница? В первом случае функция генерирования строки вызовется один раз, 
// а во втором будет вызываться каждый раз как вызывается функция
export const assignId = assoc('id', generateRandomString());
export const generateId = <O extends object>(obj: O) => assignId(obj);