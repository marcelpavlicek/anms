import MdxLayout from "@/components/mdx-layout";
import Chapter from "../markdown/ch2.mdx";
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
              <Diagram id="KChrx9PP/RozxcRVh" />
              <Diagram id="KChrx9PP/oYOPv57r#40" />
              <Diagram id="KChrx9PP/eXH1zJng#6" />
              <Diagram id="KChrx9PP/oOuMyYwu" />
              <Diagram id="KChrx9PP/707LMCWn" />
              <Diagram id="KChrx9PP/ixg0oNR1" />
              <Diagram id="KChrx9PP/D7OxyJvE" />
              <Diagram id="KChrx9PP/Wql1X3Fp#1" />
              <Diagram id="KChrx9PP/xU8qHsao" />
              <Diagram id="KChrx9PP/mIIR8GQ6#0" />
            </div>
          </section>
        </aside>
      </div>
    </MdxLayout>
  );
}
