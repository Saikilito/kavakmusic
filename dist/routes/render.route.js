"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const render_routes = express_1.Router();
render_routes.get("/home", controllers_1.RenderController.home);
render_routes.get("/albums/add", controllers_1.RenderController.addAlbum);
render_routes.get("/albums/:id", controllers_1.RenderController.album);
render_routes.get("/albums", controllers_1.RenderController.albums);
render_routes.get("/tracks/add", controllers_1.RenderController.addTrack);
render_routes.get("/tracks/:page", controllers_1.RenderController.tracks);
render_routes.get("/tracks", (req, res) => res.redirect('/tracks/1'));
render_routes.get("/settings", (req, res) => res.render('settings'));
render_routes.get("/users/add", controllers_1.RenderController.addUser);
render_routes.get("/users/edit/:id", controllers_1.RenderController.editUser);
render_routes.get("/users", controllers_1.RenderController.users);
render_routes.get("/", (req, res) => res.redirect('/home'));
// 404
render_routes.get("*", (req, res) => res.render('404'));
exports.default = render_routes;
