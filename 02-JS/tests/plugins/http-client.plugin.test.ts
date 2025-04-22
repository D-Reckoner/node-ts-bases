import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-cliente.plugin.ts", () => {

    test('httpClientPlugin should return a string', async () => {
        const data = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1")

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: expect.any(String),
            completed: expect.any(Boolean)
        })

    })

    test('httpClientPlugin should have POST/PUT/GET methods', () =>{

        expect(typeof httpClientPlugin.post).toBe('function')
        expect(typeof httpClientPlugin.put).toBe('function')
        expect(typeof httpClientPlugin.delete).toBe('function')

    })    

})