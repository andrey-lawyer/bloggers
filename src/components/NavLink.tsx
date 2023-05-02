import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IPropsNavLink } from "@/types/typeProps";

NavLink.defaultProps = {
  exact: false,
};

export default function NavLink({
  href,
  exact,
  children,
  ...props
}: PropsWithChildren<IPropsNavLink>) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    props.className += " underline border-2 border-sky-900";
  }

  return (
    <Link {...props} href={href}>
      {children}
    </Link>
  );
}
