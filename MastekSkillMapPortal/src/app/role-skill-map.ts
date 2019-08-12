import { Role } from './role';

export interface RoleSkillMap {
    role_skill_map_id: number;
    role_id: number;
    skillcode: string;
    level: number;
    version_id: number;
    role: Role
}