<div style="text-align: center">
    <h1>Sistema de Gestion de Turnos PY</h1>
</div>

<p>
  This is the repo of main SISTEMA DE GESTION DE TURNOS PY command , this are build with <a href="https://adonisjs.com/">AdonisJS</a> Framework.
</p>

## Versions

- Need at least the latest release of Node.js 14
- Typescript version 3.9.7 o more
- npm lastest version

## 👨‍💻 Install project Development

1. Clone the repo
2. cp .env.example .env
3. Complete environment variables
4. npm install
5. npm run dev (run server)

## Use Commander

- Create a new Command File:

```sh
node ace make:command Greet
```

- Update MainFest File:

```sh
node ace generate:manifest
```
## Sessions on the server
For those scripts or commands that can take a long time, there is a way to maintain a session on the server and be able to exit and not have to be there until the script ends.
* Check the version
```sh
screen --version
```
* Create a session
```sh
screen -S name-sesion
```
* List sessions
```sh
screen -ls
```
* Select a session
```sh
screen -r id-sesion
```
