export interface Customer{
    id:number;
    name:string;
    email:string;
    status:"open" | "paid" | "due" | "inactive";
    duration : string;
    agent:string;
}