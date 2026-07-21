module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
      numberOfRuns: 2,
      settings: {
        chromeFlags: "--no-sandbox --headless=new",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "total-blocking-time": ["warn", { maxNumericValue: 300 }],
      },
    },
    upload: { target: "temporary-public-storage" },
  },
};
