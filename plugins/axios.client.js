export default function ({ $axios }) {
  if (process.client) {
    const host = window.location.hostname;
    $axios.setBaseURL("https://" + host);
  }
}
