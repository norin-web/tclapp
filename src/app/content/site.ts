// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (App Store ID → run the iTunes lookup and refresh `app` and `specs`).

export const site = {
  brand: "TCL Remote",
  // PLACEHOLDER: owner email
  email: "support@example.com",
  year: new Date().getFullYear(),
  // PLACEHOLDER: operator (legal entity) — the brand is shown until it arrives
  operator: "TCL Remote",
  // TCL name used with the client's permission; confirm wording against their documents
  disclaimer: "TV remote for iPhone. TCL is a trademark of its respective owner.",
};

// PLACEHOLDER: App Store ID
const APP_ID = "0000000000";

export const app = {
  id: APP_ID,
  url: `https://apps.apple.com/app/id${APP_ID}`,
  // PLACEHOLDER: from https://itunes.apple.com/lookup?id=<ID> (empty = line hidden on the site)
  minIOS: "",
  category: "Utilities",
};

// " · iOS 17+" once minIOS is known, nothing until then
export const iosNote = app.minIOS ? ` · iOS ${app.minIOS}+` : "";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Everything below follows the app's own screens in the Figma design:
// Remote (D-pad / touchpad), Numpad, Keyboard, Apps, AI Chat, Connect your Device.
export const features = [
  { icon: "remote", lead: "Every button you need", rest: " on one calm screen." },
  { icon: "chat", lead: "AI Chat", rest: " answers your TV questions." },
  { icon: "apps", lead: "Open your apps", rest: " without digging through TV menus." },
];

export const controls = [
  { key: "touchpad", title: "Touchpad", text: "Swipe to move, tap to select.", img: "/images/screen-touch.png" },
  { key: "numpad", title: "Numpad", text: "Number keys and the four color buttons.", img: "/images/screen-numpad.png" },
  { key: "keyboard", title: "Keyboard", text: "Type a search straight into your TV.", img: "/images/screen-keyboard.png" },
];

export const steps = [
  { title: "Join the same Wi‑Fi", text: "Your phone and TV must be on the same network." },
  { title: "Pick your TV", text: "The app finds nearby devices. Tap yours in the list." },
  { title: "Confirm the code", text: "Enter the pairing code shown on your TV, and you are in." },
];

export const storeShots = [1, 2, 3, 4, 5, 6].map((n) => `/images/store-${n}.jpg`);

export const appFeatures = [
  { tag: "Remote", title: "Power, volume, channels and the D‑pad.", text: "Mute, voice, settings, Home, Back and TCL Home sit where your thumb expects them. Switch the center to a touchpad when you need it.", img: "/images/screen-dpad.png" },
  { tag: "Numpad and Keyboard", title: "Jump to a channel. Type a search.", text: "Number keys with the four color buttons, and a full keyboard that sends text to the search field on your TV.", img: "/images/screen-numpad.png" },
  { tag: "Apps", title: "Open streaming apps straight from your phone.", text: "YouTube, Netflix, Prime Video, Apple TV and more in one grid. Connect to your TV to see them.", img: "/images/screen-apps.png" },
  { tag: "AI Chat", title: "Help with your TV, in plain words.", text: "Start from a suggested question like “Why can't my phone find the TV?” or ask your own.", img: "/images/screen-chat.png" },
];

// PLACEHOLDER rows (Developer, Languages, Size, Age rating): fill from the iTunes
// lookup once the App Store ID arrives; rows left as "" are hidden on the site.
export const specs: [string, string][] = [
  ["Developer", ""],
  ["Category", app.category],
  ["Compatibility", app.minIOS ? `iPhone and iPad, iOS ${app.minIOS} or later` : "iPhone and iPad"],
  ["Languages", ""],
  ["Size", ""],
  ["Age rating", ""],
  ["Price", "Free · In‑app purchases"],
];

export const principles = [
  { title: "Familiar first", text: "Every button sits where it sits on the remote in your hand." },
  { title: "Quick to connect", text: "Same Wi‑Fi, pick your TV, confirm the code. That's the whole setup." },
  { title: "Help built in", text: "Stuck on a setting? Ask AI Chat without leaving the app." },
];

export type Faq = { q: string; a: string; topic: "Connecting" | "Remote" | "Subscription" };

export const faq: Faq[] = [
  { topic: "Connecting", q: "How do I connect to my TV?", a: "Put your phone and TV on the same Wi‑Fi network. Open the app, tap the TV icon at the top, pick your TV in the list and enter the code shown on the TV screen." },
  { topic: "Connecting", q: "Why can't the app find my TV?", a: "Make sure the TV is on and that both devices use the same Wi‑Fi network (not a guest network). Then open Connect your Device again to refresh the list." },
  { topic: "Connecting", q: "The app asks for Local Network access. Why?", a: "The app talks to your TV over your home network, so iOS asks for permission first. If you declined, turn it on in Settings → the app → Local Network." },
  { topic: "Connecting", q: "What if the pairing code doesn't work?", a: "Check the code on the TV screen and try again. If the code expired, close the pairing window and connect once more to get a new one." },
  { topic: "Remote", q: "How do I switch to another TV?", a: "Tap the TV name at the top of the remote and choose another TV from the list." },
  { topic: "Remote", q: "How do I type a search on the TV?", a: "Open a search field on the TV, then tap the keyboard button in the app and type. The text goes straight to the TV." },
  { topic: "Subscription", q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID. Manage or cancel them in your iPhone's Settings → your name → Subscriptions. Deleting the app doesn't cancel an active subscription." },
  { topic: "Subscription", q: "How do I restore a purchase?", a: "Previous purchases can be restored in the app with the same Apple ID they were made with. Refunds and billing are handled by Apple." },
];
