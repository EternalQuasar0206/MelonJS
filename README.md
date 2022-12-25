# <img src="https://avatars.githubusercontent.com/u/105192336?s=400&u=4375e36be647d2a64727bbefc2382c2801897b39&v=4" width="26"> Melon [![npm version](https://badgen.net/npm/v/melon-runtime/)](https://www.npmjs.com/package/melon-runtime) [![npm downloads](https://badgen.net/npm/dm/melon-runtime)](https://www.npmjs.com/package/melon-runtime) [![license](https://badgen.net/github/license/MelonRuntime/Melon)](#)

> **Melon** is a fast modern .NET JavaScript runtime focused in rapid prototyping of projects, using minimal dependencies and functional programming.

📚 [Getting Started (documentation)](https://github.com/MelonRuntime/Melon/wiki) - 💬 [Discord Server](https://discord.gg/wDJDT9Yq7C)

## Why Melon?

- Quick develop and prototype scalable solutions without having to worry about dependencies
- Use features directly from [.NET](https://dotnet.microsoft.com/en-us/) directly from JavaScript
- Use a wide range of [npm]() libraries by default 

## Web development

Melon brings the power of ASP.NET to JavaScript, allowing you to build synchronous or asynchronous dedicated web applications with few lines, using an express-like interface that is easy and simple to use.

<table>
    <thead>
        <tr>
            <th>
                Melon (No dependencies)
            </th>
            <th>
                Node.js (Express)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 


```ts
const { http } = Melon;
const app = http.app();

app.get("/", () => "Hello world");
app.run();
```
</td><td>

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World"));
app.listen(80, () => {});
```
</td></tr></tbody></table>

## Intensive async I/O operations

With the API of files and directories adapted to a JavaScript interface, it becomes simple to manage directories or files at the byte or text level in a simple and fast way, with just the use of simple methods without worrying about directly managing streams and cursors.

```ts
async function createFileAndReadContent() {
  await fs.writeTextAsync("./hello.txt", "Hello world");
  const content = await fs.readTextAsync("./hello.txt");

  console.log(content);
}

createFileAndReadContent();

//"Hello world"
```

## Multithreading

Multithreaded parallel work can be done simply with Melon, the runtime uses an interface that creates a .NET "Thread" object and allows direct developer interaction via JavaScript, with automatic management by the internal CLR.

```ts
const { Thread } = Melon.dotnet.threading;

const workerThread = new Thread(() => {
  fs.writeText("./hello.txt", "Hello world");
  const content = fs.readText("./hello.txt");

  console.log(content);
});

workerThread.start();

//"Hello world"
```

## Direct .NET interop

It is possible to create a .NET instance manipulation object quickly using the Realm constructor, with it, there is the possibility to create instances with direct interoperability for use in code.

```ts
const { Realm } = Melon.dotnet;

const realm = new Realm();
realm.setInstance("randomInstance", "System:Random");
const randomInstance = realm.get("randomInstance");

console.log(randomInstance.next());

//1144300903
```
