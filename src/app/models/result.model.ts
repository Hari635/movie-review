
export interface Result{
    id?:string;
    originalTitleText?:any;
    primaryImage?:any;
    releaseDate?:any;
    releaseYear?:any;
    titleText?:any;
    titleType?:any;
}

// export class Result{

//     constructor(id:string='', originalTitleText:any={},primaryImage:any={}
//                ,releaseDate:any={},releaseYear:any={},titleText:any={},
//                titleType:any={}){
//                 this._id=id;
//                 this._originalTitleText=originalTitleText;
//                 this._primaryImage=primaryImage;
//                 this._releaseDate=releaseDate;
//                 this._releaseYear=releaseYear;
//                 this._titleText=titleText;
//                 this._titleType=titleType;

//     }

//     private _id: string='';
//     public get id(): string {
//         return this._id;
//     }
//     public set id(value: string) {
//         this._id = value;
//     }
//     private _originalTitleText: any={};
//     public get originalTitleText(): any {
//         return this._originalTitleText;
//     }
//     public set originalTitleText(value: any) {
//         this._originalTitleText = value;
//     }
//     private _primaryImage: any={};
//     public get primaryImage(): any {
//         return this._primaryImage;
//     }
//     public set primaryImage(value: any) {
//         this._primaryImage = value;
//     }
//     private _releaseDate: any={};
//     public get releaseDate(): any {
//         return this._releaseDate;
//     }
//     public set releaseDate(value: any) {
//         this._releaseDate = value;
//     }
//     private _releaseYear: any={};
//     public get releaseYear(): any {
//         return this._releaseYear;
//     }
//     public set releaseYear(value: any) {
//         this._releaseYear = value;
//     }
//     private _titleText: any={};
//     public get titleText(): any {
//         return this._titleText;
//     }
//     public set titleText(value: any) {
//         this._titleText = value;
//     }
//     private _titleType: any={};
//     public get titleType(): any {
//         return this._titleType;
//     }
//     public set titleType(value: any) {
//         this._titleType = value;
//     }


// }