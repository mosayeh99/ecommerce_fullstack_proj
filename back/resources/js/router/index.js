import {createRouter, createWebHistory} from "vue-router";
import Routes from "./routes.js";

const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

export default router
