"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { assets, links } from "@/content/landing";
export function Brand() {
  return (
    <span className="brand">
      <Image src={assets.rankupMark} alt="" width={28} height={28} />
      <span>
        project<span className="brand-light">rankup</span>
      </span>
    </span>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#main" aria-label="Project Rankup home">
          <Brand />
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          <a href="#workflow">Product</a>
          <a href="#agent-mode">
            Agent Mode <span className="nav-separator">—</span>{" "}
            <span className="nav-soon">Coming Soon</span>
          </a>
          <a href={links.pricing}>Pricing</a>
          <a className="mobile-login" href={links.signin}>
            Log in
          </a>
        </nav>
        <div className="header-actions">
          <a className="login" href={links.signin}>
            Log in
          </a>
          <a className="button button-small button-light" href={links.signup}>
            Start free <ArrowUpRight size={14} />
          </a>
          <button
            id="menu-toggle"
            className="menu-toggle icon-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
