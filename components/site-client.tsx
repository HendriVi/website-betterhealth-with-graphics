"use client";

import { useEffect } from "react";
import type { Metric } from "web-vitals";

declare global {
  interface Window {
    __betterHealthSiteInitialized?: boolean;
  }
  interface WindowEventMap {
    "betterhealth:web-vital": CustomEvent<Metric>;
  }
}

function reportMetric(metric: Metric) {
  window.dispatchEvent(new CustomEvent("betterhealth:web-vital", { detail: metric }));

  try {
    const previous = JSON.parse(localStorage.getItem("betterhealth:web-vitals") || "{}");
    previous[metric.name] = {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
      recordedAt: new Date().toISOString(),
    };
    localStorage.setItem("betterhealth:web-vitals", JSON.stringify(previous));
  } catch {
    // Measurement remains available through the custom browser event.
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[BetterHealth Web Vital]", metric);
  }
}

interface SiteClientProps {
  markup: string;
  script: string;
}

export function SiteClient({ markup, script }: SiteClientProps) {
  useEffect(() => {
    void import("web-vitals/attribution").then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(reportMetric);
      onFCP(reportMetric);
      onINP(reportMetric);
      onLCP(reportMetric);
      onTTFB(reportMetric);
    });

    if (window.__betterHealthSiteInitialized) return;
    window.__betterHealthSiteInitialized = true;

    try {
      const initialize = new Function(script);
      initialize();
    } catch (error) {
      window.__betterHealthSiteInitialized = false;
      console.error("BetterHealth interactive layer failed to initialize", error);
    }
  }, [script]);

  return <div data-betterhealth-root dangerouslySetInnerHTML={{ __html: markup }} />;
}
