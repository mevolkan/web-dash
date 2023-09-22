const apikey = process.env.API_KEY
const url = 'https://api.uptimerobot.com/v2/getMonitors?api_key=ur621229-2c593b2600572a501640c147';

const options = {
    method: 'POST',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': '0',
};


export async function getData() {
    const res = await fetch(url, options)

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch')
    }
    return json.data
}