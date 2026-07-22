export default function Home() {
  const serverTime = new Date().toLocaleTimeString();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Server Component</h1>

      <p>
        <strong>Server Time:</strong> {serverTime}
      </p>

      <p>
        This time was generated on the server before the HTML was sent to your
        browser.
      </p>
    </main>
  );
}
