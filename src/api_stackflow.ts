const fetch = require('node-fetch')

async function stackflow_answer(answer_id: number) {
    const api_url = `https://api.stackexchange.com/2.2/answers/${answer_id}?order=desc&sort=votes&site=stackoverflow&filter=withbody`
    const response = await fetch(api_url)
    const data = await response.json()
    return data.items[0].body
}

async function get_stackflow(method: string, library: string) {
    //data is sorted based on "votes"
    let api_url =
        'https://api.stackexchange.com/2.2/questions?order=desc&sort=votes&tagged=api%3B' +
        method +
        '%3B' +
        library +
        '&site=stackoverflow'
    console.log(
        '\n',
        'METHOD: ',
        method.toUpperCase(),
        '\n',
        'LIBRARY:',
        library.toUpperCase(),
        '\n'
    )

    async function get_api(url: string) {
        const response = await fetch(url) //store fetch data in "response"
        var data = await response.json() //store "response" in form of Json

        let n = 0
        while (
            data.items[n] == null ||
            data.items[n].accepted_answer_id == null
        ) {
            n++
        }
        return data.items[n].accepted_answer_id
    }

    let answer_id = await get_api(api_url)
    let answer = await stackflow_answer(answer_id)
    return answer
}

export default get_stackflow
