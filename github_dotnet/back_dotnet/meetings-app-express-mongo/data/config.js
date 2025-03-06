const { execSync } = require('child_process');

function createIndexMeetings(dbName, collectionName, dbHost, username, password) {
    // To connect: `mongo "mongodb+srv://${dbHost}/${dbName}" --username <username> --password <password>`
    return `mongosh --eval "db.${collectionName}.dropIndex( 'meetings_search' ); db.${collectionName}.createIndex( { name: 'text', description: 'text' }, { name: 'meetings_search' } );" ${dbName}`;
}

module.exports = {
    name: 'meetings-app',
    collections: [
        { name: 'users', file: './data/users.json' },
        { name: 'teams', file: './data/teams.json' },
        { name: 'meetings', file: './data/meetings.json', createIndex: createIndexMeetings }
    ],
    production: {
        protocol: 'mongodb+srv',
        host: process.env.DB_HOST || `localhost`,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectionQuery: 'retryWrites=true&w=majority',
        hasImportUri: true,
        importProtocol: 'mongodb+srv',
        importQuery: 'ssl=true&authSource=admin'
    },
    development: {
        protocol: `mongodb`,
        host: process.env.DB_HOST || `localhost`,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        hasImportUri: false
    },
    getEnvSettings(env) {
        return this[env || process.env.NODE_ENV || 'development'];
    },
    getCredentialsStr(env) {
        const { username, password } = this.getEnvSettings(env);
        return ((username && password) ? `${username}:${password}@` : ``);
    },
    getConnectionStr(env) {
        const { protocol, host, connectionQuery } = this.getEnvSettings(env);

        return `${protocol}://${this.getCredentialsStr()}${host}/${this.name}${connectionQuery ? `?${connectionQuery}` : ``}`;
    },
    getImportOptionStr(env) {
        const { importProtocol, protocol, host, importQuery, hasImportUri } = this.getEnvSettings(env);

        if (hasImportUri) {
            return `--uri "${importProtocol || protocol}://${this.getCredentialsStr(env)}${host}/${this.name}${importQuery ? `?${importQuery}` : ``}"`;
        } else {
            return ``;
        }
    },
    getDbOptionStr(env) {
        const { hasImportUri } = this.getEnvSettings(env);

        if (!hasImportUri) {
            return `--db ${this.name}`;
        } else {
            return ``;
        }
    },
    getMongoimportCommand(collection, env) {
        return `mongoimport ${this.getImportOptionStr(env)} ${this.getDbOptionStr(env)} --collection ${collection.name} --drop --file ${collection.file} --jsonArray`;
    },
    load() {
        try {
            this.collections.forEach(collection => {
                console.log(this.getMongoimportCommand(collection));
                execSync(this.getMongoimportCommand(collection));
                console.log('successfully imported documents in collection');
            });
        } catch (err) {
            console.error(err.message);
        }
    },
    index() {
        try {
            this.collections.forEach(collection => {
                if (collection.createIndex) {
                    console.log(collection.createIndex(this.name, collection.name));
                    execSync(collection.createIndex(this.name, collection.name));
                    console.log('successfully created index on collection');
                }
            });
        } catch (err) {
            console.log(err.message);
        }

    },
    clean() {
        if (process.env.NODE_ENV === 'development') {
            try {
                if (process.argv[2] !== '--skip-seed') {
                    execSync(`mongo ${this.name} --eval "db.dropDatabase()"`);
                    console.log(`dropped database ${this.name}`);
                }
            } catch (err) {
                console.log(`some problems encountered when trying to drop database ${db.name}`);
                console.error(err.message);
            }
        }
    }
}