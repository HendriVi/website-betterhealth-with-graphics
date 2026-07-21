import { readFileSync } from "node:fs";
import path from "node:path";
import { gunzipSync } from "node:zlib";
import { SiteClient } from "@/components/site-client";

function extractSiteSource() {
  const encoded = readFileSync(path.join(process.cwd(), "content", "betterhealth.html.gz.b64"), "utf8").trim();
  const source = gunzipSync(Buffer.from(encoded, "base64")).toString("utf8");
  const body = source.match(/<body>([\s\S]*?)<script>/)?.[1]?.trim();
  const script = source.match(/<script>([\s\S]*?)<\/script>/)?.[1]?.trim();

  if (!body || !script) {
    throw new Error("The BetterHealth source HTML is missing its body or interactive script.");
  }

  const accessibleBody = body
    .replace('<header class="nav">', '<a class="skip-link" href="#measure">Skip to assessment</a>\n<header class="nav">')
    .replace('<input id="name" type="text" autocomplete="name" placeholder="Your name">', '<input id="name" name="name" type="text" autocomplete="name" placeholder="Your name" required>')
    .replace('<input id="email" type="email" autocomplete="email" placeholder="you@example.com">', '<input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>')
    .replace('<select id="itype">', '<select id="itype" name="enquiryType">')
    .replace('<textarea id="msg" placeholder="How can we help?"></textarea>', '<textarea id="msg" name="message" placeholder="How can we help?" required></textarea>')
    .replace('<label class="consent"><input type="checkbox">', '<label class="consent"><input type="checkbox" name="consent" required>');

  return { markup: accessibleBody, script };
}

export default function HomePage() {
  const site = extractSiteSource();
  return <SiteClient {...site} />;
}
