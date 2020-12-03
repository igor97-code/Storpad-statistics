export default async function auth({email,password}){
    console.log(email,password);
    const response = await fetch("http://storpad.com/adm/api-php/api.php")
    
}