import type { APIRoute } from "astro";

const getLlmsTxt = () => "";

export const GET: APIRoute = () => new Response(getLlmsTxt());
