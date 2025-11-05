import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  NodeProps,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { RoadmapPhase } from '@/data/mockData';

interface RoadmapVisualizerProps {
  phases: RoadmapPhase[];
  onNodeStatusChange?: (nodeId: string, status: string) => void;
}

const CustomNode = ({ data }: NodeProps) => {
  const getStatusIcon = () => {
    switch (data.status) {
      case 'done':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'in_progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'confident':
        return <CheckCircle2 className="h-4 w-4 text-blue-600" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getNodeStyle = () => {
    const baseStyle = 'px-4 py-3 rounded-lg border-2 shadow-sm min-w-[180px] transition-all';
    switch (data.status) {
      case 'done':
        return `${baseStyle} bg-green-50 dark:bg-green-950/20 border-green-500`;
      case 'in_progress':
        return `${baseStyle} bg-yellow-50 dark:bg-yellow-950/20 border-yellow-500`;
      case 'confident':
        return `${baseStyle} bg-blue-50 dark:bg-blue-950/20 border-blue-500 opacity-60`;
      default:
        return `${baseStyle} bg-card border-border hover:border-primary`;
    }
  };

  return (
    <div className={getNodeStyle()}>
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
      
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="font-semibold text-sm mb-1">{data.label}</div>
            {data.estimatedHours && (
              <div className="text-xs text-muted-foreground">
                ~{data.estimatedHours}h
              </div>
            )}
          </div>
          <button
            onClick={() => data.onToggle(data.id)}
            className="flex-shrink-0"
          >
            {getStatusIcon()}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {data.tags?.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-2 h-2" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export const RoadmapVisualizer = ({ phases, onNodeStatusChange }: RoadmapVisualizerProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleNodeToggle = useCallback((nodeId: string) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          const currentStatus = node.data.status || 'not_started';
          const nextStatus = 
            currentStatus === 'not_started' ? 'in_progress' :
            currentStatus === 'in_progress' ? 'done' :
            'not_started';
          
          const updatedNode = {
            ...node,
            data: { ...node.data, status: nextStatus },
          };

          if (onNodeStatusChange) {
            onNodeStatusChange(nodeId, nextStatus);
          }

          // Persist to localStorage
          const stored = localStorage.getItem('roadmapProgress') || '{}';
          const progress = JSON.parse(stored);
          progress[nodeId] = nextStatus;
          localStorage.setItem('roadmapProgress', JSON.stringify(progress));

          return updatedNode;
        }
        return node;
      })
    );
  }, [setNodes, onNodeStatusChange]);

  useEffect(() => {
    // Load progress from localStorage
    const stored = localStorage.getItem('roadmapProgress') || '{}';
    const progress = JSON.parse(stored);

    // Generate nodes and edges from phases
    const generatedNodes: Node[] = [];
    const generatedEdges: Edge[] = [];
    
    let xOffset = 50;
    const ySpacing = 120;
    const xSpacing = 280;
    const phaseSpacing = 150;

    phases.forEach((phase, phaseIdx) => {
      // Add phase label node
      generatedNodes.push({
        id: `phase-${phase.id}`,
        type: 'default',
        position: { x: xOffset, y: 0 },
        data: { label: phase.title },
        style: {
          background: 'hsl(var(--primary))',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontWeight: '600',
        },
        draggable: false,
      });

      phase.nodes.forEach((node, idx) => {
        const nodeId = node.id;
        const yPos = (idx + 1) * ySpacing + 60;

        generatedNodes.push({
          id: nodeId,
          type: 'custom',
          position: { x: xOffset, y: yPos },
          data: {
            label: node.title,
            tags: node.tags,
            estimatedHours: node.estimatedHours,
            status: progress[nodeId] || node.status || 'not_started',
            onToggle: handleNodeToggle,
            id: nodeId,
          },
        });

        // Add edges for dependencies
        if (node.dependsOn) {
          node.dependsOn.forEach((depId) => {
            generatedEdges.push({
              id: `${depId}-${nodeId}`,
              source: depId,
              target: nodeId,
              type: 'smoothstep',
              animated: progress[depId] !== 'done',
              style: { stroke: 'hsl(var(--primary))' },
            });
          });
        }

        // Connect within phase
        if (idx > 0 && !node.dependsOn) {
          const prevNodeId = phase.nodes[idx - 1].id;
          generatedEdges.push({
            id: `${prevNodeId}-${nodeId}`,
            source: prevNodeId,
            target: nodeId,
            type: 'smoothstep',
            style: { stroke: 'hsl(var(--muted-foreground))', strokeDasharray: '5,5' },
          });
        }
      });

      xOffset += (Math.max(phase.nodes.length, 2) * xSpacing) + phaseSpacing;
    });

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, [phases, handleNodeToggle, setNodes, setEdges]);

  const allTags = Array.from(
    new Set(phases.flatMap(p => p.nodes.flatMap(n => n.tags || [])))
  );

  const filteredNodes = selectedFilter
    ? nodes.filter(n => n.data.tags?.includes(selectedFilter))
    : nodes;

  return (
    <div className="space-y-4">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium">Filter by:</span>
        <button
          onClick={() => setSelectedFilter(null)}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${
            !selectedFilter
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedFilter(tag)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedFilter === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Roadmap visualization */}
      <div className="h-[600px] border rounded-lg bg-muted/10">
        <ReactFlow
          nodes={filteredNodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
        >
          <Background />
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              const status = node.data?.status;
              if (status === 'done') return '#16a34a';
              if (status === 'in_progress') return '#ca8a04';
              if (status === 'confident') return '#2563eb';
              return '#94a3b8';
            }}
          />
        </ReactFlow>
      </div>
    </div>
  );
};
