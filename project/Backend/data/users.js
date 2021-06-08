import bycrypt from 'bcryptjs'
const users =[
    {
name:'Admin user',
email:'admin@example.com',
password:bycrypt.hashSync('123456',10),
isAdmin:true

    },
{
name:'Chala Gemechu',
email:'chala@example.com',
password:bycrypt.hashSync('123456',10)

},
{
name:'Abebe Debebe',
email:'abebe@example.com',
password:bycrypt.hashSync('123456',10)
}

]
export default users