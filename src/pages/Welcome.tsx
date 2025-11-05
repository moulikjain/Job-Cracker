import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import logo from '@/assets/logo.png';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-6 bg-primary/10 rounded-3xl backdrop-blur-glass border border-glass-border shadow-glow">
              <img src={logo} alt="Job Cracker Logo" className="h-16 w-16" />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent"
          >
            Welcome to Job Cracker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Your personalized job preparation partner
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Crack your dream job with company-specific plans, interview insights, and curated resources.
          </motion.p>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card className="p-8 backdrop-blur-glass bg-glass-bg border-glass-border shadow-medium max-w-md mx-auto">
              <Button
                size="lg"
                className="w-full text-lg h-14 shadow-glow mb-4"
                onClick={() => navigate('/home')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <button
                onClick={() => navigate('/home')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Skip Intro →
              </button>
            </Card>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-sm"
          >
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-muted-foreground">Resources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
