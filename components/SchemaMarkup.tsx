import React from "react";

import { products } from "@/lib/data";

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportingGoodsStore",
    name: "Apex Archery",
    image:
      "https://drive.google.com/uc?export=view&id=1CEJrTAESL3K7T64CdRN6Cw0ED_047uac",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
