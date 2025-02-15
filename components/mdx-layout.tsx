import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Diagram from "./diagram";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3"> */}
          {/*   <div className="bg-muted/50 aspect-video rounded-xl" /> */}
          {/*   <div className="bg-muted/50 aspect-video rounded-xl" /> */}
          {/*   <div className="bg-muted/50 aspect-video rounded-xl" /> */}
          {/* </div> */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
            {/* Left column */}
            <div className="gap-4">
              <section aria-labelledby="section-1-title">
                <div className="rounded-xl bg-muted/50">
                  <div className="p-6">
                    <article className="prose dark:prose-invert">
                      {children}
                    </article>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <aside className=" w-2xl">
              <section aria-labelledby="section-2-title">
                <div className="rounded-xl bg-lichess">
                  <Diagram id="Zg5ZrKX9" />
                  <Diagram id="hk6c25je#5" />
                  <Diagram id="5rRHLCT6#14" />
                  <Diagram id="Um0hdTAu#9" />
                  <Diagram id="qqyus6Eo#7" />
                  <Diagram id="STqumDLT#13" />
                </div>
              </section>
            </aside>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
