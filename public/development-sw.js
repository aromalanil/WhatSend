/* eslint-disable */

self.addEventListener('push', (event) => {
  if (event.data) {
    const payload = JSON.parse(event.data.text());
    const { title, body } = payload;
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon: '/favicons/android-chrome-512x512.png',
      })
    );
  } else {
    console.log('Event does not contain any data');
  }
});

self.addEventListener('notificationclick', (event) => {
  const url = 'http://localhost:3000';
  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (self.clients.openWindow) {
        return self.clients.openWindow(url);
      }
      return null;
    })
  );
});
