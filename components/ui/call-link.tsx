import { BUSINESS } from "@/data/business";
export function CallLink({ compact = false }: { compact?: boolean }) {
  return <a className={compact ? "call-link call-link--compact" : "call-link"} href={BUSINESS.phoneHref}>{compact ? "Call" : `Call ${BUSINESS.phone}`}</a>;
}
