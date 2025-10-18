// gatsby-browser.js
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "A new version is available. Reload to update?"
  );
  if (answer) window.location.reload();
};
