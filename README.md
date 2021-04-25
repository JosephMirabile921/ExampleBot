# ExampleBot

A Discord bot that provides users in a Discord server with examples of API calls.

## Running the Tests

To run the integration tests:

1. Ensure you have `distest` installed.

```
pip install distest
```
2. The integration tester is a separate bot from the ExampleBot. Get its token and set the environment:

On Windows:
```
setx TESTERTOKEN [token]
```

On Mac and Linux:
```
export TESTERTOKEN=[token]
```

3. Run `npm test`.

### Team Members

- David Carpenter - [carpenterd777](https://github.com/carpenterd777)
- Joseph Mirabile - [BarlesCharkley75](https://github.com/BarlesCharkley75)
- Anjali Paliwal - [grinchpal](https://github.com/grinchpal)
- Keye Li - [nebulouspianist](https://github.com/nebulouspianist)
- Kristin Kim - [krixstin](https://github.com/krixstin)

[Design Document](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/03882450f8c38a1560f01b3dd167a9b73a9db909/DESIGN.md)

[Process Document](PROCESS.md)

### Resources for Developers

- [discord.js docs](https://discord.js.org/#/docs/main/stable/general/welcome)
- [typescript docs](https://www.typescriptlang.org/docs/)
- [node docs](https://nodejs.org/en/docs/)
- [stackoverflow_api](https://api.stackexchange.com/docs)
- [mysql docs](https://www.npmjs.com/package/mysql)
