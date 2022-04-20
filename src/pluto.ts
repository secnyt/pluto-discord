import * as Discord from 'discord.js'

export default class Pluto {
    client: Discord.Client
    token: string

    constructor (token: string, options: any) {
        this.client = new Discord.Client(options)
        this.client.login(token).catch((err) => { throw err })

        this.client.on('ready', () => {
            this.setup()
        })
    }

    setup () {
       console.log(`Successfully logged in as ${this.client.user.tag}`)
    }
}