import Link from 'next/link';
import { ArrowRight, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/20 px-6 py-24">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex justify-center">
          <div className="bg-red-900/20 p-6 rounded-full shadow-lg">
            <Stethoscope className="text-red-500 w-20 h-20" />
          </div>
        </div>

        <Badge className="bg-red-900/20 text-red-400 border-red-700/30 px-4 py-2 text-sm font-medium">
          404 Error
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-900 text-white"
          >
            <Link href="/">
              Go to Homepage <ArrowRight className="ml-2 h-4 w-4" />
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
    </section>
  );
};

export default NotFoundPage;
