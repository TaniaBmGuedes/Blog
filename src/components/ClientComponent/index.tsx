"useClient";

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log("ClientComponent");
  return <div>ClientComponent {children}</div>;
}
