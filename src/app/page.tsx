import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Download, Droplets, ScanLine, Twitter, Instagram, Facebook, Cpu, Layers, Database } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Logo } from "@/components/logo";
import { FlowerAnimation } from "@/components/flower-animation";
import { generateAiFeatureExplanation } from '@/ai/flows/generate-ai-feature-explanation';

async function AiExplanation() {
  const result = await generateAiFeatureExplanation({
    flowerClassificationDetails: "The AI uses a deep learning model (ResNet101V2) trained on 100 flower species to accurately identify flowers from images. The TensorFlow Lite model is integrated directly into the Android app for real-time classification.",
    diseaseDetectionDetails: "The system provides detailed plant care information, including watering schedules, sunlight exposure, and propagation methods based on the flower's species."
  });

  return (
    <p>{result.explanation}</p>
  );
}

export default async function Home() {
  const features = [
    {
      icon: <ScanLine className="w-8 h-8 text-primary" />,
      title: "Flower Classification",
      description: "Snap a photo, and our ResNet101V2 model, trained on 100 flower species, will accurately identify it in real-time.",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Detailed Plant Care",
      description: "Receive comprehensive care information for your classified flower, including watering schedules, sunlight needs, and propagation tips.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Automated Watering",
      description: "Our IoT device monitors soil moisture and waters your plants automatically, ensuring they always have the perfect level of hydration.",
    },
  ];

  const galleryImages = [
    { src: "https://picsum.photos/400/800?random=1", alt: "Phulbari app flower classification screen", hint: "app screenshot" },
    { src: "https://picsum.photos/400/800?random=2", alt: "Phulbari app plant care details screen", hint: "plant care" },
    { src: "https://picsum.photos/400/800?random=3", alt: "Phulbari app IoT moisture monitoring screen", hint: "iot dashboard" },
    { src: "https://picsum.photos/400/800?random=4", alt: "User taking a photo of a flower with the app", hint: "flower photography" },
    { src: "https://picsum.photos/400/800?random=5", alt: "A healthy, well-watered plant", hint: "healthy plant" },
  ];
  
  const techStack = [
    { name: "TensorFlow & Keras", description: "Deep Learning Framework", icon: "🤖" },
    { name: "ResNet101V2", description: "Model Architecture", icon: "🧠" },
    { name: "Android (Java)", description: "Mobile Application", icon: "📱" },
    { name: "CameraX API", description: "Camera Integration", icon: "📸" },
    { name: "ESP32", description: "IoT Microcontroller", icon: "⚙️" },
    { name: "Firebase", description: "Cloud Services", icon: "☁️" },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">Phulbari</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild className="transition-transform hover:scale-105">
            <Link href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                  Happy Flowers, Happy You.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  An AI-powered mobile application that integrates deep learning and IoT technology to classify flowers and automate plant care.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="transition-transform hover:scale-105">
                    <Link href="#download">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                 <div className="absolute -inset-16 bg-secondary rounded-full blur-3xl opacity-50"></div>
                 <FlowerAnimation />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Smart Garden in Your Pocket</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Phulbari combines cutting-edge AI and IoT technology to make plant care effortless and enjoyable for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-background/50 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                     {feature.icon}
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Glimpse into Phulbari</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4 mb-12">
              Explore the beautiful and intuitive interface of the Phulbari app.
            </p>
            <Carousel opts={{ loop: true }} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="flex aspect-[1/2] items-center justify-center p-0">
                           <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={800}
                            className="object-cover w-full h-full"
                            data-ai-hint={image.hint}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
        
        <section id="ai-deep-dive" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                The Magic of AI in Your Garden
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Discover how Phulbari's intelligent features bring professional-level plant care to your fingertips.
              </p>
            </div>
            <Card className="mt-12 mx-auto max-w-3xl shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><Bot className="w-6 h-6"/>How Our AI Works</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-muted-foreground">
                    <AiExplanation />
                </CardContent>
            </Card>
          </div>
        </section>

        <section id="architecture" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">System Architecture</h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Phulbari combines a powerful mobile app, a smart IoT device, and cloud services to deliver a seamless plant care experience.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Layers className="w-6 h-6 text-primary" /> AI Classification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>User captures an image of a flower using the mobile app. The TensorFlow Lite model (ResNet101V2) classifies the flower and retrieves related care information.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Cpu className="w-6 h-6 text-primary" /> IoT Watering System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>An ESP32 with a soil moisture sensor reads real-time data. If moisture is below the threshold, the ESP32 activates the water pump automatically.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Database className="w-6 h-6 text-primary" /> Cloud Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The app displays real-time moisture data and irrigation history, with all sensor data stored and synchronized through Firebase Realtime Database.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Technologies Used</h3>
              <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <div className="text-4xl">{tech.icon}</div>
                    <p className="font-semibold text-sm">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ready to Grow Your Happiness?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download the Phulbari app today and transform your phone into a powerful gardening tool.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg" className="w-full transition-transform hover:scale-105">
                 <Link href="#">
                  <Download className="mr-2 h-5 w-5"/> Download for Android
                 </Link>
               </Button>
               <p className="text-xs text-muted-foreground">Available on the Google Play Store. Android 7.0+ required.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">&copy; 2024 Phulbari. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            <Facebook className="h-5 w-5" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
