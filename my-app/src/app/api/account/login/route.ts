import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { client } from "@/sanity/lib/client";

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function POST(req: Request ){
  try{
    const {email, password} = await req.json();
    
    // 1. Sanity se user fetch kia he
    const query = `*[_type == "user" && email == $email][0]`
    const user = await client.fetch(query, {email}); 
    // console.log(user);
    

    if (!user){
        return NextResponse.json({error: "Email Not Found"}, {status: 404})
    };
    
    // 2. Password match kia , bcryst se (compare)
    const passwordMatch = await bcrypt.compare(password, user.password);
    // console.log(passwordMatch);
    

    if(!passwordMatch){
        return NextResponse.json({error: "Invalid Email or Password"}, {status: 401})
    };

    // 3. jwt generate kia .
    const token = jwt.sign(
        {
            fullName: user.fullName,
            email: user.email,
            role: user.role
             }, 
        SECRET_KEY, 
        { expiresIn: "24h"}
     );

    // 4. jo token jwt se generate hua use frontend pr bheja, 
    return NextResponse.json({token}, {status: 200});
  

} catch(error){
    return NextResponse.json({error: "Something went wrong"}, {status: 500})
}

}