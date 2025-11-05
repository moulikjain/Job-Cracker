import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Calendar, BookOpen, Briefcase, Lightbulb, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { roles, companies, qualifications } from '@/data/mockData';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  const navigate = useNavigate();
  
  // Required fields
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  
  // Optional fields
  const [selectedCompany, setSelectedCompany] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [degree, setDegree] = useState('');
  const [college, setCollege] = useState('');
  const [pastCompanies, setPastCompanies] = useState('');
  const [keySkills, setKeySkills] = useState('');
  const [preferredLocations, setPreferredLocations] = useState('');
  const [jobType, setJobType] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [salaryExpectation, setSalaryExpectation] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  // Load saved data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('jobCrackerFormData');
    if (saved) {
      const data = JSON.parse(saved);
      setSelectedRole(data.role || '');
      setSelectedQualification(data.qualification || '');
      setSelectedCompany(data.company || '');
      setYearsOfExperience(data.yearsOfExperience || '');
      setGraduationYear(data.graduationYear || '');
      setDegree(data.degree || '');
      setCollege(data.college || '');
      setPastCompanies(data.pastCompanies || '');
      setKeySkills(data.keySkills || '');
      setPreferredLocations(data.preferredLocations || '');
      setJobType(data.jobType || '');
      setNoticePeriod(data.noticePeriod || '');
      setSalaryExpectation(data.salaryExpectation || '');
      setGithubLink(data.githubLink || '');
      setLinkedinLink(data.linkedinLink || '');
      setPortfolioLink(data.portfolioLink || '');
    }
  }, []);

  const handleBuildPlan = () => {
    if (selectedRole && selectedQualification) {
      // Save all form data to localStorage
      const formData = {
        role: selectedRole,
        qualification: selectedQualification,
        company: selectedCompany,
        yearsOfExperience,
        graduationYear,
        degree,
        college,
        pastCompanies,
        keySkills,
        preferredLocations,
        jobType,
        noticePeriod,
        salaryExpectation,
        githubLink,
        linkedinLink,
        portfolioLink,
      };
      localStorage.setItem('jobCrackerFormData', JSON.stringify(formData));

      const params = new URLSearchParams({
        role: selectedRole,
        qualification: selectedQualification,
        ...(selectedCompany && { company: selectedCompany }),
      });
      
      navigate(`/prep?${params.toString()}`);
    }
  };

  const isFormValid = selectedRole && selectedQualification;

  const valueProps = [
    { icon: Target, title: 'Role-wise Prep', description: 'Tailored roadmaps for every role and seniority level' },
    { icon: Lightbulb, title: 'Real Interview Patterns', description: 'Previous year questions and round breakdowns' },
    { icon: BookOpen, title: 'Curated Courses', description: 'Handpicked learning resources from top platforms' },
    { icon: Calendar, title: 'Important Dates', description: 'Never miss application and interview windows' },
  ];

  const popularCombos = [
    { role: 'Software Engineer', company: 'Microsoft', color: 'from-primary to-primary-glow' },
    { role: 'Data Analyst', company: 'Atlassian', color: 'from-accent to-green-600' },
    { role: 'QA Engineer', company: 'Infosys', color: 'from-blue-500 to-cyan-500' },
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Success Stories' },
    { icon: Briefcase, value: '50+', label: 'Companies Covered' },
    { icon: Clock, value: '100+', label: 'Hours of Content' },
    { icon: TrendingUp, value: '85%', label: 'Interview Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Crack Your Dream Job
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Role-wise roadmaps, real interview patterns, and date alerts—no fluff.
            </p>
            <p className="text-base text-muted-foreground mb-12">
              Get a personalized prep plan in seconds.
            </p>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="p-8 backdrop-blur-glass bg-glass-bg border-glass-border shadow-medium max-w-4xl mx-auto text-left">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  Only <span className="font-semibold text-foreground">Job Role</span> and{' '}
                  <span className="font-semibold text-foreground">Qualification</span> are required. 
                  The rest are optional and help tailor your prep plan.
                </p>
                
                <div className="space-y-6">
                  {/* Required Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Desired Job Role <span className="text-destructive">*</span></Label>
                      <Select value={selectedRole} onValueChange={setSelectedRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role..." />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Your Qualification <span className="text-destructive">*</span></Label>
                      <Select value={selectedQualification} onValueChange={setSelectedQualification}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {qualifications.map((qual) => (
                            <SelectItem key={qual} value={qual}>
                              {qual}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator className="my-6" />
                  
                  <p className="text-sm font-medium text-muted-foreground">
                    Optional Fields (for deeper personalization)
                  </p>

                  {/* Optional Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Target Company (Optional)</Label>
                      <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company..." />
                        </SelectTrigger>
                        <SelectContent>
                          {companies.map((company) => (
                            <SelectItem key={company} value={company}>
                              {company}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Years of Experience</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 2"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        min="0"
                        max="50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Graduation Year</Label>
                      <Input
                        type="number"
                        placeholder="e.g., 2024"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                        min="1980"
                        max="2030"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input
                        placeholder="e.g., B.Tech, MBA"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>College / University</Label>
                      <Input
                        placeholder="e.g., IIT Delhi"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Job Type</Label>
                      <Select value={jobType} onValueChange={setJobType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Notice Period</Label>
                      <Input
                        placeholder="e.g., 30 days"
                        value={noticePeriod}
                        onChange={(e) => setNoticePeriod(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Salary Expectation</Label>
                      <Input
                        placeholder="e.g., ₹12-18 LPA"
                        value={salaryExpectation}
                        onChange={(e) => setSalaryExpectation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Past Companies (comma-separated)</Label>
                    <Input
                      placeholder="e.g., TCS, Infosys"
                      value={pastCompanies}
                      onChange={(e) => setPastCompanies(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Key Skills (comma-separated)</Label>
                    <Input
                      placeholder="e.g., React, Node.js, Python, SQL"
                      value={keySkills}
                      onChange={(e) => setKeySkills(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Location(s)</Label>
                    <Input
                      placeholder="e.g., Bangalore, Hyderabad, Remote"
                      value={preferredLocations}
                      onChange={(e) => setPreferredLocations(e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>GitHub</Label>
                      <Input
                        type="url"
                        placeholder="github.com/username"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>LinkedIn</Label>
                      <Input
                        type="url"
                        placeholder="linkedin.com/in/username"
                        value={linkedinLink}
                        onChange={(e) => setLinkedinLink(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Portfolio</Label>
                      <Input
                        type="url"
                        placeholder="yourportfolio.com"
                        value={portfolioLink}
                        onChange={(e) => setPortfolioLink(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full text-lg h-14 shadow-glow mt-6"
                    onClick={handleBuildPlan}
                    disabled={!isFormValid}
                  >
                    Build My Prep Plan
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Job Cracker Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Laser-focused prep paths designed to help you crack your desired role
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-medium transition-shadow">
                  <prop.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Popular Prep Combinations</h2>
            <p className="text-muted-foreground">Start with these trending role-company pairs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularCombos.map((combo, index) => (
              <motion.div
                key={`${combo.role}-${combo.company}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="p-6 cursor-pointer hover:shadow-medium transition-all group"
                  onClick={() => {
                    setSelectedRole(combo.role);
                    setSelectedCompany(combo.company);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${combo.color} mb-4`}></div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {combo.role}
                  </h3>
                  <p className="text-muted-foreground">at {combo.company}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
