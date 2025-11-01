import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ComponentShowcase from "@/components/component-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">Geist Design System</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive component library with 60+ components replicating Vercel&apos;s design language
          </p>
        </div>

        <Separator />

        <Tabs defaultValue="core" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="core">Core</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="core" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Various button styles and sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <Separator />
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Container components with header, content, and footer</CardDescription>
              </CardHeader>
              <CardContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content area with proper spacing and typography.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input & Label</CardTitle>
                <CardDescription>Text input fields and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input id="disabled" placeholder="Disabled" disabled />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>User avatars with fallback support</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>Loading placeholders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full rounded-md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert</CardTitle>
                <CardDescription>Alert messages and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>This is a default alert message with important information.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Destructive Alert</AlertTitle>
                  <AlertDescription>This is a destructive alert for error messages.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separator</CardTitle>
                <CardDescription>Visual dividers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p>Content above separator</p>
                  <Separator />
                  <p>Content below separator</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="space-y-6">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="navigation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Tab navigation component</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    Content for Tab 1
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    Content for Tab 2
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-4">
                    Content for Tab 3
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Collapsible content sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this component?</AccordionTrigger>
                    <AccordionContent>
                      This is an accordion component that allows users to expand and collapse content sections.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How does it work?</AccordionTrigger>
                    <AccordionContent>
                      Click on the trigger to expand or collapse the content. Only one section can be open at a time in single mode.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can customize the styling, behavior, and content to match your needs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Breadcrumb</CardTitle>
                <CardDescription>Navigation breadcrumbs</CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>Data tables with headers and rows</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of recent transactions</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Payment from Client</TableCell>
                      <TableCell>$2,500.00</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                      <TableCell className="text-right">2024-01-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Subscription Renewal</TableCell>
                      <TableCell>$99.00</TableCell>
                      <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                      <TableCell className="text-right">2024-01-20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Refund</TableCell>
                      <TableCell>-$150.00</TableCell>
                      <TableCell><Badge variant="destructive">Failed</Badge></TableCell>
                      <TableCell className="text-right">2024-01-22</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Date picker calendar</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scroll Area</CardTitle>
                <CardDescription>Custom scrollable areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32 w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={`scroll-item-${i + 1}`} className="text-sm">Item {i + 1}</div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aspect Ratio</CardTitle>
                <CardDescription>Maintain consistent aspect ratios</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  <div className="flex items-center justify-center h-full">16:9 Aspect Ratio</div>
                </AspectRatio>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>Progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Loading (33%)</Label>
                  <Progress value={33} />
                </div>
                <div className="space-y-2">
                  <Label>Halfway (50%)</Label>
                  <Progress value={50} />
                </div>
                <div className="space-y-2">
                  <Label>Complete (100%)</Label>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>Geist design system colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-background border" />
                    <p className="text-sm font-medium">Background</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-foreground" />
                    <p className="text-sm font-medium">Foreground</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-primary" />
                    <p className="text-sm font-medium">Primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-secondary" />
                    <p className="text-sm font-medium">Secondary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-muted" />
                    <p className="text-sm font-medium">Muted</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-accent" />
                    <p className="text-sm font-medium">Accent</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md bg-destructive" />
                    <p className="text-sm font-medium">Destructive</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-md border bg-card" />
                    <p className="text-sm font-medium">Card</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typography Scale</CardTitle>
                <CardDescription>Font sizes and weights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs">Extra Small (11px)</p>
                  <p className="text-sm">Small (12px)</p>
                  <p className="text-base">Base (14px)</p>
                  <p className="text-lg">Large (16px)</p>
                  <p className="text-xl">Extra Large (18px)</p>
                  <p className="text-2xl">2XL (20px)</p>
                  <p className="text-3xl">3XL (24px)</p>
                  <p className="text-4xl">4XL (32px)</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="font-normal">Regular (400)</p>
                  <p className="font-medium">Medium (500)</p>
                  <p className="font-semibold">Semibold (600)</p>
                  <p className="font-bold">Bold (700)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Component Library Stats</CardTitle>
            <CardDescription>Comprehensive component coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="space-y-2">
                <p className="text-3xl font-bold">44+</p>
                <p className="text-sm text-muted-foreground">Components</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">TypeScript</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">WCAG AA</p>
                <p className="text-sm text-muted-foreground">Accessible</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">Dark</p>
                <p className="text-sm text-muted-foreground">Mode Ready</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
