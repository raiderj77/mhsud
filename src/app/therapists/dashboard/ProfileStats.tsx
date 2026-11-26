"use client";

import { useEffect, useState } from "react";
import type { getProfileStats } from "@/lib/professionalServer";

const labels = {
  view: "Profile views",
  call_tap: "Call taps",
  email_tap: "Email taps",
  website_tap: "Website taps",
  share_copy: "Profile link copies",
};

export function ProfileStats({ slug }: { slug: string }) {
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getProfileStats>>>();
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/therapists/api/profile-events?${new URLSearchParams({ slug })}`, {
      cache: "no-store",
      signal: controller.signal,
    }).then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    }).then(data => {
      if (!controller.signal.aborted) setStats(data);
    }).catch(() => {
      if (!controller.signal.aborted) setStats(null);
    });
    return () => controller.abort();
  }, [slug]);

  return (
    <section className="space-y-2" aria-label="Profile activity">
      <h3 className="text-lg font-semibold">Profile activity</h3>
      {!stats ? <p role="status">{stats === null ? "Profile counts are unavailable." : "Loading profile counts."}</p> : (
        <table className="w-full text-left">
          <caption className="sr-only">Recorded activity for the current week and calendar month in UTC</caption>
          <thead><tr><th scope="col">Activity</th><th scope="col">This week</th><th scope="col">This month</th></tr></thead>
          <tbody>{(Object.keys(labels) as (keyof typeof labels)[]).map(event => (
            <tr key={event}>
              <th scope="row" className="font-normal">{labels[event]}</th>
              <td>{stats.week[event]}</td>
              <td>{stats.month[event]}</td>
            </tr>
          ))}</tbody>
        </table>
      )}
    </section>
  );
}
