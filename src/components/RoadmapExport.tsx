import { Download, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { RoadmapPhase } from '@/data/mockData';
import { toast } from 'sonner';

interface RoadmapExportProps {
  phases: RoadmapPhase[];
}

export const RoadmapExport = ({ phases }: RoadmapExportProps) => {
  const exportAsJSON = () => {
    const progress = localStorage.getItem('roadmapProgress') || '{}';
    const data = {
      phases,
      progress: JSON.parse(progress),
      exportedAt: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roadmap-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success('Roadmap exported as JSON');
  };

  const exportAsCSV = () => {
    const progress = JSON.parse(localStorage.getItem('roadmapProgress') || '{}');
    
    let csv = 'Phase,Node Title,Tags,Estimated Hours,Status\n';
    
    phases.forEach(phase => {
      phase.nodes.forEach(node => {
        const status = progress[node.id] || node.status || 'not_started';
        csv += `"${phase.title}","${node.title}","${node.tags?.join('; ') || ''}",${node.estimatedHours || ''},${status}\n`;
      });
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roadmap-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success('Roadmap exported as CSV');
  };

  const exportAsPNG = () => {
    toast.info('PNG export feature coming soon! Use browser screenshot for now.');
  };

  const exportAsPDF = () => {
    toast.info('PDF export feature coming soon!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Roadmap
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportAsJSON}>
          <FileText className="h-4 w-4 mr-2" />
          Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsCSV}>
          <FileText className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsPNG}>
          <Image className="h-4 w-4 mr-2" />
          Export as PNG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsPDF}>
          <FileText className="h-4 w-4 mr-2" />
          Export as PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
