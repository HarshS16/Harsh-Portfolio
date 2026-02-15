"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function ViewerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/views");
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Error fetching viewer count:", err);
      }
    };

    fetchCount();
  }, []);

  if (count === null) return <div className="py-4 text-center text-sm text-muted-foreground">Loading viewer count...</div>;

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 text-sm text-muted-foreground hover:bg-muted/80 transition-colors">
        <Users className="w-4 h-4" />
        <span>
          You are viewer number :  <span className="font-semibold text-foreground">{count}</span>
        </span>
      </div>
    </div>
  );
}
