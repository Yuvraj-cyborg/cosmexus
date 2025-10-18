export default function DashboardSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-6 md:gap-8 md:grid-cols-12">
        <div className="md:col-span-4 space-y-6">
          <div className="data-card rounded-md p-4 md:p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-muted-foreground font-mono">Wind Speed</div>
                <div className="text-2xl font-mono text-foreground">36 KM/H</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-mono">Day Temperature</div>
                <div className="text-2xl font-mono text-foreground">-81 °F</div>
              </div>
            </div>
          </div>

          <div className="data-card rounded-md p-4 md:p-6">
            <div className="text-xs text-muted-foreground font-mono mb-4">Solar activity</div>
            <div className="relative h-36 rounded-md bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <div className="text-foreground font-mono text-sm"><span className="text-primary font-bold">56%</span> flashes</div>
              </div>
            </div>
          </div>

          <div className="data-card rounded-md p-4 md:p-6">
            <div className="text-xs text-muted-foreground font-mono mb-2">3D Projection</div>
            <div className="h-28 bg-background/60 border border-border rounded-sm" />
          </div>
        </div>

        <div className="md:col-span-5 data-card rounded-md overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
              <span className="px-2 py-0.5 rounded-full border border-border">Expedition</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-foreground leading-tight">KL ZONE/ AREA 2</h3>
            <div className="h-48 md:h-64 mt-8 rounded-sm bg-[url('/window.svg')] bg-cover bg-center opacity-70" />
            <div className="mt-6 flex items-center justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
              <button className="px-2 py-1 border border-border">3D</button>
              <button className="px-2 py-1 border border-border">2D</button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="data-card rounded-md p-4 md:p-6">
            <div className="text-xs text-muted-foreground font-mono mb-2">Radiation</div>
            <div className="text-2xl font-mono text-foreground">0.7 µSv</div>
            <div className="mt-4 text-xs text-muted-foreground font-mono">Purity <span className="text-foreground">78%</span></div>
          </div>

          <div className="data-card rounded-md p-4 md:p-6">
            <div className="text-xs text-muted-foreground font-mono mb-4">View</div>
            <div className="h-24 bg-background/60 border border-border rounded-sm" />
            <div className="mt-2 grid grid-cols-3 text-[10px] text-muted-foreground font-mono">
              <div>Min 1.2 g/cm³</div>
              <div className="text-center">Current 3.4 g/cm³</div>
              <div className="text-right">Max 7.9 g/cm³</div>
            </div>
          </div>

          <div className="data-card rounded-md p-4 md:p-6">
            <div className="text-xs text-muted-foreground font-mono mb-3">Mineral Ratio</div>
            <div className="h-20 bg-background/60 border border-border rounded-sm" />
            <button className="mt-4 w-full px-3 py-2 text-xs font-mono border border-border hover:border-primary/60 transition-colors">Generate Report</button>
          </div>
        </div>
      </div>
    </section>
  );
}


