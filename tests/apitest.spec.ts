import {test, expect , request} from "@playwright/test"



test('apitest', async ({request})=>{

     const resp=         await request.get("https://jsonplaceholder.typicode.com/posts")
     console.log(resp.json)
    


}




)
