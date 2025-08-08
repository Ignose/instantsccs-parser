This is a script aimed at simplifying the creation of a relay interface for scriptors, and even for normal users.

This can be used in two ways. The first is by a script as a library, the second can be used by a non-scripter by providing the name of a json file.

The json file is expected to be located in `relay/shared_relay/pages/`, an example of how you'd load it is provided in `relay/shared_relay/relay_Scripts.js`. Just replace the `test` with your own page name. You can also name files outside of the folder, by default it will look in that folder if the path provided does not contain a /.

https://github.com/libraryaddict/MafiaSharedRelay/blob/master/relay/shared_relay/pages/test.json

You can do multiple pages, `"test", "test2", "test3"`

If your relay page fails to load, then you did some bad json or missed a parameter or something. Try validate your json, and check against the `test.json` file to see if you missed something. This is not a dummy proof system.

Place a file with the same name but .css and it'll load that css file alongside your page of the same name. So `test.css` and `test.json`

For scripters, you can install the npm library located here:
You will be bundling this into your script.

To make use of it, you will be making a `relay/relay_MyScript.js` file that calls `if (handleApiRequest()); return; generateHTML(pages: HtmlPage[])`. You can also provide extra css by providing `ExtraHtml`

Components to be used are found in https://github.com/libraryaddict/MafiaSharedRelay/blob/master/src/mafia/RelayUtils.ts#L3 and work the same way as the .json structure does for the most part.

On the offchance you want to do something more complicated, you're probably better off making your own relay page. This used garbo's relay as a base, but reworked stuff until the only big similarity is the css.

If you want to execute custom javascript that invokes mafia's API, the only real solution is to make an XMLHttpRequest or fetch that points to a relay script which executes the javascript itself, as mafia will be executing that relay script not the browser and thus the api calls are available.

This is how this script sets the properties, it invokes a script that executes the javascript provided in the 'api' form field. Then returns the result of that javascript as the executed page's text.

If the page would return no text, then ' ' is returned to prevent a 404 error.

It loads the properties in a more simple manner, it's created in a data object when the relay page is first invoked. Which of course means that if the properties change while the relay script is open, the relay script will be unaware until it is refreshed.

To install as an API, use

`npm i mafia-shared-relay`

To install otherwise

`git checkout libraryaddict/MafiaSharedRelay release`
