export function InstallProcess() {
  const steps=[["01","Talk through the vehicle","Year, make, model, glass coverage, shade goals, and any questions."],["02","Confirm the plan","Rhino can review the glass and discuss available options before installation."],["03","Install and inspect","Film is installed in the shop, then the finished glass is checked before pickup."]];
  return <div className="process-line">{steps.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>;
}
