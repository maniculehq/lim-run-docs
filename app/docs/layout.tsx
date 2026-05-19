import docsConfig from "@/docs.config";
import { createNextDocsLayout, createNextDocsMetadata } from "@farming-labs/next/layout";
import { NavLinks } from "@/components/nav-links";
import { MadeWithManicule } from "@/components/made-with-manicule";

export const metadata = createNextDocsMetadata(docsConfig);

const DocsLayout = createNextDocsLayout(docsConfig);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavLinks />
      <DocsLayout>
        {children}
        <MadeWithManicule />
      </DocsLayout>
    </>
  );
}
