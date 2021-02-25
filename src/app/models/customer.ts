import { Project } from "./project";

export interface Customer {
  id: number,
  name: string,
  projects: Project[]
}
