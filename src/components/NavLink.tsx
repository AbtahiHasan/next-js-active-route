"use client";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface NavLinkProps extends LinkProps {
  /**
   * The URL the link should navigate to
   */
  href: string;
  /**
   * The class name to apply when the link is active
   */
  activeClassName: string;
  /**
   * Whether the link should be active only on exact matches
   */
  exact?: boolean;
  /**
   * Additional class names to apply
   */
  className?: string;
  /**
   * The content of the link
   */
  children?: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  activeClassName,
  exact = false,
  className = "",
  children,
  ...props
}) => {
  const pathname: string | null = usePathname();
  const isActive: boolean | undefined = exact
    ? href === pathname
    : pathname?.includes(href);

  return (
    <Link
      href={href}
      className={cn(className ?? "", isActive && activeClassName)}
      {...props}
    >
      {children}
    </Link>
  );
};

export { NavLink };
