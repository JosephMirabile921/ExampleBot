const mysql = require('mysql')

export class MethodExample {
    input: string
    output: string

    constructor(input: string, output: string) {
        this.input = input
        this.output = output
    }
}

export class DatabaseManager {
    _pool: object

    constructor(
        host: string,
        user: string,
        password: string,
        database: string
    ) {
        this._pool = mysql.createPool({
            host: host,
            user: user,
            password: password,
            database: database,
        })
    }

    add(example: MethodExample): void {
        // TODO: implement
    }

    retrieve(methodName: string, hostLibrary: string): MethodExample {
        // TODO: implement
        return new MethodExample('', '')
    }
}
