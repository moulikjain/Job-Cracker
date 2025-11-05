import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, FileText, BookOpen, FileCode, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { resources, type Resource } from '@/data/resources';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(resources.flatMap((r) => r.tags)));

  const typeIcons = {
    cheatsheet: FileText,
    guide: BookOpen,
    template: FileCode,
    tool: Wrench,
  };

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || resource.tags.includes(selectedTag);
    const matchesType = !selectedType || resource.type === selectedType;
    return matchesSearch && matchesTag && matchesType;
  });

  const difficultyColors = {
    Beginner: 'bg-green-500/10 text-green-700 dark:text-green-400',
    Intermediate: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
    Advanced: 'bg-red-500/10 text-red-700 dark:text-red-400',
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cheatsheets, guides, and tools to accelerate your prep
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Type:</span>
            <Button
              variant={selectedType === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType(null)}
            >
              All
            </Button>
            {['cheatsheet', 'guide', 'template', 'tool'].map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">Tags:</span>
            {selectedTag && (
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                {selectedTag} ✕
              </Badge>
            )}
            {!selectedTag && (
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 10).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-muted-foreground mb-6">
          Showing {filteredResources.length} of {resources.length} resources
        </p>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => {
            const Icon = typeIcons[resource.type];
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge className={difficultyColors[resource.difficulty]}>
                        {resource.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs cursor-pointer"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="secondary" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        View Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No resources found matching your criteria</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setSelectedType(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
