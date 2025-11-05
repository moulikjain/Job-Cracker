import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  BookOpen,
  FileText,
  Calendar,
  TrendingUp,
  Download,
  Edit,
  Share2,
  Clock,
  BarChart3,
  Zap,
  MapIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getPrepData, type PrepData } from '@/data/mockData';
import { toast } from 'sonner';
import { RoadmapVisualizer } from '@/components/RoadmapVisualizer';
import { RoadmapLegend } from '@/components/RoadmapLegend';
import { RoadmapExport } from '@/components/RoadmapExport';

const PrepDashboard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [prepData, setPrepData] = useState<PrepData | null>(null);
  const [userPersonalization, setUserPersonalization] = useState<string>('');

  const role = searchParams.get('role');
  const company = searchParams.get('company');
  const qualification = searchParams.get('qualification');

  useEffect(() => {
    if (role && qualification) {
      const data = getPrepData(role, company || 'Generic', qualification);
      setPrepData(data);

      // Load personalization from localStorage
      const saved = localStorage.getItem('jobCrackerFormData');
      if (saved) {
        const formData = JSON.parse(saved);
        const personalizations = [];
        
        if (formData.yearsOfExperience) {
          personalizations.push(`${formData.yearsOfExperience} Years Experience`);
        }
        if (formData.keySkills) {
          personalizations.push(`Skills: ${formData.keySkills.split(',').slice(0, 3).join(', ')}`);
        }
        if (formData.jobType) {
          personalizations.push(formData.jobType);
        }
        
        setUserPersonalization(personalizations.join(' • '));
      }
    } else {
      navigate('/');
    }
  }, [role, company, qualification, navigate]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!');
  };

  const handleExportPlan = () => {
    toast.success('Study plan export feature coming soon!');
  };

  if (!prepData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const difficultyColors = {
    Easy: 'bg-green-500/10 text-green-700 dark:text-green-400',
    Medium: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
    Hard: 'bg-red-500/10 text-red-700 dark:text-red-400',
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-base px-4 py-1">
                  {prepData.roleName}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <Badge variant="secondary" className="text-base px-4 py-1">
                  {prepData.companyName}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <Badge variant="outline" className="text-base px-4 py-1">
                  {qualification}
                </Badge>
              </div>
              {userPersonalization && (
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Tailored for:</span> {userPersonalization}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prep Time</p>
                    <p className="text-2xl font-bold">6-8 weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interview Rounds</p>
                    <p className="text-2xl font-bold">{prepData.interviewRounds.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <Badge className={difficultyColors[prepData.difficulty]}>{prepData.difficulty}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Salary Band</p>
                    <p className="text-lg font-bold">{prepData.salaryBand}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Role Overview */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Card className="mb-8 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Role Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{prepData.roleSummary}</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Key Skills Required:</h4>
                  <div className="flex flex-wrap gap-2">
                    {prepData.keySkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Hiring Season:</span>
                    <p className="font-medium">{prepData.hiringSeason}</p>
                  </div>
                  {prepData.techStack && (
                    <div>
                      <span className="text-sm text-muted-foreground">Tech Stack:</span>
                      <p className="font-medium">{prepData.techStack.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="visual">Visual Map</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="pyq">PYQs</TabsTrigger>
            <TabsTrigger value="plan">Study Plan</TabsTrigger>
          </TabsList>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap">
            <Card>
              <CardHeader>
                <CardTitle>Preparation Roadmap</CardTitle>
                <CardDescription>Follow this timeline to maximize your success rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {['Foundation', 'Intermediate', 'Advanced', 'Interview Ready'].map((phase, index) => (
                    <motion.div
                      key={phase}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {index + 1}
                        </div>
                        {index < 3 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-8">
                        <h4 className="font-semibold text-lg mb-1">{phase}</h4>
                        <p className="text-muted-foreground">
                          {index === 0 && 'Build strong foundations with core concepts and basics'}
                          {index === 1 && 'Practice intermediate problems and deepen your understanding'}
                          {index === 2 && 'Master advanced topics and complex scenarios'}
                          {index === 3 && 'Mock interviews, revisions, and final preparations'}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Visual Roadmap Tab */}
          <TabsContent value="visual">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MapIcon className="h-5 w-5" />
                      Interactive Roadmap Visualizer
                    </CardTitle>
                    <CardDescription>
                      Track your progress through each learning phase. Click status icons to update.
                    </CardDescription>
                  </div>
                  <RoadmapExport phases={prepData.roadmapPhases} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <RoadmapLegend />
                  
                  {/* Progress Overview */}
                  <div className="grid md:grid-cols-4 gap-4">
                    {prepData.roadmapPhases.map((phase) => {
                      const totalNodes = phase.nodes.length;
                      const progress = JSON.parse(localStorage.getItem('roadmapProgress') || '{}');
                      const completedNodes = phase.nodes.filter(
                        (n) => progress[n.id] === 'done'
                      ).length;
                      const percentage = Math.round((completedNodes / totalNodes) * 100);

                      return (
                        <Card key={phase.id} className="bg-muted/30">
                          <CardContent className="pt-6">
                            <h4 className="font-semibold mb-2">{phase.title}</h4>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary transition-all"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <span className="text-xs font-medium">{percentage}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {completedNodes}/{totalNodes} completed
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <RoadmapVisualizer phases={prepData.roadmapPhases} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Recommended Courses
                </CardTitle>
                <CardDescription>Curated learning resources from top platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {prepData.recommendedCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                        <CardDescription>{course.provider} • {course.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4">{course.description}</p>
                        <Button size="sm" variant="secondary" className="w-full" asChild>
                          <a href={course.link} target="_blank" rel="noopener noreferrer">
                            View Course
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interviews Tab */}
          <TabsContent value="interviews">
            <Card>
              <CardHeader>
                <CardTitle>Interview Structure</CardTitle>
                <CardDescription>What to expect in each round</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {prepData.interviewRounds.map((round, index) => (
                    <AccordionItem key={round.id} value={round.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Round {index + 1}</Badge>
                          <span className="font-semibold">{round.name}</span>
                          <span className="text-sm text-muted-foreground">• {round.duration}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          <p>{round.description}</p>
                          <div>
                            <h5 className="font-semibold mb-2">Evaluation Criteria:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {round.evaluationCriteria.map((criteria, i) => (
                                <li key={i}>{criteria}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Tips to Ace:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {round.tips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PYQs Tab */}
          <TabsContent value="pyq">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Previous Year Questions
                </CardTitle>
                <CardDescription>Real questions asked in past interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prepData.previousYearQuestions.map((q) => (
                    <Card key={q.id} className="bg-muted/30">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <p className="font-medium flex-1">{q.question}</p>
                          <Badge className={difficultyColors[q.difficulty]} variant="outline">
                            {q.difficulty}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <Badge variant="secondary">{q.round}</Badge>
                          {q.topics.map((topic) => (
                            <Badge key={topic} variant="outline">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Study Plan Tab */}
          <TabsContent value="plan">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      6-8 Week Study Plan
                    </CardTitle>
                    <CardDescription>Structured learning path tailored to your qualification</CardDescription>
                  </div>
                  <Button onClick={handleExportPlan}>
                    <Download className="h-4 w-4 mr-2" />
                    Export Plan
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prepData.studyPlan.map((week) => (
                    <Card key={week.week} className="bg-gradient-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Badge>Week {week.week}</Badge>
                          {week.theme}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Daily Tasks:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {week.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-3 border-t">
                            <h5 className="font-semibold text-sm mb-1">Weekend Review:</h5>
                            <p className="text-sm text-muted-foreground">{week.weekendReview}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Similar Roles */}
        {prepData.similarRoles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Similar Roles You Might Like</CardTitle>
                <CardDescription>Explore related opportunities across companies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {prepData.similarRoles.map((similar) => (
                    <Card key={similar.role} className="hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">{similar.role}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {similar.companies.join(', ')}
                        </p>
                        <Badge variant="secondary">{similar.matchPercentage}% match</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Recruitment Dates */}
        {prepData.recruitmentDates.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Important Recruitment Dates
                </CardTitle>
                <CardDescription>Mark your calendar and don't miss deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prepData.recruitmentDates.map((date) => (
                    <div key={date.id} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="mt-1">
                        <Badge
                          variant={
                            date.type === 'application'
                              ? 'default'
                              : date.type === 'test'
                              ? 'secondary'
                              : date.type === 'interview'
                              ? 'outline'
                              : 'default'
                          }
                        >
                          {date.type}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold">{date.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {date.startDate}
                          {date.endDate && ` - ${date.endDate}`}
                        </p>
                        <p className="text-sm mt-1">{date.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PrepDashboard;
