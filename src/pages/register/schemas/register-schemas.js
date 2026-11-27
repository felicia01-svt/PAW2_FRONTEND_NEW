import z from "zod"

const registerSchemas = z.object({
    username : z.string().trim().min(3, "Nama minimal 3 karakter"),
    email : z.email(),
    password : z.string().min(8, "Password minimal 8 karakter"),

})

export default registerSchemas






