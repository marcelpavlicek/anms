import MdxLayout from "@/components/mdx-layout";
import Chapter from "../markdown/ch1.mdx";
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
              <Diagram id="GtcclMzP/Zg5ZrKX9" />
              <Diagram id="GtcclMzP/hk6c25je#5" />
              <Diagram id="GtcclMzP/5rRHLCT6#14" />
              <Diagram id="GtcclMzP/Um0hdTAu#9" />
              <Diagram id="GtcclMzP/qqyus6Eo#7" />
              <Diagram id="GtcclMzP/STqumDLT#13" />
              <Diagram id="GtcclMzP/avpJvFCM#7" />
              <Diagram id="GtcclMzP/PyLVEiNW#6" />
              <Diagram id="GtcclMzP/qWeN2wmu" />
              <Diagram id="GtcclMzP/DSmomrS6#16" />
              <Diagram id="GtcclMzP/DXACwUdF" />
              <Diagram id="GtcclMzP/lKpfiWeq#6" />
              <Diagram id="GtcclMzP/w8MmqZq0#12" />
              <Diagram id="GtcclMzP/O4CBkzZN#3" />
              <Diagram id="pGtcclMzP/nziiSOO#8" />
            </div>
          </section>
        </aside>
      </div>
    </MdxLayout>
  );
}
