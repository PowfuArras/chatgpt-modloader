// ==UserScript==
// @name         ChatGPT ModLoader
// @version      0.1
// @description  A universal mod loader for ChatGPT
// @author       ツラヌナ#1984 ; Jekyllean
// @match        https://chat.openai.com/chat/*
// @icon         https://raw.githubusercontent.com/PowfuArras/chatgpt-modloader/master/images/script-icon.png
// @license      GNU General Public License v3.0
// @grant        none
// ==/UserScript==

(function () {
    class Event {
        constructor(initationFunction) {
            this._subscribers = new Map();
            this._subscriberID = 0;
            initationFunction(data => this.trigger(data));
        }

        trigger(data) {
            this._subscribers.forEach(subscriber => subscriber(data));
        }

        subscribe(callback) {
            const subscriberID = this._subscriberID++;
            this._subscribers.set(subscriberID, callback);
            return subscriberID;
        }

        unsubscribe(subscriberID) {
            this._subscribers.remove(subscriberID);
        }
    }

    class GPTModuleLoader {
        constructor() {
            this._sidebar_buttons = {};
        }
    }

    // const sidebar = [...document.querySelectorAll(".flex.h-full.flex-1.flex-col.space-y-1.p-2")][0];
    Object.defineProperty(window, 'gpt-mod-loader', { value: {
        readyEvent: new Event(trigger => addEventListener("load", () => trigger() )),
    }, writable: false });

    window["gpt-mod-loader"].readyEvent.subscribe(() => console.log("Hello World"));
})();