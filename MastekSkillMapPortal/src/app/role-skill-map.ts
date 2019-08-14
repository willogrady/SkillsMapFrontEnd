import { Role } from './role';
export interface RoleSkillMap {
    role_skill_map_id: number;
    role_id: number;
    role_title: string;
    skillcode: string;
    level: number;
    version_id: number;
    roleGroup: Role;
    role: Role;
}