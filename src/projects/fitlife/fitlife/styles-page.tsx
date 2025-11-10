// Styles Page - Color, Text, Effects, Grid, Spacing showcase

export const StylesPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-2">Design System</h1>
        <p className="text-muted-foreground mb-12">Colors, typography, effects, and spacing</p>

        {/* Colors */}
        <section className="mb-16">
          <h3 className="mb-6">Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="w-full h-24 bg-[#121212] rounded-xl border border-border mb-2" />
              <div className="text-sm">BG</div>
              <div className="text-muted-foreground">#121212</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#1E1E1E] rounded-xl border border-border mb-2" />
              <div className="text-sm">Surface</div>
              <div className="text-muted-foreground">#1E1E1E</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#B8FF37] rounded-xl mb-2 neon-glow" />
              <div className="text-sm">Primary</div>
              <div className="text-muted-foreground">#B8FF37</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#00E5FF] rounded-xl mb-2 neon-glow-cyan" />
              <div className="text-sm">Secondary (Cyan)</div>
              <div className="text-muted-foreground">#00E5FF</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#FF0055] rounded-xl mb-2 neon-glow-magenta" />
              <div className="text-sm">Magenta</div>
              <div className="text-muted-foreground">#FF0055</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#FFFFFF] rounded-xl mb-2" />
              <div className="text-sm">Text</div>
              <div className="text-muted-foreground">#FFFFFF</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#A0A0A0] rounded-xl mb-2" />
              <div className="text-sm">Text-Sub</div>
              <div className="text-muted-foreground">#A0A0A0</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#B8FF37] rounded-xl mb-2" />
              <div className="text-sm">Success</div>
              <div className="text-muted-foreground">#B8FF37</div>
            </div>
            <div>
              <div className="w-full h-24 bg-[#FF0055] rounded-xl mb-2" />
              <div className="text-sm">Error</div>
              <div className="text-muted-foreground">#FF0055</div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h3 className="mb-6">Typography</h3>
          <div className="space-y-6 bg-surface p-6 rounded-2xl border border-border">
            <div>
              <div className="text-muted-foreground mb-2">Display</div>
              <div style={{ fontSize: '40px', fontWeight: 700 }}>The quick brown fox</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Heading</div>
              <div style={{ fontSize: '32px', fontWeight: 600 }}>The quick brown fox</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Title</div>
              <div style={{ fontSize: '24px', fontWeight: 600 }}>The quick brown fox</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Body</div>
              <div style={{ fontSize: '16px', fontWeight: 400 }}>The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Caption</div>
              <div style={{ fontSize: '14px', fontWeight: 400, color: '#A0A0A0' }}>The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Button</div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>The quick brown fox</div>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section className="mb-16">
          <h3 className="mb-6">Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-2xl border border-border neon-glow">
              <h4 className="mb-2 text-[#B8FF37]">Neon Glow</h4>
              <p className="text-muted-foreground">Primary glow effect for active elements</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="mb-2">Glass Card</h4>
              <p className="text-muted-foreground">60% blur, 12% opacity backdrop</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-border shadow-2xl">
              <h4 className="mb-2">Elevation</h4>
              <p className="text-muted-foreground">Soft shadow for depth</p>
            </div>
          </div>
        </section>

        {/* Grid & Spacing */}
        <section className="mb-16">
          <h3 className="mb-6">Grid & Spacing</h3>
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <div className="mb-4">
              <div className="text-muted-foreground mb-3">8pt Grid System</div>
              <div className="grid grid-cols-8 gap-2">
                {[8, 16, 24, 32, 40, 48, 56, 64].map((size) => (
                  <div key={size} className="text-center">
                    <div className="bg-[#B8FF37] rounded" style={{ height: size }} />
                    <div className="text-muted-foreground mt-2">{size}px</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="text-muted-foreground mb-3">4pt Soft Grid</div>
              <div className="grid grid-cols-8 gap-2">
                {[4, 12, 20, 28, 36, 44, 52, 60].map((size) => (
                  <div key={size} className="text-center">
                    <div className="bg-[#00E5FF] rounded" style={{ height: size }} />
                    <div className="text-muted-foreground mt-2">{size}px</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="text-muted-foreground mb-3">Min Tap Target: 44px</div>
              <div className="inline-block bg-[#FF0055] rounded-full" style={{ width: 44, height: 44 }} />
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h3 className="mb-6">Border Radius</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-surface p-6 border border-border" style={{ borderRadius: '4px' }}>
              <div className="text-muted-foreground">4px</div>
            </div>
            <div className="bg-surface p-6 border border-border" style={{ borderRadius: '8px' }}>
              <div className="text-muted-foreground">8px</div>
            </div>
            <div className="bg-surface p-6 border border-border" style={{ borderRadius: '12px' }}>
              <div className="text-muted-foreground">12px</div>
            </div>
            <div className="bg-surface p-6 border border-border" style={{ borderRadius: '16px' }}>
              <div className="text-muted-foreground">16px</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
