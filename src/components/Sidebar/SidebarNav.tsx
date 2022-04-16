import { Stack } from "@chakra-ui/react";
import { RiGitMergeLine, RiInputMethodLine, RiListCheck2, RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav(){
  return(
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
          <NavLink icon={RiListCheck2} href="/list">Relatos</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>
      </Stack>
  )
}