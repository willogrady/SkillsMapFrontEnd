import { Role } from './role';

export interface RoleCompetencyMap {
        role_skill_map_id: number;
        role_id: number;
        role_title: string;
        comptency_id: number;
        level: number;
        version_id: number;
        roleGroup: Role;
        role: Role;
}
