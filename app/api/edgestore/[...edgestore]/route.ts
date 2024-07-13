import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { z } from "zod";
const es = initEdgeStore.create();
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket({
      maxSize: 1024 * 1024 * 5,
      accept: ["image/jpeg", "image/png"], // wildcard also works: ['image/*']
    })
    .input(
      z.object({
        type: z.enum(["image", "video"]),
      })
    )
    // e.g. /publicFiles/{category}/{author}
    .path(({ ctx, input }) => [{ type: input.type }]),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;