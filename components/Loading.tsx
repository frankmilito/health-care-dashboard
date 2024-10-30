import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoad({ count = 3 }: { count: number }) {
  const loaders = new Array(count).fill(null).map((_, i) => (
    <div key={i} className="flex items-center space-x-4 mb-8">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  ));
  return <div>{loaders}</div>;
}
