"use strict";
/**
 * Import 
 */
const Server = require('./src/class/Server');

/**
 * Création d'un serveur virtuel
 */
const server = new Server(3000);
server.start();

