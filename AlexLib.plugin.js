/**
 * @name AlexLib
 * @authorLink https://github.com/lol219/AlexLib
 * @updateUrl https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js
 * @source https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js
 * @description Required library for Alexandro's plugin , please do not delete it 
 */


    const DiscordObjects = {};
    const LibraryRequires = {};
    const LibraryModules = {};
    const InternalComponents = {NativeSubComponents: {}, LibraryComponents: {}};
    //const {Popouts, DiscordModules, DiscordSelectors, DiscordClasses, Utilities};
    const buildPlugin = ([Plugin, Api]) => {
    const { ContextMenu, EmulatedTooltip, Toasts, Settings, Popouts, Modals, Utilities, WebpackModules, Filters, DiscordModules, ColorConverter, DOMTools, DiscordClasses, DiscordSelectors, ReactTools, ReactComponents, DiscordAPI, Logger, PluginUpdater, PluginUtilities, DiscordClassModules, Structs } = Api;
    const { React, ModalStack, ReactDOM, ChannelStore, GuildStore, UserStore, DiscordConstants, Dispatcher, GuildMemberStore, GuildActions, PrivateChannelActions, LayerManager, InviteActions, FlexChild, Titles, Changelog: ChangelogModal } = DiscordModules;
}
 const shouldPass = e => e && e.constructor && typeof e.constructor.name === 'string' && e.constructor.name.indexOf('HTML');




    
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
const { existsSync, writeFileSync, readdirSync, readFileSync } = require('fs')
const { join } = require('path')
const { Module } = require('module')
 this.__isPowerCord = !!window.powercord && typeof BdApi.__getPluginConfigPath === 'function' || typeof global.isTab !== 'undefined';
  if ("undefined" != typeof global.isTab) return;
      const a = !!window.powercord && "function" == typeof BdApi.__getPluginConfigPath,
        b = BdApi.findModuleByProps("openModal", "hasModalOpen");



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
            version: "0.0.4",
            description: "Required library for Alexandro's plugin , please do not delete it "
        },
        "changelog":[
            {
                "title": 'Added',
                "type": 'added :',
                "items": [
                "**Settings** : Plugin Settings (autoUpdates)",
                "**Patchs** :   Patched Some Console error issues"
                
                
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
        if (window.Lightcord && !Node.prototype.isPrototypeOf(window.Lightcord) || window.LightCord && !Node.prototype.isPrototypeOf(window.LightCord) || window.Astra && !Node.prototype.isPrototypeOf(window.Astra)) AlexLib.ModalUtils.open(AlexLib, {
            header: "Attention!",
            subHeader: "Modified Client detected",
            text: "We detected that you are using LightCord. Unlike other client modificaton, LightCord is a completely modified client, which is no longer maintained by Discord but instead by a 3rd party. This will put your account at risk, not only because the 3rd party might use your account credentials as they like, you are also breaking a higher instance of Discord's ToS by using a 3rd party client instead of using a simple client mod which injects itself into the original client app. Many Plugins won't flawlessly run on LightCord. We do not support LightCord and as such, we do not provide help or support. You should switch to another modification as soon as possible.",
            buttons: [{color: "RED", contents: BDFDB.LanguageUtils.LanguageStrings.OKAY, close: true}]
        });



        const plugin = (Plugin, Api) =>
        {
             const {
                Patcher,
                DiscordModules,
                DiscordAPI,
                Settings,
                Toasts,
                PluginUtilities
            } = Api;



            return class AlexLib extends Plugin
            {
                 initialize() {
         const shouldPass = e => e && e.constructor && typeof e.constructor.name === 'string' && e.constructor.name.indexOf('HTML');
    if (shouldPass(window.Lightcord)) BdApi.Notifications.alert(`[${this.getName()}] Lightcord is an unofficial and unsafe client with stolen code that is falsely advertising that it is safe, Lightcord has allowed the spread of token loggers hidden within plugins redistributed by them, and these plugins are not made to work on it. Your account is very likely compromised by malicious people redistributing other peoples plugins, especially if you didn't download this plugin from [GitHub](https://github.com/1Lighty/BetterDiscordPlugins/edit/master/Plugins/MessageLoggerV2/MessageLoggerV2.plugin.js), you should change your password immediately. Consider using a trusted client mod like [BandagedBD](https://rauenzi.github.io/BetterDiscordApp/) or [Powercord](https://powercord.dev/) to avoid losing your account.`, { timeout: 0 });
    }

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
                 defaultSettings = {
                     autoUpdate: true,
                    
                };
                getChanges(){
                    this.settings = ZeresPluginLibrary.PluginUtilities.loadSettings(this.getName(), defaultSettings);
                    let settingsChanged = false;
                      if (this.settings.autoUpdate) {
      if (this._autoUpdateInterval) clearInterval(this._autoUpdateInterval);
      this._autoUpdateInterval = setInterval(_ => this.automaticallyUpdate(), 1000 * 60 * 60); // 1 hour
      this.automaticallyUpdate();
        if (settingsChanged) this.saveSettings();
         if (this.settings.versionInfo !== this.getVersion() && this.settings.displayUpdateNotes) {
      AlexLib.showChangelog(`${this.getName()} has been updated!`, this.getVersion(), this.getChanges()); //coming soon
      this.settings.versionInfo = this.getVersion();
      this.saveSettings();
      settingsChanged = false;
      const div = document.createElement('div');
    div.id = this.obfuscatedClass('ml2-settings-buttonbox');
    div.style.display = 'inline-flex';
    div.appendChild(this.createButton('Help', () => this.get_changelog()));
    let button = div.firstElementChild;
    while (button) {
      button.style.marginRight = button.style.marginLeft = `5px`;
      button = button.nextElementSibling;
    }

    list.push(div);

    }
    }
                }
                settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
                
                
                

                getSettingsPanel() {
                
                    let get_changelog = name => BdApi.Plugins.get(name)?.instance._config.changelog
                    

    
                    return Settings.SettingPanel.build(_ => this.saveAndUpdate(), ...[
                        new Settings.SettingGroup("Features").append(...[
                            new Settings.Switch("Auto Update AlexLib.","AutoUpdate AlexLib if there was an update", this.settings.autoUpdate, value => this.settings.autoUpdate = value)
                        ]),
                        
                          
                    ])
                }
                saveAndUpdate() {
                    cleanUp();
                    
                }

                onStart()
                {
                    //console.clear()
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
