import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const RoadmapLegend = () => {
  const statusItems = [
    { icon: Circle, label: 'Not Started', color: 'text-muted-foreground' },
    { icon: Clock, label: 'In Progress', color: 'text-yellow-600' },
    { icon: CheckCircle2, label: 'Completed', color: 'text-green-600' },
    { icon: CheckCircle2, label: 'Already Confident', color: 'text-blue-600' },
  ];

  return (
    <div className="flex flex-wrap gap-6 items-center p-4 bg-muted/30 rounded-lg">
      <span className="text-sm font-medium">Legend:</span>
      {statusItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <item.icon className={`h-4 w-4 ${item.color}`} />
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
      <div className="ml-auto">
        <Badge variant="outline" className="text-xs">
          Click status icon to update progress
        </Badge>
      </div>
    </div>
  );
};
