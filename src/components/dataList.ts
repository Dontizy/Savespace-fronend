export type noteType = {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
}
export type urlLink ={
    id:number;
    title:string;
    url:string;
}
export const notes: noteType[] = [{ id: 243, title: "The dog barked", description: "On my way to work", createdAt: new Date() }, {id:437, title:"Compound of the unknown", description:"The horrors of war", createdAt:new Date()}]
export const urls:urlLink[] =[{id:321, title:"Attack on titan", url:"www.dowqlattackontitan.net"},{id:271, title:"Research", url:"www.seacherbooks.com"}]
