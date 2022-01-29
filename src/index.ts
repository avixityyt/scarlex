import * as ScarlexClient from './structures/ScarlexClient'

import express from "express";
import session from "express-session";
import favicon from "serve-favicon";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import ejs from "ejs";
import { EventEmitter } from "events";

class ScarlexDocs extends EventEmitter {
    constructor(client, options) {
        super();

        if (
            parseInt(process.versions.node.split(".")[0]) < 16
        ) throw new Error("Node version must be at least 16.x.x");
    }
}

module.exports = ScarlexDocs;