import { withDocs } from "@farming-labs/next/config";

export default withDocs({
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "docs.limrun.com" }],
          destination: "/docs",
        },
        {
          source:
            "/:path((?!_next/|api/|docs/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|\\.well-known/).*)",
          has: [{ type: "host", value: "docs.limrun.com" }],
          destination: "/docs/:path",
        },
      ],
    };
  },
});
