/** Line icons for the feature cards (remote, chat, apps). */
export default function Icon({ name }: { name: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "remote" && (<><rect x="7" y="2" width="10" height="20" rx="5" /><circle cx="12" cy="9" r="2.5" /><path d="M12 15v3" /></>)}
      {name === "chat" && <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" />}
      {name === "apps" && (<><rect x="3" y="3" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" /></>)}
    </svg>
  );
}
