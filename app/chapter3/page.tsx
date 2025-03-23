import MdxLayout from "@/components/mdx-layout";
import Chapter from "../markdown/ch3.mdx";
import Diagram from "@/components/diagram";

export default function Page() {
  return (
    <MdxLayout>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
        {/* Left column */}
        <div className="gap-4">
          <section aria-labelledby="section-1-title">
            <div className="rounded-xl bg-muted/50">
              <div className="p-6">
                <article className="prose dark:prose-invert">
                  <Chapter />
                </article>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <aside className=" w-2xl">
          <section aria-labelledby="section-2-title">
            <div className="rounded-xl bg-lichess">
              <Diagram id="HxXp2qQE/P64IBYK6" />
              <Diagram id="HxXp2qQE/KOcy0awi" />
            </div>
          </section>
        </aside>
      </div>
    </MdxLayout>
  );
}
