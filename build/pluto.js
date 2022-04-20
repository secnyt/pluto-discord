"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class Pluto {
    constructor(token, options) {
        this.client = new Discord.Client(options);
        this.client.login(token).catch((err) => { throw err; });
        this.client.on('ready', () => {
            this.setup();
        });
    }
    setup() {
        console.log(`Successfully logged in as ${this.client.user.tag}`);
    }
}
exports.default = Pluto;
