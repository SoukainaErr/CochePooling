export interface UserModel{
    id:string|undefined
    firstName:string
    lastName:string
    email:string
    emailAvatar:string|null|undefined
    password:string
    agree:boolean
}