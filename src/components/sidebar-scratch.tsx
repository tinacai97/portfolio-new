import React, { useState } from 'react';
// GET OUT NOOOOWWWWW
export function SidebarScratch() {
    const [open, setOpen] = useState(false);

    const CrappyMenuButton = <button onClick={() => setOpen(!open)} />;

    const TinasBetterMenuButton = null;

    // Which contents to render?
    let renderedContent;
    if (open) {
        renderedContent = <ExpandedContent />;
    } else {
        renderedContent = <CollapsedContent />;
    }
    
  return (
    // Surface
    <SidebarSurface>
        {CrappyMenuButton}
        {renderedContent}
    </SidebarSurface>
  );
}

function MenuIcon() {
    return <img src="" />
}

function SidebarSurface({ children }: { children: React.ReactNode }) {
    return <div className="sidebar-surface">{children}</div>;
}

function CollapsedContent() {
    return <div>TCai</div>
}

function ExpandedContent() {
    return <div>Die TCai Die</div>
}