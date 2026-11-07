export const SESSION_COOKIE:string;
export const allowedEmails:string[];
export function readSession(cookie:string|null):string|null;
export function sameOrigin(req:Request):boolean;
export function verifiedAdmin(token:string|null,request:(path:string,init?:RequestInit,token?:string)=>Promise<Response>):Promise<{email:string;token:string}|null>;
