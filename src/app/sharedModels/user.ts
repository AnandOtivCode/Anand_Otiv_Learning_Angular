export interface User {
  id: number,
  joinDate:string,
  name:string,
  level:number,
  isOnline?:boolean,
  isFriend?: boolean,

}
