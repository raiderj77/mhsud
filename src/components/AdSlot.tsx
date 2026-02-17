interface AdSlotProps {
  position: string;
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  return (
    <div className={`bg-sand-100 dark:bg-night-700 border border-dashed border-sand-300 dark:border-neutral-600 rounded-xl p-6 text-center ${className}`}>
      <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
        [ Ad Slot — {position} ]
      </span>
    </div>
  );
}
