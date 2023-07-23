import { Result } from "./result.model";

export interface IMDB{
    entries?:number;
    next?: string;
    page?: number;
    result?: Result[];
}

// export class IMDB {
    
//     constructor(entries:number=0,next: string='',page: number=0,result: Result[]=[]){
//        this._entries=entries;
//        this._next=next;
//        this._page=page;
//        this._result=result; 
//     }

//     private _entries: number = 0;
//     public get entries(): number {
//         return this._entries;
//     }
//     public set entries(value: number) {
//         this._entries = value;
//     }
//     private _next: string='';
//     public get next(): string{
//         return this._next;
//     }
//     public set next(value: string) {
//         this._next = value;
//     }
//     private _page: number;
//     public get page(): number {
//         return this._page;
//     }
//     public set page(value: number) {
//         this._page = value;
//     }
//     private _result: Result[]=[];
//     public get result(): Result[] {
//         return this._result;
//     }
//     public set result(value: Result[]) {
//         this._result = value;
//     }

// }