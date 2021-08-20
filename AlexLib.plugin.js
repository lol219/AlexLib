/**
 * @name AlexLib
 * @authorLink https://github.com/BlueCannonBall
 * @updateUrl https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js
 * @source https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js
 * @description Required library for Alexandro's plugin , please do not delete it 
 */


    const DiscordObjects = {};
    const LibraryRequires = {};
    const LibraryModules = {};
    const InternalComponents = {NativeSubComponents: {}, LibraryComponents: {}};
    //const {Popouts, DiscordModules, DiscordSelectors, DiscordClasses, Utilities};


    
    const Cache = {data: {}, modules: {}};
    var libraryInstance;
    var changeLogs = {};
    
    if (window.AlexLib_Global && window.AlexLib_Global.PluginUtils && typeof window.AlexLib_Global.PluginUtils.cleanUp == "function") {
        window.AlexLib_Global.PluginUtils.cleanUp(window.AlexLib_Global);
    }

    
class AlexLib{
    getName() {return "AlexLib";}
    getDescription() {return "Required library for Alexandro's plugin , please do not delete it ";}
    getVersion() {return "0.0.3";}
    getAuthor() {return "Alexandro";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js");
    }

    stop() {

    }
}

            

var emptyFunction = function () { };
window._uuid = 0;
window.ongoingTimeouts = {};

function antiSlowEvent () {
    document.onmouseover = emptyFunction;
    let all = document.body.getElementsByTagName("*");

    for (let i = 0, max=all.length; i<max; i++) {
        all[i].onmouseover = emptyFunction;
        all[i].onpointerover = emptyFunction;
    }
}

function timeoutLoop () {
    let removedTimeouts = [];
    for (let timeout in ongoingTimeouts) {
        if (Date.now() >= ongoingTimeouts[timeout].time) {
            ongoingTimeouts[timeout].func(ongoingTimeouts[timeout].args);
            removedTimeouts.push(timeout);
        }
    }
    for (let timeout in removedTimeouts) {
        delete ongoingTimeouts[removedTimeouts[timeout]];
    }
}

module.exports = (() =>
{

    const config =
    {
        info:
        {
            name: "AlexLib",
            authors:
            [
                {
                    name: "Alexandro",
                    discord_id: "820767057959321641",
                    github_username: "lol219",
                }
            ],
            version: "0.0.3",
            description: "Required library for Alexandro's plugin , please do not delete it "
        },
        "changelog":[
            {
                "title": 'fixed',
                "type": 'Fixed :',
                "items": [
                "**Performance** : Setting up a good performance for my plugins"
                
                
                ],
            }
        ],
          "main":"index.js"
    };

    return !global.ZeresPluginLibrary ? class
    {
        constructor() { this._config = config; }

        getName = () => config.info.name;
        getAuthor = () => config.info.description;
        getVersion = () => config.info.version;

        load()
        {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () =>
                {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (err, res, body) =>
                    {
                        if (err) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }


        start() { }
        stop() {}
        

        
            
    } : (([Plugin, Api]) => {

        const plugin = (Plugin, Api) =>
        {

            return class AlexLib extends Plugin
            {
                constructor()
                {
                    super();

                    this.consoleLog = console.log;
                    window._consoleLog = this.consoleLog.bind(console);
                    this.consoleInfo = console.info;
                    this.consoleWarn = console.warn;
                    this.consoleError = console.error;
                    this.consoleDebug = console.debug;
                    this.antiSlowEventInterval = null;
                    setInterval(timeoutLoop, 15);
                    this.badAddEventListener = window.addEventListener;
                    this.badAddEventListenerDocument = document.addEventListener;
                    this.slowTimeout = window.setTimeout;
                    this.clearTimeout = window.clearTimeout;
                }

                onStart()
                {
                    console.clear()
                    console.log = emptyFunction;
                    console.info = emptyFunction;
                    console.warn = emptyFunction;
                    console.error = emptyFunction;
                    console.debug = emptyFunction;
                    this.antiSlowEventInterval = setInterval(antiSlowEvent, 2000);
                    window.setTimeout = (func, time, ...args) => {
                        let id = window._uuid++;
                        if (time < 0) {
                            func(...args);
                            return id;
                        }
                        window.ongoingTimeouts[id] = {
                            func,
                            time: Date.now() + time,
                            args
                        };
                        return id;
                    };
                    window.clearTimeout = (timeout) => {
                        if (window.ongoingTimeouts[timeout]) {
                            delete window.ongoingTimeouts[timeout];
                        }
                    };
                    window.addEventListener = (...args) => {
                        if (args[0] != 'mouseover' && args[0] != 'pointerover') this.badAddEventListener.bind(window)(...args);
                    };

                    document.addEventListener = (...args) => {
                        if (args[0] != 'mouseover' && args[0] != 'pointerover') this.badAddEventListenerDocument.bind(document)(...args);
                    };
                }

                onStop()
                {
                    console.log = this.consoleLog;
                    console.info = this.consoleInfo;
                    console.warn = this.consoleWarn;
                    console.error = this.consoleError;
                    console.debug = this.consoleDebug;
                    window.setTimeout = this.slowTimeout;
                    window.clearTimeout = this.clearTimeout;
                    clearInterval(this.antiSlowEventInterval);
                    window.addEventListener = this.badAddEventListener;
                    document.addEventListener = this.badAddEventListenerDocument;
                }
            }
        };

        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();










    
    
