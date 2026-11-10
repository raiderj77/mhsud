/** Shared deterministic indexing policy. No I/O or health/user input. */
import { normName, normPhone } from './facilitiesCore.mjs';

const FIELDS = ['street1', 'phone', 'intakePhone', 'careTypes', 'settings', 'payment', 'groupsServed', 'languages', 'agesServed', 'ownership', 'license'];
const present = (value) => Array.isArray(value) ? value.length > 0 : typeof value === 'string' ? value.trim().length > 0 : value != null;
export const completeness = (facility) => FIELDS.filter(key => present(facility[key])).length;
export const completeFacility = (f) => ['name', 'street1', 'city', 'state', 'zip'].every(key => present(f[key])) && (present(f.phone) || present(f.intakePhone)) && (present(f.careTypes) || present(f.settings));

/** Connected components: same normalized name and city/state, phone OR street. */
export function facilityPolicies(facilities) {
  const parent = facilities.map((_, i) => i);
  const root = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const seen = new Map();
  facilities.forEach((f, i) => {
    const scope = JSON.stringify([normName(f.name), normName(f.city), f.state.toUpperCase()]);
    if (!normName(f.name)) return;
    for (const [type, value] of [['phone', normPhone(f.phone)], ['street', normName(f.street1)]]) {
      if (!value) continue;
      const key = JSON.stringify([scope, type, value]);
      if (seen.has(key)) parent[root(i)] = root(seen.get(key));
      else seen.set(key, i);
    }
  });
  const groups = new Map();
  facilities.forEach((f, i) => { const key = root(i); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(f); });
  const policies = new Map();
  for (const group of groups.values()) {
    group.sort((a, b) => completeness(b) - completeness(a) || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
    const primary = group[0];
    for (const f of group) policies.set(f.path, { canonical: primary.path, primary: f.path === primary.path, complete: !!completeFacility(f), index: f.path === primary.path && !!completeFacility(f), clusterSize: group.length });
  }
  return policies;
}

export function directoryPaths(index, facilities) {
  const policies = facilityPolicies(facilities);
  return ['/facilities', '/facilities/pricing', '/sober-living', ...index.states.flatMap(s => [`/facilities/${s.code.toLowerCase()}`, ...s.cities.filter(c => c.count >= 3).map(c => `/facilities/${s.code.toLowerCase()}/${c.slug}`)]), ...facilities.filter(f => policies.get(f.path).index).map(f => f.path)];
}
