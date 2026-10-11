#!/usr/bin/env bash
# Local artifact QA only. No network, credentials, services or production build.
set -euo pipefail
package=prototypes/professional-handoff
repo=$(git rev-parse --show-toplevel)
stage=$(mktemp -d /tmp/mct-handoff-stage.XXXXXX)
root=$(mktemp -d /tmp/mct-handoff-root.XXXXXX)
cd "$repo"
git ls-files -z -- "$package" tests/professional-monetization-boundary.test.mjs \
  src/app/for-professionals/page.tsx \
  src/app/for-professionals/screening-implementation-checklist/page.tsx \
  src/app/for-professionals/sample-readiness-review/page.tsx \
  docs/professional-review-operations-runbook.md \
  docs/professional-review-first-sale-readiness-2026-08-29.md |
  git checkout-index --stdin -z --prefix="$stage/"
test -f "$stage/$package/handoff.test.mjs" # Stage new inputs before running.
env -i PATH=/usr/bin:/bin unshare --user --map-root-user --mount --net --pid --fork bash -s -- "$stage" "$root" <<'ISOLATED'
set -euo pipefail
mount --make-rprivate /
mount -t tmpfs -o size=64m tmpfs "$2"
mkdir -p "$2"/{usr,work,tmp,proc,dev}
mount --rbind /usr "$2/usr"
while IFS= read -r target; do mount -o remount,bind,ro "$target"; done < <(findmnt -Rrn -o TARGET "$2/usr" | tac)
mount --bind "$1" "$2/work"
mount -o remount,bind,ro "$2/work"
ln -s usr/bin "$2/bin"
ln -s usr/lib "$2/lib"
ln -s usr/lib64 "$2/lib64"
mount -t proc proc "$2/proc"
for dev in null urandom random; do touch "$2/dev/$dev"; mount --bind "/dev/$dev" "$2/dev/$dev"; done
/usr/sbin/chroot "$2" /usr/bin/env -i PATH=/usr/bin:/bin HOME=/tmp LANG=C.UTF-8 \
  /usr/bin/setpriv --bounding-set=-all --inh-caps=-all --ambient-caps=-all --no-new-privs \
  bash -c 'cd /work; node --version; node --test prototypes/professional-handoff/handoff.test.mjs && node --test --test-name-pattern="professional pages use|founding review offer|internal review runbook|first-sale record requires" tests/professional-monetization-boundary.test.mjs'
ISOLATED
