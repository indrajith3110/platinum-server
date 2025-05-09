import { Hono } from 'hono';
import { betterAuthClient } from '../../integration/better-auth/index.js';

export const authenticationsRoute = new Hono();


authenticationsRoute.use((c) => {
    return betterAuthClient.handler(c.req.raw);
})