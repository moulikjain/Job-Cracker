import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Role-Specific Preparation',
      description: 'Every role demands unique skills. We provide tailored roadmaps for SWE, Data Analyst, QA, DevOps, and more.',
    },
    {
      icon: Zap,
      title: 'Real Interview Patterns',
      description: 'Study actual questions asked in previous years. Know exactly what each round evaluates and how to ace it.',
    },
    {
      icon: TrendingUp,
      title: 'Structured Study Plans',
      description: 'No more random prep. Get week-by-week plans aligned with your qualification and target company.',
    },
    {
      icon: Users,
      title: 'Company-Specific Insights',
      description: 'Different companies have different cultures and interview styles. We decode them for you.',
    },
  ];

  const outcomes = [
    'Clear understanding of what each company looks for',
    'Confidence to handle any interview round',
    'Efficient use of prep time with focused resources',
    'Knowledge of important dates so you never miss opportunities',
    'Access to similar role suggestions for backup options',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Why "Job Cracker"?</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Because landing your dream job shouldn't feel like solving a mystery.
              <br />
              We give you the exact playbook to <span className="font-bold">crack</span> your target role.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">The Problem We Solve</h2>
            <Card className="shadow-medium">
              <CardContent className="pt-6 space-y-4 text-lg">
                <p>
                  Most job seekers waste months preparing aimlessly. They consume random courses, practice generic
                  questions, and enter interviews unprepared for company-specific expectations.
                </p>
                <p>
                  <span className="font-semibold text-primary">Job Cracker</span> eliminates this chaos. We provide
                  laser-focused, role-and-company-specific preparation paths so you know exactly what to study, when to
                  study, and how to present yourself in each interview round.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Job Cracker Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What You Get</h2>
            <Card className="shadow-medium">
              <CardContent className="pt-8">
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
            <p className="text-xl leading-relaxed mb-8">
              We analyzed hundreds of interview experiences, company hiring patterns, and successful candidate journeys
              to create data-driven preparation paths. Each roadmap is built on real insights, not guesswork.
            </p>
            <p className="text-lg">
              <span className="font-semibold">Job Cracker</span> isn't just another resource—it's your strategic
              advantage in the competitive job market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Crack Your Dream Job?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your personalized prep journey today
            </p>
            <a href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold shadow-glow hover:shadow-xl transition-shadow"
              >
                Build My Prep Plan
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
