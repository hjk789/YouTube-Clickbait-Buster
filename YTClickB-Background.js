isChrome = typeof browser == "undefined"

if (isChrome)
    browser = chrome

browser.runtime.onMessage.addListener(async (msg) =>
{
    if (msg.from == 'YCB-Content')
        return (await fetch(msg.url, (msg.data ? { method: "POST", body: msg.data } : {}) )).text()
})
