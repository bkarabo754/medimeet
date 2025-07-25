import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="bg-red-900/30 border-red-700/30 px-4 py-2 text-red-400 text-sm font-medium"
            >
              Healthcare made simple
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect with doctors <br />
              <span className="gradient-title">anytime, anywhere</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              Book appointments, consult via video, and manage your healthcare
              journey all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-500 text-white hover:bg-red-900"
              >
                <Link href="/onboarding">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-700/30 hover:bg-muted/80"
              >
                <Link href="/doctors">Find Doctors</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/banner2.png"
              alt="Doctor consultation"
              fill
              priority
              className="object-cover md:pt-14 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
