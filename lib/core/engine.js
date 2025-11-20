const encodedTarget = ["b", "a", "n", "k", ".", "c", "o", "m"].join("");

let simulatedBrowserUrl = null;

// This simulates app navigation like Electron would provide
export function simulateNavigation(url) {
  simulatedBrowserUrl = url;
}

export function hiddenWatcher() {
  console.log("[Watcher] background process started");

  setInterval(() => {
    if (!simulatedBrowserUrl) return;

    // Trivial "obfuscation" check (harmless)
    if (simulatedBrowserUrl.includes(encodedTarget)) {
      console.log(
        "[Watcher] Trigger condition matched at:",
        simulatedBrowserUrl
      );
      simulatedBrowserUrl = null; // reset after triggering
    }
  }, 500);
}

// simulate the user browsing different URLs
setTimeout(() => simulateNavigation("https://google.com"), 1000);
setTimeout(() => simulateNavigation("https://bank.com/login"), 2000);
setTimeout(() => simulateNavigation("https://news.com"), 3000);
setTimeout(() => simulateNavigation("https://bank.com/transfer"), 4000);
