import z from "zod";
export const registerschema=z.object({
    name:z.string().min(3,"Name must be 3 letter"),
    email:z.string().email("enter a valid email"),
    password:z.string().min(8,"password mjst be 8 char"),
    age:z.coerce.number().min(18,"enter a valid age")
})